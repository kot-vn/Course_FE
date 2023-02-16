<template>
  <div>
    <main class="pt-5 text-center">
      <h1>Score:{{time}}</h1>

      <!-- INTRODUCTION START-->

      <div v-if="buffering">
        <p>
          The exam including {{ questions.length }} questions with the time limit of
          {{quiz.time}} minutes. You will pass the test by correcting at least
          {{ minimum }}/{{ questions.length }} of them
        </p>
        <p>Are you ready</p>
        <button class="btn btn-primary" @click="start">Ready</button>
      </div>

      <!-- INTRODUCTION END -->

      <ul class="text-center" v-show="processing || reviewing">

        <!-- NAVIGATION START -->
        <div class="btn-group">
          <button @click="currentIndex = currentIndex - 1" :style="{ visibility: prevVisibility }" class="btn btn-primary">
            Previous question
          </button>
          <span class="btn btn-danger me-2 ms-2" :class="{ active: currentIndex == index }" @click="currentIndex = index"
            v-for="(question, index) in questions" :key="index">{{ index+1 }}</span>
          <button @click="currentIndex = currentIndex + 1" :style="{ visibility: nextVisibility }" class="btn btn-primary">
            Next question
          </button>
        </div>

        <!-- NAVIGATION END -->

        <!-- QUESTIONS LIST START-->

        <li v-for="(question, index) in questions" :key="index">
          <div class="content" v-show="currentIndex == index">
            <p>{{ question.content }}</p>
            <div v-for="answer in question.answers" :key="answer.id" class="mt-2">
              <label class="cursor-pointer py-1" :class="{correct:isCorrect(answer.id,index),incorrect:isIncorrect(answer.id,index)}">
                <input type="radio" :name="question.id" :value="answer.id" v-model="solutions[index]" />
                <span class="ms-2">{{ answer.content }} {{ solutions }}</span></label>
            </div>
            <p v-show="reviewing">
              The solution for this question should be found in the lesson :
              <a href="facebook.com" target="”_blank”">
                {{ hintLesson[index] }}
              </a>
            </p>
          </div>
        </li>

        <!-- QUESTION LIST END -->

        <div class="text-center">
          <p v-show="!reviewing && processing">{{ countDown }}</p>
          <button @click="submit" v-if="!reviewing && processing" class="btn btn-primary mt-4">
            Submit
          </button>
        </div>
      </ul>
      <!-- NAVAGATION END -->

      <!-- FINISHED THEME START -->
      <button class="btn btn-primary" v-if="reviewing && !done" @click="
        reviewing = false;
      done = true;
      ">
        Quay lại
      </button>
      <div v-if="done">
        <p>
          Thời gian làm bài đã kết thúc, kết quả của bạn đã tự động được nộp
        </p>
        <h2>
          You are finished with score {{ score }}/{{ 10 * questions.length }}
          {{ processing }}
        </h2>
        <button class="btn btn-primary mb-4" @click="showResult">Show result</button>
        <div v-if="pass">
          <p>Congratulation !</p>
          <button>Explore next lesson</button>
        </div>
        <div v-if="!pass">
          <button class="btn btn-secondary" @click="tryAgain">Try again</button>
        </div>
      </div>
      <!-- FINISHED THEME END -->
    </main>

    <!-- SUBMIT WARNING START-->
    <modal-comp @cancel="submitWarning=false" @process="keepUp" :modaltitle="''" :modalbody="
      'Bạn vẫn chưa chọn đáp án cho các câu : ' +
      remains +
      ' .Bạn xác nhận vẫn muốn nộp bài ?'
    " :modalcancel="'Submit'" :modalconsent="'Cancel'" v-if="submitWarning" />
    <!-- SUBMIT WARNING END-->
  </div>
</template>
<script>
import ModalComp from "@/components/others/ModalComponent.vue";
import { startTimer } from "@/mymodules/timer.js";
import quizAPI from "@/api/users/quizzes/index.js"

export default {
  data() {
    return {
      // BUFFERING
      buffering: true,
      // PROCESSING
      quiz:false,
      submission:false,
      hintLesson: ["Basic Javascript"],
      solutions: [],
      serverSolutions:[],
      interval: 0,
      countDown: "",
      pass: false,
      done: false,
      processing: false,
      reviewing: false,
      questions: [],
      currentIndex: 0,
      score: 0,
      // SUBMIT WARNING
      submitWarning: false
    };
  },
  computed: {
    prevVisibility() {
      if (this.currentIndex <= 0) return "hidden";
      else return "visible";
    },
    nextVisibility() {
      if (this.currentIndex >= this.questions.length-1) return "hidden";
      else return "visible";
    },
    minimum(){
      return Math.floor(this.questions.length/2)
    },
    time(){
      return 60*this.quiz.time
    },
    submission_id(){
      return this.submission.id
    }
  },
  components: {
    ModalComp,
  },
  methods: {
    // START THE QUIZ
    async start() {
      this.solutions = Array(this.questions.length).fill(0)
      this.currentIndex = 0
      this.serverSolutions = []
      this.processing = true
      this.buffering = false
      this.score = 0
      this.interval = this.startTimer(this.time,this);
      setTimeout(this.submit,this.time*1000)
      this.submission = await quizAPI.startQuiz(9,1) 
    },
    // SUBMIT THE QUIZ
    async submit() {
      if (this.interval) 
        clearInterval(this.interval);
      this.modal = false;
      this.processing = false
      this.done = true
      let data = await quizAPI.submitQuiz(9,1,this.submission_id,this.solutions)
      this.score = data.score
      this.serverSolutions = data.solutions
    },
    // SHOW RESULT
    showResult() {
      this.currentIndex = 0;
      this.reviewing = true;
      this.done = false;
    },
    tryAgain() {
      this.currentIndex = 0
      this.buffering = true;
      this.done = false;
    },
    async testAPI() {
      this.quiz = await quizAPI.getQuiz(9, 1)
      this.questions = this.quiz.questions
    },
    isCorrect(id,index){
      return this.reviewing && id == this.serverSolutions[index]
    },
    isIncorrect(id,index){
      return this.reviewing && id != this.serverSolutions[index] && id == this.solutions[index]
    }
  },
  mounted() {
    this.startTimer = startTimer;
    this.testAPI()
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
  box-shadow: none;
}

li {
  text-align: left;
  max-width: 800px;
  margin: auto;
  margin-top: 20px;
}

.btn-danger {
  background-color: #fff;
  border: 1px solid #888;
  color: #333;
  border-radius: 9px !important;
  outline: none;
}

.btn-danger:hover {
  background-color: #bbb;
  border: 1px solid #888;
}

.btn.active {
  background-color: #bbb;
}

.correct {
  color: green;
}

.incorrect {
  color: salmon;
}
</style>

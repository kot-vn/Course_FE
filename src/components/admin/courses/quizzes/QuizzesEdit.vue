<template>
  <div class="mt-3" v-if="quiz">
    <h2 class="fw-bold text-center">Quiz#{{ quiz.id }}</h2>
    <div class="mb-4">
      <h3 class="fw-bold">Information</h3>
      <!-- INFORMATION FORM -->
      <div>
        <form @submit.prevent="modalQuizUpdate = true">
          <label class="w-100">Name:</label>
          <input v-model = "quiz.name" class="w-100 mb-3" type="text" />
          <label class="w-100">Time:</label>
          <input v-model = "quiz.time" class="w-100 mb-3" type="number" />
          <label class="w-100">Lesson ID:</label>
          <input v-model = "quiz.lesson_id" class="w-100 mb-3" type="number" />
          <label>Description: </label>
          <textarea v-model = "quiz.description"  class="mb-2" type="text" col="5" rows="5"></textarea>
          <div class="text-center">
            <button class="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
    <!-- QUESTIONS LISTS-->
    <div class="table-wrapper pt-3 border-top" v-if="questionsData">
      <h4 class="fw-bold text-start mb-4">QUIZS</h4>
      <div class="text-start mb-4">
        <button class="btn btn-primary" @click="questionNewFormShow = true">
          Add new question
        </button>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th colspan="4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(question, index) in questionsData.questions"
              :key="index"
            >
              <td>{{ question.id }}</td>
              <td>{{ question.name }}</td>
              <td>{{ question.des }}</td>
              <td><button @click="questionUpdate" class="btn btn-primary">Edit</button></td>
              <td><button class="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
        <div class="text-center">
          <button @click="modalShow = true" class="btn btn-primary mt-4 mb-3">
            Update
          </button>
        </div>
      </div>

      <!-- PAGINATION START -->
      <div
          class="vue-pagination mb-4"
          v-if="questionsData && questionsData.meta.pages > 1"
        >
          <paginate
            v-model="currentQuestionPage"
            :pageCount="questionsData.meta.pages"
            :click-handler="quizPaging"
          />
        </div>
        <!-- PAGINATION END -->

      <!-- NEW QUESTION FORM START-->
      <div class="overlay" v-if="questioNewFormShow||questionUpdateFormShow">
        <div class="form-popup">
          <h3 class="fw-bold">Add new question</h3>
          <form class="Quiz-form" @submit.prevent="add">
            <!-- QUESTION -->
            <label class="mb-2">Question: </label>
            <textarea
              type="text"
              class="w-100 mb-3"
              v-model="questions[0].question"
            ></textarea>
            <!-- ANSWERS -->
            <div class="mb-2">
              <label
                class="w-100"
                v-for="(answer, index) in questions[0].answers"
                :key="index"
                >{{ alphabet[index] }}
                <input
                  :value="questions[0].answers[index]"
                  v-model="questions[0].correct_answer"
                  name="modify-answer"
                  type="radio" />
                <input
                  class="ms-2 border-0"
                  type="text"
                  v-model="questions[0].answers[index]"
              /></label>
            </div>
            <!-- HINT LESSON -->
            <label
              >Hint lesson:
              <input type="text" v-model="questions[0].hint_lesson"
            /></label>
            <div class="text-end">
              <button class="btn btn-primary me-2" type="submit">Add</button>
              <button class="btn btn-secondary" @click="addForm = false">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- NEW QUESTION FORM END -->

      <!-- UPDATE QUESTION FORM START-->
      <div class="overlay" v-if="questioNewFormShow||questionUpdateFormShow">
        <div class="form-popup">
          <h3 class="fw-bold">Add new question</h3>
          <form class="Quiz-form" @submit.prevent="add">
            <!-- QUESTION -->
            <label class="mb-2">Question: </label>
            <textarea
              type="text"
              class="w-100 mb-3"
              v-model="questions[0].question"
            ></textarea>
            <!-- ANSWERS -->
            <div class="mb-2">
              <label
                class="w-100"
                v-for="(answer, index) in questions[0].answers"
                :key="index"
                >{{ alphabet[index] }}
                <input
                  :value="questions[0].answers[index]"
                  v-model="questions[0].correct_answer"
                  name="modify-answer"
                  type="radio" />
                <input
                  class="ms-2 border-0"
                  type="text"
                  v-model="questions[0].answers[index]"
              /></label>
            </div>
            <!-- HINT LESSON -->
            <label
              >Hint lesson:
              <input type="text" v-model="questions[0].hint_lesson"
            /></label>
            <div class="text-end">
              <button class="btn btn-primary me-2" type="submit">Add</button>
              <button class="btn btn-secondary" @click="addForm = false">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- UPDATE QUESTION FORM END -->
    </div>
    <!-- MODAL WARNING QUIZ UPDATE -->
    <ModalComponent
      v-if="modalQuizUpdate"
      @cancel="modalQuizUpdate = false"
      @process="updateQuiz()"
    />
    <!-- MODAL WARNING QUESTION DELETE-->
    <ModalComponent
      v-if="modalQuestionDelete"
      @cancel="modalQuestionDelete = false"
      @process="deleteQuestion()"
    />
  </div>
</template>
<script>
import ModalComponent from "@/components/others/ModalComponent.vue";
import { mapActions } from "vuex";
import quizzesAPI from "@/api/admin/quizzes/index";
import questionsAPI from "@/api/admin/questions/index";

export default {
  data() {
    return {
    // QUIZ
      // data
      quiz: false,
      // update form
      img: "",
      // warning modal course update
      modalQuizUpdate: false,

     // QUESTION
      // questions
      questionsData: false,
      currentQuestion: false,
      // pagination question
      currentQuestionPage: 1,
      questionsCount: false,
      // quiz new form
      newQuestion: {
        name: "",
        description: "",
        lesson_id: "",
        time: "",
      },
      questionNewFormShow: false,
      // quiz new form
      questionUpdateForm:false,
      // warning modal quiz delete
      modalQuestionDelete: false,
  }
},
  computed: {
    course_id(){
      return this.$route.params.id
    },
    quiz_id(){
      return this.$route.params.quiz_id
    }
  },
  methods: {
    // STORE
    ...mapActions("alert", ["showSuccess"]),
    // QUIZ
    // call api
    async getQuiz() {
      this.quiz = await quizzesAPI.showQuiz(this.course_id,this.quiz_id);
      console.log(this.quiz);
    },
    async updateQuiz() {
      await quizzesAPI.updateQuiz(this.course_id,this.quiz_id,this.quiz);
      this.showSuccess();
      this.getQuiz()
    },

    // QUESTION
    async getQuestions(page) {
      this.questionsData = await questionsAPI.getQuestions(this.course_id, page);
      console.log(this.questionsData);
      this.currentQuizPage = page;
      this.questionsCount = this.questionsData.questions.length;
    },
    async createQuestion() {
      await questionsAPI.createQuestion(this.course_id, this.newQuestion);
      this.showSuccess();
      this.quizNewFormShow = false
      this.getQuestions(1);
    },
    // update question
    async updateQueston(data) {
      await questionsAPI.updateQuestion(data);
      this.questionUpdateFormShow = false;
      this.showSuccess();
      this.getQuestions(this.currentQuestionPage);
    },
    async deleteQuestion() {
      await questionsAPI.deleteQuestion(this.course_id, this.currentQuestion.id);
      this.showSuccess();
      if (this.questionsCount == 1 && this.currentQuestionPage !=1)
        this.getQuestions(this.currentQuestionPage - 1);
      else this.getQuestions(this.currentQuestionPage);
    },
    // clickPagin
    quizPaging(page) {
      this.getQuestions(page);
    },

  },
  components: {
    ModalComponent,
  },
  created() {
    this.getQuiz()
  }
};
</script>
   
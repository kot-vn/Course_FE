<template>
  <div class="wrapper">
    <h1>quiz {{ quiz.title }}</h1>
    <div class="form-popup">
      <p>{{ quiz.title }}</p>
      <form class="quiz-form" @submit.prevent="addQuestion">
        <label
          >title: <input type="text" v-model="quiz.title"
        /></label>
        <label
          >Description: <input type="text" v-model="quiz.desription"
        /></label>
        <label
          >Tag: <input type="text" v-model="quiz.tag"
        /></label>
        <label
          >Category:
          <input type="text" v-model="quiz.category"
        /></label>
        <button type="submit">Change</button>
        <button >Cancel</button>
      </form>
    </div>
    <div class="form-question-wrapper" v-if="questionFormShow && load">
      <h4>Lesson {{ questions[currentIndex].id }}</h4>
      <p>{{ questions[currentIndex].title }}</p>
      <form class="question-form" @submit.prevent="show">
        <!-- QUESTION -->
        <label>Question: <textarea type="text" v-model="newQuestion.question"></textarea></label>
        <!-- ANSWERS -->
        <div>
          <label v-for="(answer,index) in newQuestion.answers" :key="index">{{alphabet[index]}} <input :value="newQuestion.answers[index]" v-model="newQuestion.correct_answer" name="modify-answer" type="radio" /> <input type="text" v-model="newQuestion.answers[index]" /></label>
        </div>
        <button @click="newQuestion.answers.push('')">Add more answer</button>
        <!-- HINT LESSON -->
        <label
        >Hint lesson: <input type="text" v-model="newQuestion.hint_lesson"
        /></label>
        <!-- TAG -->
        <label
        >Tag: <input type="text" v-model="newQuestion.tag"
        /></label>
        <!-- CATEGORY -->
        <label>Category: <input type="text" v-model="newQuestion.category" /></label>
        <button type="submit">{{ action }}</button>
        <button @click="questionFormShow = false">Cancel</button>
      </form>
    </div>
    <div class="text-start mb-2">
      <button @click="poolShow=!poolShow">Add new question from pool</button>
      <button @click="addAction">Create new question</button>
      <button @click="poolShow=!poolShow">Save</button>
    </div>
    <div :class="{shorten:poolShow}">
      <table >
      <tr>
        <th>ID</th>
        <th>Position</th>
        <th>Question</th>
        <th>Tag</th>
        <th>Category</th>
        <th>Move up</th>
        <th>Move down</th>
        <th>Delete</th>
      </tr>
      <tbody >
        <tr
          @keydown.prevent="keyPos($event, index)"
          v-for="(question, index) in questions"
          :key="index"
          tabindex="0"
          class="question"
        >
          <td>{{ question.id }}</td>
          <td>{{ question.position }}</td>
          <td>{{ question.question}}</td>
          <td>{{ question.tag }}</td>
          <td>{{ question.category }}</td>
          <td>
            <button @click="up($event.target, index)">Up</button>
          </td>
          <td><button @click="down($event.target, index)">Down</button></td>
          <td><button>Delete</button></td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="questions-pool" v-if="poolShow">
      <ul>
        <li v-for="(question, index) in questionsPool" :key="index">
          <img :src="question.img" alt="" />
          <p>ID: {{ question.id }}</p>
          <p>Name: {{ question.name }}</p>
          <button @click="addFromPool(index)">Add</button>
        </li>
      </ul>
    </div>
  </div>
</template>
  <script>
export default {
  data(){
    return {
      poolShow:false,
      questionsPool: [],
      quiz: {
        title: "",
        desription: "",
        img: "",
        questions:[],
        tag: "framework",
        category: "frontEnd",
      },
      rawQuestions: [],
      alphabet:['A','B','C','D','E','F','G','H','I','K'],
      action: "",
      load: false,
      currentIndex: 0,
      newQuestion: {
        id: 0,
        hint_lesson: "youtube",
        title: "",
        answers: ["",""],
        tag: "",
        category: "",
      },
      questionFormShow: false
    };
  },
  computed: {
    questions() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.rawQuestions.sort((a, b) => a.position - b.position);
    },
  },
  methods: {
    keyPos(event,index) {
      if (event.keyCode == 38) {
        if (index == 0) return;
        let temp;
        temp = this.questions[index].position;
        this.questions[index].position = this.questions[index - 1].position;
        this.questions[index - 1].position = temp;
        event.target.previousElementSibling.focus(); 
      } else if (event.keyCode == 40) {
        event.target.focus();
        if (index == this.questions.length - 1) return;
        let temp;
        temp = this.questions[index].position;
        this.questions[index].position = this.questions[index + 1].position;
        this.questions[index + 1].position = temp;
        event.target.nextElementSibling.focus();
      }
    },
    up(target, index) {
      target.parentNode.parentNode.focus();
      if (index == 0) return;
      let temp;
      temp = this.questions[index].position;
      this.questions[index].position = this.questions[index - 1].position;
      this.questions[index - 1].position = temp;
      target.parentNode.parentNode.previousElementSibling.focus();
    },
    down(target, index) {
      target.parentNode.parentNode.focus();
      if (index == this.questions.length - 1) return;
      let temp;
      temp = this.questions[index].position;
      this.questions[index].position = this.questions[index + 1].position;
      this.questions[index + 1].position = temp;
      target.parentNode.parentNode.nextElementSibling.focus();
    },
    addAction() {
      this.questionFormShow = true;
      this.action = "Add";
      this.newQuestion = {
        id: 0,
        title: "",
        answers: ["",""],
        tag: "",
        category: "",
      }
    },
    add() {},
    modify() {},
    delete() {},
    addFromPool(index) {
      this.questionsPool[index].position =
        this.questions[this.questions.length - 1].position + 1;
      this.rawQuestions.push(this.questionsPool[index]);
    },
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.rawQuestions.push({
        id: 100 + i,
        position: i + 1,
        question: "Default",
        tag: "framework",
        category: "frontEnd",
      });
    }
    for (let i = 0; i < 10; i++) {
      this.questionsPool.push({
        id: 300 + i,
        question: "Pool",
        tag: "framework",
        category: "frontEnd",
      });
    }

    this.load = true;
  },
};
</script>
  <style scoped>
.wrapper {
  width: 1200px;
  margin: auto;
}
table {
  width: 1200px;
  margin: auto;
}
table td {
  height: 80px;
  position: relative;
}
table img {
  width: 80px;
  height: 40px;
  display: block;
  overflow: scroll;
}
table img:hover {
  position: absolute;
  width: 300px;
  height: 200px;
  top: 0;
  z-index: 2;
}
.form-popup {
}
.question:focus {
  border: 1px solid #333;
}
.questions-pool {
  position: fixed;
  bottom: 0;
  height: 300px;
  left: 0;
  right: 0;
  overflow-y: scroll;
  background-color: white;
}
.questions-pool ul {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
.shorten {
  height: 400px;
  overflow-y: scroll;
}
.form-question-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  bottom: 0;
  background-color: white;
  z-index: 100;
}
</style>
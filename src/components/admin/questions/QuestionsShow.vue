<template>
  <div class="wrapper">
    <h1>questions</h1>
    <div class="text-start mb-2">
      <button
        @click="
          addAction()
        "
      >
        Add new lesson
      </button>
    </div>
    <table>
      <tr>
        <th>Index</th>
        <th>ID</th>
        <th>Question</th>
        <th>Tag</th>
        <th>Category</th>
        <th>In Quizs</th>
        <th>Hint Lesson</th>
        <th>Date Created</th>
        <th>Date Modified</th>
        <th>Modify</th>
        <th>Delete</th>
      </tr>
      <tr v-for="(question, index) in questions" :key="index">
        <td>{{ index }}</td>
        <td>{{ question.id }}</td>
        <td>{{ question.question }}</td>
        <td>{{ question.tag }}</td>
        <td>{{ question.category }}</td>
        <td>
          <span v-for="(id, index) in question.quiz_id" :key="index"
            >{{ id }}
          </span>
        </td>
        <td>{{ question.lesson_id }}</td>
        <td>{{ question.date_created }}</td>
        <td>{{ question.date_modified }}</td>
        <td><button @click="modifyAction(index)">Modify</button></td>
        <td><button>Delete</button></td>
      </tr>
    </table>
    <div class="form-popup" v-if="questionFormShow && load">
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
        >Hint lesson: <input type="text" v-model="newQuestion.lesson_id"
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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alphabet:['A','B','C','D','E','F','G','H','I','K'],
      action: "",
      load: false,
      currentIndex: 0,
      newQuestion: {
        id: 0,
        lesson_id: "",
        title: "",
        answers: ["",""],
        tag: "",
        category: "",
      },
      questionFormShow: false,
      questions: [],
    };
  },
  methods: {
    modifyAction(index) {
      this.questionFormShow = true;
      this.currentIndex = index;
      this.action = "Modify";
      this.newQuestion = this.questions[this.currentIndex];
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
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.questions.push({
        id: 0,
        lesson_id: 111+i,
        question: "What the heck ?",
        answers: ["Term","Service"],
        correct_answer:"Term",
        quiz_id:[2,3],
        tag: "Framework",
        category: "Frontend",
        date_created:"22-12-2020",
        date_modified:"22-12-2021",
      });
      // this.questions.push({
      //   id:100+1,
      //   lesson_id:12,
      //   question: "How are links defined in an <a> tag?",
      //   answers: [{
      //     id: 1,
      //     content: "Href",
      //     is_correct: true,
      //     }],
      //   quizs_id:[23,24],
      //   date_created:"22-12-2021",
      //   date_modified:"29-02-2022"
      // });
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
}
table img:hover {
  position: absolute;
  width: 300px;
  height: 200px;
  top: 0;
  z-index: 2;
}
.form-popup {
  border: 1px solid #333;
  padding-left: 20px;
  width: 300px;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
}
</style>

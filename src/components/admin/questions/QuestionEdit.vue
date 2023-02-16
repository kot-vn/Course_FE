<template>
  <div class="wrapper">
    <h1>questions</h1>
    <div class="form-popup">
      <h4>Lesson {{ question.id }}</h4>
      <p>{{ question.title }}</p>
      <form class="question-form" @submit.prevent="show">
        <!-- QUESTION -->
        <label>Question: <textarea type="text" v-model="question.question"></textarea></label>
        <!-- ANSWERS -->
        <div>
          <label v-for="(answer,index) in question.answers" :key="index">{{alphabet[index]}} <input :value="question.answers[index]" v-model="question.correct_answer" name="modify-answer" type="radio" /> <input type="text" v-model="question.answers[index]" /></label>
        </div>
        <!-- HINT LESSON -->
        <label
        >Hint lesson: <input type="text" v-model="question.hint_lesson"
        /></label>
        <!-- TAG -->
        <label
        >Tag: <input type="text" v-model="question.tag"
        /></label>
        <!-- CATEGORY -->
        <label>Category: <input type="text" v-model="question.category" /></label>
        <button type="submit">Change</button>
        <button>Cancel</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alphabet:['A','B','C','D','E','F','G','H','I','K'],
      question: {
      }
    };
  },
  methods: {
  },
  mounted() {
    this.load = true;
    this.question = {
        id: 0,
        hint_lesson: "youtube",
        question: "What the heck ?",
        answers: ["Term","Service"],
        correct_answer:"Term",
        tag: "Framework",
        category: "Frontend",
      }
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
}
</style>

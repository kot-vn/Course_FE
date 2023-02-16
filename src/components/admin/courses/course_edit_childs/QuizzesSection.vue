<template>
  <div v-if="quizzesData">
    <div class="table-wrapper pt-3 border-top" >
      <h4 class="fw-bold text-start mb-4">
        QUIZS ({{ quizzesData.meta.total }})
      </h4>
      <div class="text-start mb-4">
        <button class="btn btn-primary" @click="newForm = true">
          Add new quiz
        </button>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Time</th>
              <th>Lesson ID</th>
              <th colspan="4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(quiz, index) in quizzesData.quizzes"
              :key="index"
            >
              <td>{{ quiz.id }}</td>
              <td>{{ quiz.name }}</td>
              <td>{{ quiz.time }}</td>
              <td>{{ quiz.lesson_id }}</td>
              <td>
                <router-link
                  :to="$route.path + `/quizzes/${quiz.id}`"
                  class="btn btn-primary px-3 py-1"
                  >Edit</router-link
                >
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click="
                    deleteWarning = true;
                    currentQuiz = quiz;
                  "
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- PAGINATION START -->
      <div
        class="vue-pagination mb-4"
        v-if="quizzesData && quizzesData.meta.pages > 1"
      >
        <paginate
          v-model="currentQuizPage"
          :pageCount="quizzesData.meta.pages"
          :click-handler="quizPaging"
        />
      </div>
      <!-- PAGINATION END -->

      <!-- NEW FORM -->
      <div class="overlay" v-if="newForm">
        <div class="form-popup">
          <h3 class="fw-bold">Add new quiz</h3>
          <form @submit.prevent="createQuiz()">
            <label class="w-100">Name:</label>
            <input v-model="newQuiz.name" class="w-100 mb-3" type="text" />
            <label>Description: </label>
            <textarea
              v-model="newQuiz.description"
              class="mb-2"
              type="text"
              col="5"
              rows="5"
            ></textarea>
            <label class="w-100">Time:</label>
            <input v-model="newQuiz.time" class="w-100 mb-3" type="number" />
            <label class="w-100">Lesson ID:</label>
            <input
              v-model="newQuiz.lesson_id"
              class="w-100 mb-3"
              type="number"
            />
            <div class="text-end">
              <button class="btn btn-primary me-2" type="submit">Add</button>
              <button
                class="btn btn-secondary"
                @click="newForm = false"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- QUIZS LIST END -->

    <!-- MODAL QUIZ DELETE-->
    <ModalComponent
      v-if="deleteWarning"
      @cancel="deleteWarning = false"
      @process="deleteQuiz()"
    />
  </div>
</template>
<script>
import quizzesAPI from "@/api/admin/quizzes/index";
import { mapActions } from "vuex";
import ModalComponent from "@/components/others/ModalComponent.vue";
import formHandling from "@/mixin/formHandling";

export default {
  data(){
    return {
      // QUIZ
      // quizzes
      quizzesData: false,
      currentQuiz: false,
      // pagination quiz
      currentQuizPage: 1,
      quizzesCount: false,
      // FORM AND WARNING
      newForm:false,
      deleteWarning:false,
      newQuiz: {
        name: "",
        description: "",
        lesson_id: "",
        time: "",
      },
    }
  },
  props:["courseId"],
  methods:{
    // STORE
    ...mapActions("alert", ["showSuccess","showFailure"]),
    // QUIZ
  async getQuizzes(page) {
      this.quizzesData = await quizzesAPI.getQuizzes(this.courseId, page);
      this.currentQuizPage = page;
      this.quizzesCount = this.quizzesData.quizzes.length;
    },
    async createQuiz() {
      let res = await quizzesAPI.createQuiz(this.courseId, this.newQuiz);
      if (!res.status)
          this.showFailure();
      else 
          this.showSuccess();
      this.clearForm(this.newQuiz)
      this.newForm = false
      this.getQuizzes(1);
    },
    async deleteQuiz() {
      await quizzesAPI.deleteQuiz(this.courseId, this.currentQuiz.id);
      this.showSuccess();
      if (this.quizzesCount == 1 && this.currentQuizPage !=1)
        this.getQuizzes(this.currentQuizPage - 1);
      else this.getQuizzes(this.currentQuizPage);
    },
    // clickPagin
    quizPaging(page) {
      this.getQuizzes(page);
    },
  },
  mixins:[formHandling],
  components:{
    ModalComponent
  },
  created(){
    this.getQuizzes(1)
  }
}
</script>

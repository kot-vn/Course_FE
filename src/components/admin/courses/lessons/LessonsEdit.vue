<template>
  <div v-if="lesson" class="mt-4">
    <h2 class="fw-bold text-center"> Lesson #{{ lesson.id }}</h2>
    <!-- LESSON FORM START -->
    <div class="mb-4">
      <div class="form-normal">
        <div class="mb-3">
            <iframe width="100%" height="400" :src="`http://www.youtube.com/embed/${getId(lesson.url)}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <form class="Course-form" @submit.prevent="">
          <label class="w-100">Name:</label>
          <input class="w-100 mb-3" type="text" v-model="lesson.name" />
          <label class="w-100">Video URL:</label>
          <input class="w-100 mb-3" type="text" v-model="lesson.url"/>
          <label class="w-100">Duration:</label>
          <input class="mb-3" type="number" v-model="lesson.duration" /> <br>
          <label>Description: </label>
          <textarea class="mb-2" v-model="lesson.description" type="text" col="5" rows="5"></textarea>
           <div class="text-center"> 
            <button class="btn btn-primary mx-2" @click="modalShow=true">Update</button>
            <router-link class="btn btn-secondary mx-2" :to="`/admin/courses/${lesson.course_id}`">Back</router-link>
          </div>
        </form>
      </div>
    </div>
    <!-- LESSON FORM END -->
    <ModalComponent
      v-if="modalShow"
      @cancel="modalShow = false"
      @process="updateLesson"
    />
  </div>
</template>
<script>
import ModalComponent from "@/components/others/ModalComponent.vue";
import API from "@/api/admin/lessons/index"
import youtube_id from "@/mixin/youtube_id.js"
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      // data
      lesson:false,
      // warning modal
      modalShow: false,
    };
  },
  computed: {
    course_id(){
      return this.$route.params.id
    },
    lesson_id(){
      return this.$route.params.lesson_id
    }
  },
  methods: {
    // STORE 
    ...mapActions("alert",["showSuccess"]),
    // API
    async showLesson(){
      this.lesson = await API.showLesson(this.course_id,this.lesson_id)
      console.log(this.lesson)
    },
    async updateLesson(){
      await API.updateLesson(this.course_id,this.lesson_id,this.lesson)
      this.showSuccess()
      this.showLesson()
    }
  },
  components: {
    ModalComponent,
  },
  mixins:[youtube_id],
  created() {
    this.showLesson()
  }
};
</script>
<style lang="scss" scoped>
.form-normal {
    width: 800px;
    margin: auto;
}
label {
    font-weight: bold;
}
</style>

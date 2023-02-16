<template>
  <div class="mt-4">
    <h2 class="fw-bold text-center"> New lesson</h2>
    <!-- LESSON FORM START -->
    <div class="mb-4">
      <div class="form-normal">
        <div class="mb-3">
            <iframe class="border-primary-blur border-radius-6" width="100%" height="400" :src="`http://www.youtube.com/embed/${getId(newLesson.url)}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <form class="Course-form" @submit.prevent="">
          <label class="w-100">Name:</label>
          <input class="w-100 mb-3" type="text" v-model="newLesson.name" />
          <label class="w-100">Video URL:</label>
          <input class="w-100 mb-3" type="text" v-model="newLesson.url"/>
          <label class="w-100">Duration:</label>
          <input class="mb-3" type="number" v-model="newLesson.duration" /> <br>
          <label>Description: </label>
          <textarea class="mb-2" v-model="newLesson.description" type="text" col="5" rows="5"></textarea>
           <div class="text-center"> 
            <button class="btn btn-primary mx-2" @click="createLesson">Create</button>
            <router-link class="btn btn-secondary mx-2" :to="`/admin/courses/${$route.params.id}`">Cancel</router-link>
          </div>
        </form>
      </div>
    </div>
    <!-- LESSON FORM END -->
  </div>
</template>
<script>
import API from "@/api/admin/lessons/index"
import youtube_id from "@/mixin/youtube_id.js"
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      // data
      newLesson:{
        name:"",
        description:"",
        duration:"",
        url:""
      }
    };
  },
  computed: {
    course_id(){
      return this.$route.params.id
    }
  },
  methods: {
    // STORE 
    ...mapActions("alert",["showSuccess"]),
    // API
    async createLesson(){
      await API.createLesson(this.course_id,this.newLesson)
      this.showSuccess()
      this.$router.push(`/admin/courses/${this.$route.params.id}`)
    }
  },
  mixins:[youtube_id],
  created() {
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

<template>
  <div v-if="data" ref="container">
    <!-- MAIN CONTENT -->
    <main class="mt-4">
      <div
        class="
          text-start
          mb-3
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <h4 class="fw-bold">Courses Management</h4>
        <search-form @searching="search(value)"/>
        <div>
          <button
            class="btn btn-primary me-2"
            @click="newForm= true"
          >
            Add new course
          </button>
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
      <!-- COURSES LIST START -->
     <CoursesList :courses="data.courses" @requestDeleteCourse="requestDeleteCourse"/>
      <!-- COURSES LIST END -->

       <!-- PAGINATION START -->
       <div class="vue-pagination mb-4" v-if="data.meta.pages>1">
        <paginate v-model="currentPage" :pageCount="data.meta.pages" :click-handler="coursesPaging"/>
      </div>
      <!-- PAGINATION END -->

      <!-- OVERLAY START-->
      <div class="overlay" v-if="newForm">
        <!-- NEW COURSES FORM START-->
        <NewForm @createCourse="createCourse" @cancel="newForm = false" />
         <!-- NEW COURSES FORM END-->
      </div>
      <!-- OVERLAY END-->
    </main>
    <!-- DELETE WARNING -->
    <ModalComponent v-if="deleteWarning" @cancel="deleteWarning=false" @process="deleteCourse(currentCourse.id)"/>
    <!-- DELETE WARNING -->
  </div>
</template>
<script>
// COMPONENT
import NewForm from "@/components/admin/courses/courses_page_childs/NewForm.vue"
import CoursesList from "@/components/admin/courses/courses_page_childs/CoursesList.vue"
import ModalComponent from "@/components/others/ModalComponent.vue"
import SearchForm from "@/components/others/SearchForm.vue"
// JS
import { mapActions } from 'vuex'
import API from "@/api/admin/courses/index";

export default {
  data() {
    return {
      // data
      data:false,
      currentCourse:false,
      // pagination
      currentPage:1,
      coursesCount:0,
      //Form
      newForm: false,
       // Delete warning
      deleteWarning:false,
    };
  },
  methods: {
    // STORE
    ...mapActions("alert",["showSuccess"]),
    // CALL API
    async getCourses(page) {
      this.data = await API.getCourses(7,page);
      this.currentPage = page
      this.coursesCount = this.data.courses.length
    },
    async createCourse(newCourse) {
      await API.createCourse(newCourse);
      this.showSuccess()
      this.getCourses(1)
      this.newForm = false
    },
    async deleteCourse(id){
      await API.deleteCourse(id)
      this.showSuccess()
      if( this.coursesCount == 1 )
        this.getCourses(this.currentPage-1)
      else
        this.getCourses(this.currentPage)
    },
    // PAGINATION
    coursesPaging(page){
      this.getCourses(page)
    },
    // ASK BEFORE ACTION
    requestDeleteCourse(course){
      this.currentCourse = course
      this.deleteWarning = true
    }
  },
  components:{
    ModalComponent,SearchForm,NewForm,CoursesList
  },
  created() {
    this.getCourses(1)
  }
};
</script>
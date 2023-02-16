<template>
  <div class="mt-3">
    <!-- COURSES INFORMATION START-->
    <CourseForm :course-id="course_id" />
    <!-- COURSES INFROMATION END -->

    <!-- LESSONS LIST STARTS-->
    <LessonsSection :course-id="course_id" />
    <!-- LESSONS LIST ENDS-->

    <!-- QUIZS LIST START -->
    <QuizzesSection :course-id="course_id"/>
     <!-- QUIZS LIST END -->
  </div>
</template>
<script>
import CourseForm from "@/components/admin/courses/course_edit_childs/CourseForm.vue";
import LessonsSection from "@/components/admin/courses/course_edit_childs/LessonsSection.vue";
import QuizzesSection from "@/components/admin/courses/course_edit_childs/QuizzesSection.vue";

import timeString from "@/mixin/timeString";

export default {
  data() {
    return {
      
    };
  },
  computed: {
    course_id() {
      return this.$route.params.id;
    },
  },
  components: {
    CourseForm,
    LessonsSection,
    QuizzesSection
  },
  mixins: [timeString],
  mounted() {
    // let i = 0
    // let interval = setInterval(function(){
    //   console.log(i)
    //   lessonsAPI.createLesson(20,{
    //     name:a.items[i].snippet.title,
    //     description:a.items[0].snippet.description.slice(0,150)+'...',
    //     url:'https://www.youtube.com/watch?v='+a.items[i].snippet.resourceId.videoId
    //   })
    //   if ( i==14 ) clearInterval(interval)
    //   i++
    // },5000)
    // let interval = setInterval(function(){
    //   console.log(i)
    //   lessonsAPI.deleteLesson(15,i)
    //   i++
    // },5000)
    // setTimeout(function(){
    //   clearInterval(interval)
    // },100000)
  },
};
</script>
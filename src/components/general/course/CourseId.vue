<template>
  <div class="pt-4" v-if="course">
    <div class="m-auto px-3 home-course-id">
      <div class="row">
        <div class="col-5">
          <div>
            <img
              class="w-100 border-radius-6"
              :src="course.cover.file_url"
              alt=""
            />
          </div>
        </div>
        <div class="col-7">
          <div class="d-flex flex-column justify-content-between h-100">
            <h3 class="fw-bold">{{course.name}}</h3>
            <h5 class="mb-5">{{course.description}}</h5>
            <div v-if="course.reviews" class="mb-2">
              <RatingStars  :score="course.rating" />
              <span class="ms-2">({{course.reviews}} ratings)</span><br/>
              <span>{{course.subscribes}} students</span>
            </div>
            <div v-if="!course.reviews" class="mb-2 text-primary">
                        <span>No review</span>
                      </div>
            <div class="mb-2">
              <span>Last updated {{primaryDate(course.updated_at)}}</span>
            </div>
            <div class="text-center">
              <button @click="subscribe" v-if="!course.is_subscribed"  class="btn w-100 btn-primary   text-white">Try it now</button>
              <router-link  v-if="course.is_subscribed" :to="$route.path+'/learning'" class="btn w-100 btn-primary  text-white">Continue</router-link>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import coursesAPI from "@/api/users/courses/index";
import RatingStars from "@/components/others/RatingStars.vue";
import timeString from "@/mixin/timeString";

export default {
  data() {
    return {
      course: false,
    };
  },
  computed:{
    course_id(){
      return this.$route.params.id
    }
  },
  methods: {
    async getCourse() {
      this.course = await coursesAPI.showCourse(this.course_id);
      console.log(this.course);
    },
    async subscribe(){
      await coursesAPI.subscribeCourse(this.course_id)
      this.$router.push(this.$route.path+'/learning')
    }
  },
  mixins:[timeString],
  components:{
    RatingStars
  },
  created(){
    this.getCourse();
  },
};
</script>
<style>
.home-course-id {
  width: 1200px;
}
</style>
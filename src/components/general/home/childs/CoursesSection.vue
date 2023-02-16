<template>
  <div class="container-xxl py-5" v-if="courses">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 class="section-title bg-white text-center text-primary px-3">
          Courses
        </h6>
        <h1 class="mb-5">Popular Courses</h1>
      </div>
      <div class="row g-4 justify-content-center">
        <div
          v-for="(course, index) in courses.slice(0, 3)"
          :key="index"
          class="col-lg-4 col-md-6 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <router-link class="d-block" :to="`/courses/${course.id}/learning`">
            <div class="course-item bg-light">
              <div class="position-relative overflow-hidden">
                <img
                  class="img-fluid w-100"
                  :src="course.cover.file_url"
                  alt=""
                />
                <div
                  class="
                    w-100
                    d-flex
                    justify-content-center
                    position-absolute
                    bottom-0
                    start-0
                    mb-4
                  "
                >
                  <a
                    href="#"
                    class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                    style="border-radius: 30px 0 0 30px"
                    >Read More</a
                  >
                  <a
                    href="#"
                    class="flex-shrink-0 btn btn-sm btn-primary px-3"
                    style="border-radius: 0 30px 30px 0"
                    >Join Now</a
                  >
                </div>
              </div>
              <div class="text-center p-4 pb-0">
                <div v-if="course.reviews" class="mb-3">
                  <RatingStars :score="course.rating" />
                  <br />
                  <small>({{course.reviews}})</small>
                </div>
                <div v-if="!course.reviews" class="mb-3 text-primary">
                  <br>
                  <h5>No review</h5>
                </div>
                <div class="course-title">
                  <h5 class="mb-4 text-666">
                    {{ course.name }}
                  </h5>
                </div>
              </div>
              <div class="d-flex border-top">
                <small class="flex-fill text-center border-end py-2"
                  ><font-awesome-icon icon="fa-solid fa-user-tie" />&nbsp;
                  {{ course.description }}</small
                >
                <small class="flex-fill text-center border-end py-2"
                  ><font-awesome-icon icon="fa-solid fa-clock" />&nbsp; {{secondsToHours(course.duration)}}
                  Hrs</small
                >
                <small class="flex-fill text-center py-2"
                  ><font-awesome-icon icon="fa-solid fa-user" />&nbsp;
                  {{course.subscribes}} Students</small
                >
              </div>
            </div>
          </router-link>
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
      courses: false,
    };
  },
  methods: {
    async getCourses() {
      this.courses = await coursesAPI.getCourses(7, 1);
      this.courses = this.courses.courses;
      console.log(this.courses)
    },
  },
  mixins:[timeString],
  components:{
    RatingStars
  },
  created() {
    this.getCourses();
  },
};
</script>
<style scoped>
.course-item img {
  transition: 0.5s;
}
.course-item small {
  color: #06bbcc;
}
.course-item h5 {
  font-weight: bold;
}
.course-item:hover img {
  transform: scale(1.1);
}
.course-title {
  min-height: 75px;
}
</style>
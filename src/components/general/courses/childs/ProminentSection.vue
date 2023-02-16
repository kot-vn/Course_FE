<template>
  <div class="mb-3 position-relative" v-show="coursesPages">
    <!-- HEADING -->
    <div class="heading">
      <h3 class="fw-bold mb-5">{{ category }}</h3>
      <h5 class="fw-bold mb-3">Courses to get you started</h5>
    </div>
    <!-- HEADING -->

    <!-- SMALL NAVBAR -->
    <SmallNavbar @selectCriteria="selectCriteria" />
    <!-- SMALL NAVBAR -->

    <!-- carousel start-->
    <div class="courses-carousel position-relative">
      <carousel ref="carousel" :per-page="1" :paginationEnabled="false">
        <!-- courses slide start-->
        <slide v-for="(page, index) in coursesPages" :key="index">
          <div class="container-xxl">
            <div class="row g-4">
              <div
                v-for="(course, index) in page"
                :key="index"
                class="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <router-link class="d-block" :to="`/course/${course.id}`">
                  <div class="course-item bg-light">
                    <div class="position-relative overflow-hidden mb-2">
                      <img
                        class="img-fluid"
                        :src="course.cover ? course.cover.file_url : ''"
                        alt=""
                      />
                    </div>
                    <div class="text-center">
                      <h2>view_count {{course.view_count}}</h2>
                      <div v-if="course.reviews" class="mb-2">
                        <RatingStars :score="course.rating" />
                        <small class="ms-2">({{ course.reviews }})</small>
                      </div>
                      <div v-if="!course.reviews" class="mb-2 text-primary">
                        <span>No review</span>
                      </div>
                      <div class="course-title">
                        <h6 class="mb-2 fw-bold text-primary px-1">
                          {{ course.name }}
                        </h6>
                      </div>
                    </div>
                    <div class="d-flex border-top">
                      <small class="flex-fill text-center border-end py-2"
                        ><font-awesome-icon icon="fa-solid fa-user-tie" />&nbsp;
                        {{ course.description }}</small
                      >
                      <small class="flex-fill text-center border-end py-2"
                        ><font-awesome-icon icon="fa-solid fa-clock" />&nbsp;
                        {{ secondsToHours(course.duration) }} Hrs</small
                      >
                      <small class="flex-fill text-center py-2"
                        ><font-awesome-icon icon="fa-solid fa-user" />&nbsp;
                        {{ course.subscribes }} Students</small
                      >
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </slide>
        <!-- courses slide end-->
      </carousel>
      <!-- SLIDE NAVIGATION -->
      <!-- prev -->
      <span class="prev-button" @click="prev">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
          ></path>
        </svg>
      </span>
      <!-- next -->
      <span class="next-button" @click="next">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
          ></path>
        </svg>
      </span>
      <!-- SLIDE NAVIGATION -->
    </div>
    <!-- carousel end-->
  </div>
</template>
<script>
import SmallNavbar from "@/components/general/courses/childs/childs/SmallNavbar.vue";
import RatingStars from "@/components/others/RatingStars.vue";
import coursesAPI from "@/api/users/courses/index";
import timeString from "@/mixin/timeString";

export default {
  data() {
    return {
      // CAROUSEL
      coursesPages: [],
      page: 1,
      total: 2,
      currentPage: 0,
      // DATA
      criteria: false,
      category: false,
    };
  },
  computed: {
    searchObject() {
      return {
        category: this.$route.params.category,
        criteria: this.criteria,
      };
    },
  },
  methods: {
    // CAROUSEL
    prev() {
      this.currentPage =
        this.currentPage == 0 ? this.currentPage : this.currentPage - 1;
      this.$refs.carousel.goToPage(this.currentPage);
    },
    next() {
      if (this.currentPage == this.coursesPages.length - 1)
        this.searchCourses();
      else {
        this.currentPage++;
        this.$refs.carousel.goToPage(this.currentPage);
      }
    },
    // GET COURSES API
    async searchCourses() {
      if (this.page > this.total) return;
      let tmp = await coursesAPI.searchCourses(
        4,
        this.page++,
        this.searchObject
      );
      this.category = tmp.courses[0].category;
      this.total = tmp.meta.pages;
      this.coursesPages.push(tmp.courses);
      console.log(this.coursesPages);
    },
    // SELECT CRITERIA
    selectCriteria(criteria) {
      this.coursesPages = [];
      this.page = 1;
      this.criteria = criteria;
      this.searchCourses()
    },
  },
  watch: {
    coursesPages(newValue) {
      let el = this;
      this.currentPage = newValue.length - 1;
      this.$nextTick(function () {
        el.$refs.carousel.goToPage(el.currentPage);
      });
    },
    $route(newValue) {
      console.log(1);
      this.coursesPages = [];
      this.page = 1;
      this.searchCourses();
    },
  },
  mixins: [timeString],
  components: {
    SmallNavbar,
    RatingStars,
  }
};
</script>
<style lang="scss" scoped>
.courses-carousel {
  min-height: 334px;
}
.next-button,
.prev-button {
  background-color: #06bbccd0;
  position: absolute;
  display: block;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  padding: 5px;
  top: 60px;
}
.next-button svg,
.prev-button svg {
  width: 35px;
  height: 35px;
}
.next-button:hover,
.prev-button:hover {
  opacity: 0.8;
}
.prev-button {
  left: -15px;
}
.next-button {
  right: -15px;
}
.course-title {
  min-height: 60px !important;
}
.course-title h6 {
  line-height: 25px;
}
</style>

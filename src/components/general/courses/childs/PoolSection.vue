<template>
  <div class="all-courses border-top-secondary-blur pt-4" v-if="coursesData">
    <h3 class="mb-4 fw-bold">All Development courses</h3>
    <div>
      <div class="row mb-3 g-4 align-items-center">
        <div class="col-3">
          <div class="row g-1">
            <div class="col-4">
              <div
                class="
                  border border-secondary
                  h-100
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <i class="me-2"
                  ><font-awesome-icon icon="fa-solid fa-bars"
                /></i>
                <span>Filter</span>
              </div>
            </div>
            <div class="col-8">
              <div class="border border-secondary w-100 position-relative">
                <select
                  required=""
                  aria-invalid="false"
                  name="sort"
                  form="filter-form"
                  id="u240-form-group--47"
                  class="w-100 h-100 ps-4 bg-transparent"
                >
                  <option value="highest-rated">Highest Rated</option>
                  <option value="popularity">Most Popular</option>
                  <option value="newest">Newest</option>
                </select>
                <div class="select-arrow">
                  <font-awesome-icon icon="fa-solid fa-caret-down" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <h5 class="m-0 text-end">999 results</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <!-- rating start-->
          <section class="mb-3 border-top-secondary-blur">
            <div
              @click="ratingOptions = !ratingOptions"
              class="
                d-flex
                align-items-center
                justify-content-between
                px-3
                py-2
                mb-3
                cursor-pointer
              "
            >
              <h4 class="m-0">Ratings</h4>
              <span><font-awesome-icon icon="fa-solid fa-caret-down" /></span>
            </div>
            <div v-show="ratingOptions">
              <div v-for="i in 5" :key="i">
                <label class="container-radio">
                  <input type="radio" name="rate" class="me-2" />
                  <RatingStars :score="6 - i" />
                  <span class="ms-2 text-secondary"
                    >{{ 6 - i }} stars {{ i == 1 ? "" : "& up" }}</span
                  >
                  <span class="checkmark-radio"></span>
                </label>
              </div>
            </div>
          </section>
          <!-- rating end -->

          <!-- duration start -->
          <section class="border-top-secondary-blur">
            <div
              @click="durationOptions = !durationOptions"
              class="
                d-flex
                align-items-center
                justify-content-between
                px-3
                py-2
                mb-3
                cursor-pointer
              "
            >
              <h4 class="m-0">Duration</h4>
              <span><font-awesome-icon icon="fa-solid fa-caret-down" /></span>
            </div>
            <div v-show="durationOptions">
              <div v-for="(item, index) in durations" :key="index">
                <label class="container-checkbox text-secondary">
                  <input type="checkbox" name="duration" class="me-2" />
                  <span>{{ item }} Hour{{ index == 0 ? "" : "s" }}</span>
                  <span class="checkmark-checkbox"></span>
                </label>
              </div>
            </div>
          </section>
          <!-- duration end -->
        </div>

        <div class="col-9">
          <div class="container-xxl">
            <div
              v-for="(course, index) in coursesData.courses"
              :key="index"
              class="row g-4 justify-content-center"
            >
              <div class="col-12 wow fadeInUp" data-wow-delay="0.1s">
                <router-link
                  class="d-block text-666"
                  :to="`/courses/${course.id}/learning`"
                >
                  <div class="course-item bg-light row cursor-pointer mb-3">
                    <div class="position-relative overflow-hidden col-4">
                      <img
                        class="img-fluid"
                        :src="course.cover.file_url"
                        alt=""
                      />
                    </div>
                    <div class="text-center p-2 pb-0 col-8">
                      <div class="course-title text-start">
                        <div>
                          <h5 class="mb-2 fw-bold">
                            {{ course.name }}
                          </h5>
                        </div>
                        <div class="text-start">
                          <p class="flex-fill p-0 m-1">
                            <font-awesome-icon
                              icon="fa-solid fa-user-tie"
                            />&nbsp; {{ course.description }}
                          </p>
                          <p class="flex-fill p-0 m-1">
                            <font-awesome-icon icon="fa-solid fa-clock" />&nbsp;
                            1.49 Hrs
                          </p>
                          <p class="flex-fill p-0 m-1">
                            <font-awesome-icon icon="fa-solid fa-user" />&nbsp;
                            Students
                          </p>
                        </div>
                      </div>
                      <div class="mb-2 text-start">
                        <RatingStars :score="5" />
                        <small class="ms-2">(123)</small>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RatingStars from "@/components/others/RatingStars.vue";
import coursesAPI from "@/api/users/courses/index";

export default {
  data() {
    return {
      coursesData: false,
      // sort criteria
      durations: ["0-1", "1-3", "3-6", "6+"],
      ratingOptions: false,
      durationOptions: false,
    };
  },
  methods: {
    async searchCourses() {
      this.coursesData = await coursesAPI.searchCourses(
        6,
        1,
        this.searchObject
      );
    },
  },
  computed: {
    searchObject() {
      return {
        category: this.$route.params.category,
      };
    },
  },
  components: {
    RatingStars,
  },
  mounted() {
    this.searchCourses();
  },
};
</script>
<style scoped lang="scss">
.all-courses .course-item:hover img {
  transform: scale(1);
}
select {
  padding: 10px;
  border-radius: 9px;
  border: 0;
  outline: 0;
  background-color: transparent;
}
select {
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
}

/* For IE10 */
select::-ms-expand {
  display: none;
}
.select-arrow {
  position: absolute;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
  z-index: -1;
}
</style>

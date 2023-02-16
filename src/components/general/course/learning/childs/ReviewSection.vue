<template>
  <section v-if="reviewsData">
    <!-- NEW REVIEW START-->
    <div class="mb-3" v-if="!yourReview">
      <h5 class="fw-bold">Rate this course</h5>
      <h3 class="text-white me-2">
        <i
          v-for="(e, index) in 5"
          :key="index"
          :class="{ 'click-filled': index < newReview.stars }"
          class="pe-1 cursor-pointer star-icon"
          @mouseover="hoverStar($event.currentTarget, index)"
          @mouseout="emptyStar($event.currentTarget)"
          @click="newReview.stars = index + 1"
          ><font-awesome-icon icon="fa-solid fa-star" />
        </i>
      </h3>
      <div>
        <h6 class="fw-bold">Describe your experience :</h6>
        <div class="mb-2">
          <textarea
            id="comment"
            class="w-100 border-radius-6"
            rows="2"
            v-model="newReview.content"
          ></textarea>
        </div>
        <div class="text-center">
          <button
            class="btn btn-primary px-2 py-0 mx-1"
            @click="postReview(newReview)"
          >
            POST
          </button>
        </div>
      </div>
    </div>
    <!-- NEW REVIEW, UPDATE END-->

    <!-- UPDATE REVIEW START-->
    <div class="mb-3" v-if="yourReview && !yourReviewShow">
      <h5 class="fw-bold">Rate this course</h5>
      <h3 class="text-white me-2">
        <i
          v-for="(e, index) in 5"
          :key="index"
          :class="{ 'click-filled': index < yourReview.stars }"
          class="pe-1 cursor-pointer star-icon"
          @mouseover="hoverStar($event.currentTarget, index)"
          @mouseout="emptyStar($event.currentTarget)"
          @click="yourReview.stars = index + 1"
          ><font-awesome-icon icon="fa-solid fa-star" />
        </i>
      </h3>
      <div>
        <h6 class="fw-bold">Describe your experience :</h6>
        <div class="mb-2">
          <textarea
            id="comment"
            class="w-100 border-radius-6"
            rows="2"
            v-model="yourReview.content"
          ></textarea>
        </div>
        <div class="text-center">
          <button class="btn btn-primary px-2 py-0 mx-1" @click="updateReview">
            UPDATE
          </button>
          <button
            v-if="yourReview"
            class="btn btn-secondary px-2 py-0 mx-1"
            @click="
              yourReviewShow = true;
              Object.assign(yourReview, yourReviewBeforeEdit);
            "
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
    <!-- UPDATE REVIEW END-->

    <!-- YOUR REVIEW START-->
    <ul class="review-list" v-show="yourReviewShow" v-if="yourReview">
      <h5 class="fw-bold mb-0">Your review</h5>
      <li class="text-start d-flex py-3 px-1 border-bottom-primary-blur">
        <div class="col-1 mt-2">
          <img :src="yourReview.user.image" alt="" />
        </div>
        <div class="col-11">
          <h6 class="fw-bold mb-1">{{ yourReview.user.name }}</h6>
          <p class="mb-1">
            <span class="text-white me-2">
              <i
                v-for="(e, index) in 5"
                :key="index"
                :class="{
                  'click-filled': index <= yourReview.stars - 1,
                }"
                class="pe-1 cursor-pointer star-icon"
                ><font-awesome-icon icon="fa-solid fa-star" />
              </i>
            </span>
            <span class="text-secondary">2 weeks ago</span><br />
          </p>
          <span>{{ yourReview.content }}</span
          ><br />
          <button
            @click="yourReviewShow = false"
            class="btn fst-italic text-primary pt-3 pb-1 ps-0"
          >
            <i><font-awesome-icon icon="fa-solid fa-pen-to-square" /></i>
            Edit your review
          </button>
        </div>
      </li>
    </ul>
    <!-- YOUR REVIEW END -->
    <!-- REVIEW STATISTIC START -->
    <div v-if="statisticsData" class="mb-3 border-bottom-primary-blur pb-4">
      <h5 class="fw-bold mb-3">Student feedback</h5>

      <div class="d-flex align-items-center">
        <div class="col-2 text-center">
          <h1 class="fw-bold">{{ statisticsData.rating }}</h1>
          <span class="ps-1">
            <RatingStars :score="statisticsData.rating" />
          </span>
        </div>
        <div class="col-10">
          <div
            v-for="(item, index) in statisticsData.stats"
            :key="index"
            class="row g-0 align-items-center"
          >
            <div class="col-8 ps-2">
              <div class="progress">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  :style="{width:item+'%'}"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="col-3 text-star">
              <span class="ms-4">
                <RatingStars :score="5-index" />
              </span>
            </div>
            <div class="col-1">
              <span class="text-secondary"> {{item}}% </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- REVIEW STATISTIC END -->
    <!-- REVIEW LIST START-->
    <ul class="review-list">
      <h4 class="fw-bold">Others</h4>
      <li
        v-for="(review, idx) in reviewsData.reviews"
        :key="idx"
        class="text-start d-flex py-3 px-1 align-items-center border-bottom"
      >
        <div class="col-1">
          <img :src="review.user.image" alt="" />
        </div>
        <div class="col-11">
          <h6 class="fw-bold mb-1">{{ review.user.name }}</h6>
          <p class="mb-1">
            <span class="text-white me-2">
              <i
                v-for="(e, index) in 5"
                :key="index"
                :class="{ 'click-filled': index <= review.stars - 1 }"
                class="pe-1 cursor-pointer star-icon"
                ><font-awesome-icon icon="fa-solid fa-star" />
              </i>
            </span>
          </p>
          <span>{{ review.content }}</span>
        </div>
      </li>
    </ul>
    <!-- REVIEW LIST END -->
  </section>
</template>
<script>
import API from "@/api/users/reviews/index";
import RatingStars from "@/components/others/RatingStars.vue";

export default {
  data() {
    return {
      // reviews
      reviewsData: false,
      statisticsData:false,
      // new review
      newReview: {
        stars: -1,
        content: "",
      },
      // your review
      yourReview: false,
      yourReviewShow: true,
      yourReviewBeforeEdit: {},
      // new review
      formShow: true,
    };
  },
  methods: {
    // REVIEW
    // RATING
    hoverStar(el, index) {
      let elements = el.parentNode.children;
      let i = 0;
      while (i <= index) {
        elements[i].classList.add("hover-filled");
        i++;
      }
    },
    emptyStar(el) {
      let elements = el.parentNode.children;
      let i = 0;
      while (i <= 4) {
        elements[i].classList.remove("hover-filled");
        i++;
      }
    },
    // CALL API
    async getReviews() {
      this.reviewsData = await API.getReviews(this.courseId);
      console.log(this.reviews);
    },
    async getYourReview() {
      this.yourReview = await API.getYourReview(this.courseId);
      Object.assign(this.yourReviewBeforeEdit, this.yourReview);
    },
    async postReview(){
      await API.postReview(this.newReview,this.courseId);
      this.getReviews();
      this.getYourReview();
      this.getStatistics();
    },
    async updateReview() {
      await API.updateReview(this.yourReview, this.courseId);
      this.getReviews();
      this.getYourReview();
      this.yourReviewShow = true;
      this.getStatistics();
    },
    async getStatistics() {
      this.statisticsData = await API.getStatistics(this.courseId);
      console.log(this.statisticsData);
    }
  },
  props: ["courseId", "course"],
  components: {
    RatingStars,
  },
  created(){
    this.getReviews();
    this.getYourReview();
    this.getStatistics();
  },
};
</script>
<style scoped>
/* REVIEW */
ul {
  padding: 0;
}
.review-list li img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.comment {
  background-color: darkslategray;
  color: white;
}
/* prgressbar */
.progress {
  height: 12px;
}

/* btn */
.btn {
  border: 0;
}
</style>

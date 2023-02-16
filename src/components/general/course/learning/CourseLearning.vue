<template>
  <div v-if="course">
    <div class="text-center courses-title bg-primary py-2 mb-4">
      <h4 class="fw-bold text-white m-0">{{ course.name }}</h4>
    </div>
    <div
      class="courses-show d-flex mt-3 justify-content-between"
      v-if="lessons"
    >
      <div class="main-section">
        <!-- YOUTUBE IFRAME -->
        <section class="video">
          <div class="border-radius-9 overflow-hidden">
            <youtube
              @cued="increaseView"
              @ready="setPlayer"
              :width="'100%'"
              :height="'100%'"
              :video-id="video_id"
              ref="youtube"
            ></youtube>
          </div>
        </section>
        <!-- INTERACTION -->
        <div>
          <!-- NAV-BUTTON -->
          <nav-buttons :nav-options="navOptions" @nav-select="navSelect" />
          <!-- NAV-BUTTON -->
          <!-- OVERVIEW SECTION -->
          <OverviewSection
            v-show="currentNavOptions == 'Overview'"
            :lesson="lessons[currentIndex]"
          />
          <!-- REVIEW SECTION -->
          <ReviewSection
            @updateLesson="updateLesson"
            :courseId="course_id"
            :course="course"
            v-show="currentNavOptions == 'Review'"
          />
        </div>
      </div>
      <!-- TRACK SECTION -->
      <TrackSection
        :lessons-learned="lessons_learned"
        @selectLesson="selectLesson"
        @updateLesson="updateLesson"
        :lessons="lessons"
        :quizzes="quizzes"
      />
    </div>
  </div>
</template>
<script>
// COMPONENT
import TrackSection from "@/components/general/course/learning/childs/TrackSection.vue";
import ReviewSection from "@/components/general/course/learning/childs/ReviewSection.vue";
import OverviewSection from "@/components/general/course/learning/childs/OverviewSection.vue";
import NavButtons from "@/components/general/course/learning/childs/NavButtons.vue";
// JS
import courseAPI from "@/api/users/courses/index";
import youtubeId from "@/mixin/youtube_id";

export default {
  data() {
    return {
      // COURSE
      course: false,
      // VIDEO
      currrentTime: 0,
      trackingInterval: 2,
      currentIndex: 0,
      lessons_learned: false,
      // NAVBUTTON
      navOptions: ["Overview", "Review"],
      currentNavOptions: "Overview",
      // LESSONS
      lessons: false,
      // QUiZS
      quizzes: false,
      quiz_index: 0,
    };
  },
  computed: {
    course_id() {
      return this.$route.params.id;
    },
    video_id() {
      return this.getId(this.lessons[this.currentIndex].url);
    },
  },
  methods: {
    // YOUTUBE API
    async setPlayer() {
      let el = this;
      this.player = this.$refs.youtube.player;
      this.player.addEventListener("onStateChange", function (e) {
        if (el.lessons_learned.includes(el.lessons[el.currentIndex].id)) {
          clearInterval(el.trackingInterval);
        } else if (e.data == 1)
          el.trackingInterval = setInterval(el.tracking, 2000);
        else clearInterval(el.trackingInterval);
      });
    },
    async tracking() {
      let el = this;
      el.currrentTime = await el.player.getCurrentTime();
      console.log(10);
      if (this.currrentTime > this.lessons[this.currentIndex].duration * 0.75) {
        clearInterval(el.trackingInterval);
        el.lessons[el.currentIndex].done = true;
        el.updateLesson(el.lessons[el.currentIndex].id);
      }
    },
    // API CALL
    async getCourse() {
      this.course = await courseAPI.showCourse(this.course_id);
      this.lessons = this.course.lessons;
      this.quizzes = this.course.quizzes;
      this.lessons_learned = JSON.parse(this.course.lessons_learned);
      console.log(this.course);
    },
    async updateLesson(id) {
      if (this.lessons_learned.includes(id)) {
        let index = this.lessons_learned.indexOf(id);
        this.lessons_learned.splice(index, 1);
      } else this.lessons_learned.push(id);
      await courseAPI.updateLesson(this.lessons_learned, this.course_id);
    },
    // update view of lesson
    increaseView(id) {
      courseAPI.updateLessonView(this.lessons[this.currentIndex].id);
    },
    // SELECT LESSON
    selectLesson(index) {
      this.currentIndex = index;
    },

    // NAV-BUTTON-PRIMARY
    navSelect(item) {
      this.currentNavOptions = item;
    },
  },
  components: {
    NavButtons,
    OverviewSection,
    ReviewSection,
    TrackSection,
  },
  mixins: [youtubeId],
  created() {
    this.getCourse();
  },
};
</script>

<style scoped>
.main-section {
  width: 70%;
}
ul {
  padding: 0;
}
.courses-show {
  max-width: 1200px;
  margin: auto;
}

/* VIDEO */
.video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video > div {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>

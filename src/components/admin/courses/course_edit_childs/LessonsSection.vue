<template>
  <div v-if="lessonsData" class="table-wrapper pt-3 border-top mb-4">
    <h4 class="fw-bold text-start mb-3">
      Lessons ({{ lessonsData.meta.total }})
    </h4>
    <div class="text-start mb-3">
      <router-link class="btn btn-primary" :to="$route.path + '/lessons/new'"
        >Add new lesson</router-link
      >
    </div>
    <div>
      <table class="table mb-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Views</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(lesson, index) in lessonsData.lessons"
            :key="index"
            tabindex="0"
          >
            <td>{{ lesson.id }}</td>
            <td>{{ lesson.name }}</td>
            <td>{{ lesson.description }}</td>
            <td>{{ secondsToHms(parseInt(lesson.duration)) }}</td>
            <td>{{ lesson.view_count }}</td>
            <td>
              <router-link
                :to="$route.path + `/lessons/${lesson.id}`"
                class="btn btn-primary px-3 py-1"
                >Edit</router-link
              >
            </td>
            <td>
              <button
                @click="
                  deleteWarning = true;
                  currentLesson = lesson
                "
                class="btn btn-danger px-3 py-1"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- PAGINATION START -->
    <div
      class="vue-pagination mb-4"
      v-if="lessonsData && lessonsData.meta.pages > 1"
    >
      <paginate
        v-model="currentLessonPage"
        :pageCount="lessonsData.meta.pages"
        :click-handler="lessonPaging"
      />
    </div>
    <!-- PAGINATION END -->

    <!-- DELETE WARNING-->
    <ModalComponent
        v-if="deleteWarning"
        @cancel="deleteWarning = false"
        @process="deleteLesson(courseId, currentLesson.id)"
      />
    <!-- DELETE WARNING-->
  </div>
</template>
<script>
import lessonsAPI from "@/api/admin/lessons/index";
import ModalComponent from "@/components/others/ModalComponent.vue";
import { mapActions } from "vuex";
import timeString from "@/mixin/timeString";

export default {
  data() {
    return {
      // LESSON
      // data
      lessonsData: false,
      currentLesson: false,
      // pagination
      currentLessonPage: 1,
      lessonCount: false,
      remainsLessonCount: false,
      // warning modal lesson delete
      deleteWarning: false,
    };
  },
  props:["courseId"],
  methods:{
    // STORE
    ...mapActions("alert", ["showSuccess"]),
    // LESSONS
    // call api
    async getLessons(page) {
      this.lessonsData = await lessonsAPI.getLessons(this.courseId, page);
      this.currentLessonPage = page;
      this.lessonsCount = this.lessonsData.lessons.length;
    },
    async deleteLesson(courseId, lesson_id) {
      await lessonsAPI.deleteLesson(courseId, lesson_id);
      this.showSuccess();
      if (this.lessonsCount == 1) this.getLessons(this.currentLessonPage - 1);
      else this.getLessons(this.currentLessonPage);
    },
    // clickPagin
    lessonPaging(page) {
      this.getLessons(page);
    },
  },
  mixins:[timeString],
  components:{
    ModalComponent
  },
  created(){
    this.getLessons(1)
  }
};
</script>

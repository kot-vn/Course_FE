<template>
  <div class="track-section text-start border-radius-9">
    <div class="">
      <div class="">
        <h1>{{lessonsLearned}}</h1>
        <h3 class="px-3 py-3 mb-0 text-center">Course content</h3>
      </div>
      <ul>
        <li
          v-for="(lesson, index) in lessons"
          :key="lesson.id"
          @click="selectLesson(index)"
          :class="{ 'bg-primary-blur': index == currentIndex }"
          class="border-primary-blur cursor-pointer hover-primary"
        >
          <div class="row align-items-center g-0 py-3">
            <div class="col-2">
              <label class="container" @click.stop="">
                <input
                  type="checkbox"
                  @change="$emit('updateLesson',lesson.id)"
                  :checked="lessonsLearned.includes(lesson.id)"
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="col-10">
              <p class="fw-bold mb-2">
                {{
                  toOrdinal(index+1)+' - '+lesson.name
                }}
              </p>
              <p class="mb-0">
                <span class="text-primary me-2"
                  ><font-awesome-icon icon="fa-solid fa-circle-play"
                /></span>
                {{ secondsToHms(parseInt(lesson.duration)) }}
              </p>
            </div>
          </div>
          <div v-for="(quiz, index2) in quizzes" :key="index2" @click.stop="">
            <router-link
              class="text-white bg-primary d-block text-center py-1 fw-bold"
              v-if="quiz.lesson_id == lesson.id"
              to="/quizzes/1"
            >
              Quiz : {{ quiz.name }}
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import timeString from "@/mixin/timeString";
import stringCase from "@/mixin/stringCase"

export default {
  data() {
    return {
    currentIndex:0
    };
  },
  props:["lessons","quizzes","lessonsLearned"],
  methods:{
    selectLesson(index){
        this.currentIndex = index
        this.$emit("selectLesson",index)
    }
  },
  mixins: [timeString,stringCase]
};
</script>
<style scoped>
/* TRACK SECTION */
ul {
    padding: 0;
}
.track-section {
  width: 28%;
  border: 1px solid var(--primary-blur);
  overflow: hidden;
  max-height: 630px;
}
.track-section > div {
  height: 100%;
  overflow-y: scroll;
}
.track-section ul {
  margin-bottom: 0;
}
.suggestion {
  height: 300px;
}
/* INPUT CHECKBOX css */
.container {
  display: block;
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 18px;
  width: 18px;
  transform: translate(-50%, -50%);
  border: 1px solid #999;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--primary);
  border: 0;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 5px;
  top: 0px;
  width: 8px;
  height: 13px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
/* SCROLLBAR */
::-webkit-scrollbar-thumb {
  background-color: var(--primary);
  width: 6px;
  z-index: 10;
  border-radius: 9px;
}
::-webkit-scrollbar {
  width: 6px;
  background-color: white;
}

</style>
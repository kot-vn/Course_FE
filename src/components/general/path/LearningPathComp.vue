<template>
  <div>
    <section v-for="(plan, index) in plans" :key="index">
      <h1>Plan</h1>
      <div class="row">
        <div class="col-4" v-for="(stage, index) in plan.stages" :key="index">
          <div class="course-card">
            <p>Title:{{ stage.title }}</p>
            <p>Des: {{ stage.description }}</p>
            <div>
              <p>Tags: {{ stage.tag }}</p>
              <p>Views: {{ stage.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h3>Front End</h3>
        <ul>
          <li v-for="(schedule, index) in schedules" :key="index">
            <p>Title:{{ schedule.title }}</p>
            <p>Des: {{ schedule.description }}</p>
            <p>IMG: {{ schedule.img }}</p>
            <p>SUBS: {{ schedule.subscribes }}</p>
            <p>VIEWS: {{ schedule.views }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "HomeCoursesView",
  data() {
    return {
      plans: [],
      schedules: [],
    };
  },
  methods: {
    getCourses: async function () {
      this.courses = await this.axios
        .get("http://localhost:3000/courses")
        .then((res) => res.data);
    },
    getTip: async function () {
      this.tiptrick = await this.axios
        .get("http://localhost:3000/tiptrick")
        .then((res) => res.data);
    },
  },
  mounted() {
    // this.$refs.header.$el.querySelector("input").onclick = function () {
    //   console.log(2);
    // };
    this.plans = [
      {
        title: "FrontEnd",
        description: "blahlah",
        stages: [
          {
            title: "Basic FE",
            description: "This is for ...",
            tag: ["framework,basic"],
            category: ["backend"],
          },
          {
            title: "HTML CSS",
            description: "This is for ...",
            tag: ["framework,basic"],
            category: ["backend"],
          },
          {
            title: "Javascript",
            description: "This is for ...",
            tag: ["framework,basic"],
            category: ["backend"],
          },
        ],
      },
      {
        title: "BackEnd",
        description: "blahlah",
        stages: [
          {
            title: "Basic BE",
            description: "This is for ...",
            tag: ["framework,basic"],
            category: ["backend"],
          },
          {
            title: "HTML CSS",
            description: "This is for ...",
            tag: ["framework,basic"],
            category: ["backend"],
          },
          {
            title: "Javascript",
            description: "This is for ...",
            tag: ["framework,basic"],
            category: ["backend"],
          },
        ],
      },
    ];
    for (let i = 0; i < 5; i++) {
      this.schedules.push({
        id: 315 + i,
        title: "new" + i,
        img: "link",
        subscribes: 445,
        views: 464,
        description: "content" + i,
      });
    }
  },
};
</script>
<style scoped>
section div,
.billboard {
  border: 1px solid #555;
  margin: 5px;
}
</style>

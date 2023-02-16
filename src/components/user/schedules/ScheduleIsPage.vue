<template>
   <section>
        <h1>Schedule</h1>
        <div class="row">
          <div class="col-4" v-for="(item, index) in schedules" :key="index">
            <div class="course-card">
                <p>ID:{{item.id}}</p>
                <p>Title:{{item.title}}</p>
                <p>Des: {{item.description}}</p>
                <p>IMG: {{item.img}}</p>
                <p>SUBS: {{item.subscribes}}</p>
                <p>VIEWS: {{item.views}}</p>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
export default {
  name: "HomeCoursesView",
  data() {
    return {
      schedules: []
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
    section div,.billboard{
        border: 1px solid #555;
        margin: 5px;
    }
</style>

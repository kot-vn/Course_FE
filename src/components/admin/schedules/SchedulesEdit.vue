<template>
  <div>
    <h2 class="fw-bold text-center">Schedule#{{ course.id }}</h2>
    <!-- SCHEDULE INFORMATION -->
    <h4 class="fw-bold text-start">Information</h4>
    <div class="mb-4">
      <form  v-if="load">
        <label class="w-100 mb-4">
          <span class="mb-2">Name:</span>
          <input class="w-100" type="text" v-model="course.name"
        /></label>
        <div class="d-flex align-items-center">
          <div class="col-7 d-flex flex-column justify-content-between">
            <div class="d-flex mb-4">
              <div class="col-6">
                <label ><span>Publish:</span></label><br>
                <label class="fw-normal"
                  >Yes:
                  <input type="radio" :value="1" v-model="course.is_publish"
                /></label>
                <label class="ms-3 fw-normal"
                  >No:
                  <input
                    type="radio"
                    :value="0"
                    v-model="course.is_publish" /></label
                ><br />
              </div>
              <div class="col-6">
                <label
                  ><span>Date Published: </span
                  ><br><input
                    type="text"
                    disabled
                    :value="
                      course.published_at
                        ? course.published_at.split('T')[0]
                        : 'N/A'
                    "
                /></label>
              </div>
            </div>
            <div class="d-flex mb-4">
              <label class="col-6"
                ><span>Date Created: </span
                ><br><input
                  type="text"
                  disabled
                  :value="course.created_at.split('T')[0]"
              /></label>
              <label class="col-6"
                ><span>Date Modified: </span
                ><br><input
                  type="text"
                  disabled
                  :value="course.updated_at.split('T')[0]" /></label
              ><br />
            </div>
            <div class="d-flex mb-4">
            <label><span>Description:</span> </label>
            <textarea
              type="text"
              rows="5"
              v-model="course.description"
            ></textarea>
          </div>
          </div>
          <div class="col-1"></div>
          <div class="col-4">
            <div class="cover-img mb-3">
              <img ref="image"
                :src="
                  course.cover
                    ? course.cover.file_url
                    : require('@/assets/img/functional/no_image.jpg')
                "
              />
            </div>
            <div class="text-center">
              <label class="mb-4 btn btn-secondary p-1"> Change cover image  <input class="border-0 custom-file-input" ref="imgInput" @change="imagePreview" type="file" /> </label>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button @click.prevent="modalShow = true"  class="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  <!-- COURSE IN SCHEDULE -->
    <div class="table-wrapper pt-3">
      <h4 class="fw-bold text-start mb-4">Courses</h4>
      <div class="text-start mb-4">
        <button class="btn btn-primary" @click="poolShow = !poolShow">
          Add new course
        </button>
      </div>
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th colspan="4">Action</th>
          </tr>
          <tr
            @keydown.prevent="keyPos($event, index)"
            v-for="(lesson, index) in lessons"
            :key="index"
            tabindex="0"
            class="lesson"
          >
            <td>{{ lesson.id }}</td>
            <td>{{ lesson.name }}</td>
            <td>{{ lesson.des }}</td>
            <td>
              <button
                class="btn btn-secondary"
                @click="up($event.target, index)"
              >
                Up
              </button>
            </td>
            <td>
              <button
                class="btn btn-secondary"
                @click="down($event.target, index)"
              >
                Down
              </button>
            </td>
            <td><button class="btn btn-primary">Edit</button></td>
            <td><button class="btn btn-danger">Remove</button></td>
          </tr>
        </table>
        <div class="text-center">
          <button @click="modalShow = true" class="btn btn-primary mt-4 mb-3">
          Update
        </button>
        </div>
      </div>
    </div>
    <!-- CHILDREN POOL -->
    <div class="children-pool" v-if="poolShow">
      <div class="text-center px-3 py-2">
        <label class="me-1 mb-2 py-1 btn btn-secondary fw-bold">Search</label
        ><span @click="poolShow = !poolShow" class="close-pool">&times;</span
        ><input class="mb-3 w-100" type="search" />
      </div>
      <ul>
        <li v-for="(lesson, index) in lessonsPool" :key="index" class="px-3 pb-2 border-bottom">
          <p class="fw-bold my-1">{{ lesson.name }}</p>
          <p class="my-1">ID: {{ lesson.id }}</p>
          <div class="text-center"><button class="btn btn-primary" @click="addFromPool(index)">
            Add
          </button></div>
        </li>
      </ul>
    </div>
    <ModalComponent v-if="modalShow" @cancel="modalShow=false" @process="deleteCourse(currentId)"/>
  </div>
</template>
<script>
import ModalComponent from "@/components/others/ModalComponent.vue"

export default {
  data() {
    return {
      modalShow:false,
      img: "",
      poolShow: false,
      lessonsPool: [],
      course: {},
      currentIndex: 0,
      newLesson: {
        name: "",
        des: "",
        img: "",
        video: "",
        tag: "",
        category: "",
      },
      rawLessons: [],
      load: false,
    };
  },
  computed: {
    lessons() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.rawLessons.sort((a, b) => a.position - b.position);
    },
  },
  methods: {
    // LESSONS ARRANGEMENT
    keyPos(event, index) {
      if (event.keyCode == 38) {
        if (index == 0) return;
        let temp;
        temp = this.lessons[index].position;
        this.lessons[index].position = this.lessons[index - 1].position;
        this.lessons[index - 1].position = temp;
        event.target.previousElementSibling.focus();
      } else if (event.keyCode == 40) {
        event.target.focus();
        if (index == this.lessons.length - 1) return;
        let temp;
        temp = this.lessons[index].position;
        this.lessons[index].position = this.lessons[index + 1].position;
        this.lessons[index + 1].position = temp;
        event.target.nextElementSibling.focus();
      }
    },
    up(target, index) {
      target.parentNode.parentNode.focus();
      if (index == 0) return;
      let temp;
      temp = this.lessons[index].position;
      this.lessons[index].position = this.lessons[index - 1].position;
      this.lessons[index - 1].position = temp;
      target.parentNode.parentNode.previousElementSibling.focus();
    },
    down(target, index) {
      target.parentNode.parentNode.focus();
      if (index == this.lessons.length - 1) return;
      let temp;
      temp = this.lessons[index].position;
      this.lessons[index].position = this.lessons[index + 1].position;
      this.lessons[index + 1].position = temp;
      target.parentNode.parentNode.nextElementSibling.focus();
    },
    // LESSON POOL INTERACTION
    addFromPool(index) {
      this.lessonsPool[index].position =
        this.lessons[this.lessons.length - 1].position + 1;
      this.rawLessons.push(this.lessonsPool[index]);
    },
    // CALL API
    fetching() {
      // console.log(this.$route.params)
      // this.$store.dispatch("loadingFinishedFunc", false);
      let initialData = this.axios
        .get(`/api/v1/admin/courses/${this.$route.params.id}`)
        .then((res) => {
          this.course = res.data;
          this.load = true;
          console.log(res.data);
          // this.$store.dispatch("loadingFinishedFunc", true);
        })
        .catch((res) => {
          alert(res.response.data.error);
        });
      return initialData;
    },
    add() {
      this.axios
        .post("/api/v1/admin/courses", this.newCourse)
        .then(() => {
          this.newCourse.name = "";
          this.newCourse.description = "";
          this.fetching();
        })
        .catch(() => {
          alert("something wrong happen !");
        });
    },
    updateInfo() {
      console.log(this.$refs.imgInput.files);
      let formData = new FormData();
      formData.append("name", this.course.name);
      formData.append("description", this.course.description);
      formData.append("is_publish", this.course.is_publish);
      if (this.$refs.imgInput.files[0])
        formData.append("cover_file", this.$refs.imgInput.files[0]);
      this.axios
        .put(`/api/v1/admin/courses/${this.course.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          this.$refs.imgInput.value = "";
          this.fetching();
        })
        .catch(() => {
          alert("something wrong happen !");
        });
    },
    // OTHERS
    imagePreview(){
      console.log(2)
      let url = URL.createObjectURL(this.$refs.imgInput.files[0])
      this.$refs.image.src = url
    }
  },
  components:{
    ModalComponent
  },
  created() {
    // const getId = this.$route.params.id;
    // this.getId = this.$route.params.id;

    this.fetching();
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.lessons.push({
        id: 100 + i,
        position: i + 1,
        name: "Configure VueJS Application Tutorials  " + (i + 1),
        des: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        img: "https://i.ytimg.com/vi/-VQhSM77_HA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClX8lFY0T_TGnFgurbmgkujJO61w",
        tag: "framework",
        category: "frontEnd",
      });
    }
    for (let i = 0; i < 10; i++) {
      this.lessonsPool.push({
        id: 300 + i,
        name: "Configure VueJS Application Tutorials " + (i + 1),
        des: "HTML CSS TAILWIND",
        img: "https://i.ytimg.com/vi/jFfo23yIWac/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsPN9vc9_VSLRbVrVcqZXxV4Ekig",
        tag: "framework",
        category: "frontEnd",
      });
    }
  },
};
</script>
<style scoped>
.cover-img {
  width: 100%;
  overflow: hidden;
}
.cover-img img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}

label > span {
  display: inline-block;
  width: 150px;
}
</style>

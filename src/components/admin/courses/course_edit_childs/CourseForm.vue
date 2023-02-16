<template>
  <div v-if="course">
    <h2 class="fw-bold text-center">Course #{{ course.id }}</h2>
    <h4 class="fw-bold text-start">Information</h4>
    <div class="mb-4">
      <form class="course-form" @submit.prevent="updateConfirm = true">
        <label class="w-100 mb-4">
          <span class="mb-2">Name:</span>
          <input class="w-100" type="text" v-model="course.name"
        /></label>
        <div class="form-body d-flex align-items-center">
          <div class="col-7 d-flex flex-column justify-content-between">
            <div class="d-flex mb-4">
              <div class="col-6">
                <label><span>Publish:</span></label
                ><br />
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
                  ><span>Category: </span><br />
                  <select v-model="course.category_id" class="px-1 py-1 border-radius-6">
                    <option selected="true" disabled="disabled" hidden></option>
                    <option
                      v-for="category in categories"
                      :key="category.id"
                    :value="category.id"> 
                      {{ category.name }}
                    </option>
                  </select>
                </label>
              </div>
            </div>
            <div class="d-flex mb-4">
              <label class="col-6"
                ><span>Date Created: </span><br /><input
                  type="text"
                  disabled
                  :value="course.created_at.split('T')[0]"
              /></label>
              <label class="col-6"
                ><span>Date Modified: </span><br /><input
                  type="text"
                  disabled
                  :value="course.updated_at.split('T')[0]" /></label
              ><br />
            </div>
            <div class="mb-4">
              <label><span>Description:</span> </label> <br />
              <textarea
                type="text"
                rows="5"
                v-model="course.description"
              ></textarea>
            </div>
          </div>
          <div class="col-5">
            <div class="cover-img mb-3">
              <img
                ref="image"
                :src="coverImage"
              />
            </div>
            <div class="text-center">
              <label class="mb-4 btn btn-secondary py-0">
                <p class="font-weight-normal m-0">Cover image</p>
                <input
                  class="border-0 custom-file-input"
                  ref="imgInput"
                  @change="imagePreview"
                  type="file"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button @click="modalUpdateShow = true" class="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
    <!-- COURSE CONFIRM-->
    <ModalComponent
        v-if="updateConfirm"
        @cancel="updateConfirm = false"
        @process="updateCourse()"
      />
    <!-- COURSE CONFIRM-->
  </div>
</template>
<script>
import ModalComponent from "@/components/others/ModalComponent.vue";
import coursesAPI from "@/api/admin/courses/index";
import categoriesAPI from "@/api/admin/categories/index";
import { mapState,mapActions } from "vuex";

export default {
  data() {
    return {
      course: false,
      img: "",
      categories:[],
      updateConfirm:false
    };
  },
  props: ["courseId"],
  methods: {
    // STORE
    ...mapActions("alert", ["showSuccess"]),
    // COURSE
    async getCourse() {
      this.course = await coursesAPI.showCourse(this.courseId);
    },
    async updateCourse() {
      let formData = new FormData();
      formData.append("name", this.course.name);
      formData.append("description", this.course.description);
      formData.append("category_id", this.course.category_id);
      formData.append("is_publish", this.course.is_publish);
      if (this.$refs.imgInput.files[0])
        formData.append("cover_file", this.$refs.imgInput.files[0]);
      await coursesAPI.updateCourse(formData, this.course.id);
      this.showSuccess();
      this.$refs.imgInput.value = "";
    },
    imagePreview() {
      console.log(2);
      let url = URL.createObjectURL(this.$refs.imgInput.files[0]);
      this.$refs.image.src = url;
    },

    // CATEGORIES
    async getCategories(page) {
       let tmp = await categoriesAPI.getCategories(page)
       this.categories = tmp.categories
    }
  },
  computed: {
    ...mapState("defaultFile", {
      coverImage: function(state){
        if (this.course.cover)
            return this.course.cover.file_url
        else
            return state.noImage
      } 
    }),
  },
  components:{
    ModalComponent
  },
  created() {
    this.getCourse();
    this.getCategories(1);
  },
};
</script>
<style lang="scss" scoped>
.cover-img {
  width: 360px;
  height: 200px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
}
.cover-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
label > span {
  display: inline-block;
  width: 150px;
}
input,
textarea {
  border-radius: 6px;
}
</style>

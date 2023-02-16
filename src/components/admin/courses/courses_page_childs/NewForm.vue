<template>
    <div class="form-popup">
          <h3 class="fw-bold">Add new course</h3>
          <form class="Course-form" @submit.prevent="$emit('createCourse',newCourse)">
            <label class="w-100">Name:</label>
            <input class="w-100 mb-3" type="text" v-model="newCourse.name" />
            <label>Description: </label>
            <textarea
              class="mb-2"
              type="text"
              col="5"
              rows="5"
              v-model="newCourse.description"
            ></textarea>
            <div class="text-end">
              <button class="btn btn-primary me-2" type="submit">
                Add
              </button>
              <button class="btn btn-secondary" @click="$emit('cancel')">
                Cancel
              </button>
            </div>
          </form>
        </div>
</template>
<script>
export default {
  data(){
    return {
      // new course
      newCourse: {
        name: "",
        description: "",
      },
    }
  }
}
</script>
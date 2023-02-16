<template>
  <div class="form-popup">
    <h3 class="fw-bold">Add new category</h3>
    <form class="Course-form" @submit.prevent="$emit('createCategory',newCategory)">
      <label class="w-100">Name:</label>
      <input class="w-100 mb-3" type="text" v-model="newCategory.name" />
      <div class="text-end">
        <button class="btn btn-primary me-2" type="submit">Add</button>
        <button class="btn btn-secondary" @click="$emit('cancel')">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newCategory: {
        name: ""
      }
    };
  }
};
</script>
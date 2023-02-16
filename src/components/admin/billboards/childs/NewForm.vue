<template>
  <div class="form-popup">
    <h3 class="fw-bold">Add new billboard</h3>
    <form class="Course-form" @submit.prevent="$emit('createBillboard',newBillboard)">
      <label class="w-100">Name:</label>
      <input class="w-100 mb-3" type="text" v-model="newBillboard.name" />
      <label class="w-100">Title</label>
      <input class="w-100 mb-3" type="text" v-model="newBillboard.title" />
      <label class="w-100">Content:</label>
      <input class="w-100 mb-3" type="text" v-model="newBillboard.content" />
      <label class="w-100">Image:</label>
      <input class="w-100 mb-3" type="text" v-model="newBillboard.image" />
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
      newBillboard: {
        name: "",
        title: "",
        content: "",
        email: "",
      },
    };
  }
};
</script>
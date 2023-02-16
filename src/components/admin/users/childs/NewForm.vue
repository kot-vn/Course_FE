<template>
  <div class="form-popup">
    <h3 class="fw-bold">Add new user</h3>
    <form class="Course-form" @submit.prevent="$emit('createUser',newUser)">
      <label class="w-100">Name:</label>
      <input class="w-100 mb-3" type="text" v-model="newUser.name" />
      <label class="w-100">Email</label>
      <input class="w-100 mb-3" type="text" v-model="newUser.email" />
      <label class="w-100">Date of birth:</label>
      <input class="w-100 mb-3" type="text" v-model="newUser.date_of_birth" />
      <label class="w-100">Password:</label>
      <input class="w-100 mb-3" type="password" v-model="newUser.password" />
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
      newUser: {
        name: "",
        email: "",
        date_of_birth: "",
        password: "",
      },
    };
  }
};
</script>
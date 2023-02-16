<template>
    <div class="form-popup">
          <h3 class="fw-bold">User #{{ user.id }}</h3>
          <div class="Course-form">
            <label class="w-100">Name:</label>
            <input
              class="w-100 mb-3 border-0"
              type="text"
              :value="user.name"
              disabled
            />
            <label class="w-100">Email</label>
            <input
              class="w-100 mb-3 border-0"
              type="text"
              :value="user.email"
              disabled
            />
            <label class="w-100">Date of birth:</label>
            <input
              class="w-100 mb-3 border-0"
              type="text"
              :value="user.date_of_birth"
              disabled
            />
            <div class="text-end">
              <button class="btn btn-secondary" @click="$emit('cancel')">
                Cancel
              </button>
            </div>
          </div>
        </div>
</template>
<script>
export default {
    props:["user"]
}
</script>
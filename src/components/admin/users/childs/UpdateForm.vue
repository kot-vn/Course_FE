<template>
    <div class="form-popup">
          <h3 class="fw-bold">Update user #{{ user.id }}</h3>
          <form class="Course-form" @submit.prevent="$emit('updateUser',user)">
            <label class="w-100">Name:</label>
            <input class="w-100 mb-3" type="text" v-model="user.name" />
            <label class="w-100">Date of birth:</label>
            <input
              class="w-100 mb-3"
              type="text"
              v-model="user.date_of_birth"
            />
            <div class="text-end">
              <button class="btn btn-primary me-2" type="submit">Update</button>
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
                show:true,
                user:{}
            }
        },
        props:["currentUser"],
        created(){
            Object.assign(this.user,this.currentUser)
    }
}
</script>
<template>
    <div class="form-popup">
          <h3 class="fw-bold">Update category #{{ category.id }}</h3>
          <form class="Course-form" @submit.prevent="$emit('updateCategory',category)">
            <label class="w-100">Name:</label>
            <input class="w-100 mb-3" type="text" v-model="category.name" />
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
                category:{}
            }
        },
        props:["currentCategory"],
        created(){
            Object.assign(this.category,this.currentCategory)
    }
}
</script>
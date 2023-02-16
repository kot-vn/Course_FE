<template>
    <div class="form-popup">
          <h3 class="fw-bold">Update billboard #{{ billboard.id }}</h3>
          <form class="Course-form" @submit.prevent="$emit('updateBillboard',billboard)">
            <!-- NAME -->
            <label class="w-100">Name:</label>
            <input class="w-100 mb-3" type="text" v-model="billboard.name" />
            <!-- TITLE -->
            <label class="w-100">Title:</label>
            <input
              class="w-100 mb-3"
              type="text"
              v-model="billboard.title"
            />
            <!-- DESCRIPTION -->
            <label class="w-100">Content:</label>
            <input
              class="w-100 mb-3"
              type="text"
              v-model="billboard.content"
            />
            <!-- IMAGE -->
            <label class="w-100">Image:</label>
            <input
              class="w-100 mb-3"
              type="text"
              v-model="billboard.image"
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
                billboard:{}
            }
        },
        props:["currentBillboard"],
        created(){
            Object.assign(this.billboard,this.currentBillboard)
    }
}
</script>
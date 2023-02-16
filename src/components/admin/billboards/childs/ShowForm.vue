<template>
    <div class="form-popup">
          <h3 class="fw-bold">Billboard #{{ billboard.id }}</h3>
          <div class="Course-form">
            <!-- NAME -->
            <label class="w-100">Name:</label>
            <input
              class="w-100 mb-3 border-0"
              type="text"
              :value="billboard.name"
              disabled
            />
            <!-- TITLE -->
            <label class="w-100">Title:</label>
            <input
              class="w-100 mb-3 border-0"
              type="text"
              :value="billboard.title"
              disabled
            />
            <!-- CONTENT -->
            <label class="w-100">Content:</label>
            <input
              class="w-100 mb-3 border-0"
              type="text"
              :value="billboard.content"
              disabled
            />
            <!-- IMAGE -->
            <label class="w-100">Image:</label>
            <input
              class="w-100 mb-3 border-0"
              type="text"
              :value="billboard.image"
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
    props:["billboard"]
}
</script>
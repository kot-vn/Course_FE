<template>
    <div class="form-popup">
          <h3 class="fw-bold">Category #{{ category.id }}</h3>
          <div >
            <label class="w-100">Name:</label>
            <input
              class="w-100 mb-3 border-0"
              type="text"
              :value="category.name"
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
    props:["category"]
}
</script>
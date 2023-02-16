<template>
  <div id="app">
    <!-- <div class="waiting" v-if="false">
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div> -->
    <FailureAlert />
    <SuccessAlert />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
import SuccessAlert from "@/components/others/SuccessAlert.vue"
import FailureAlert from "@/components/others/FailureAlert.vue"

  export default {
    components:{
      SuccessAlert,
      FailureAlert
    }
  }
</script>
<style lang="scss">
</style>

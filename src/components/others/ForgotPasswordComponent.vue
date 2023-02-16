<template>
  <div>
    <div class="wrapper m-auto mt-5 mb-5">
      <form
        class="text-start"
        v-if="founded == undefined ? true : !founded"
        @submit.prevent="search"
      >
        <div class="alert-notice">
          <p v-if="founded == undefined ? false : !founded">No user found</p>
        </div>
        <label class="mb-4">Enter your email: </label>
        <input class="mb-2" type="text" />
        <div class="text-end">
          <button class="btn btn-primary mt-2 p-1 me-2">Process</button>
          <button class="btn btn-secondary mt-2 p-1">Cancel</button>
        </div>
      </form>
      <div class="alert-notice" v-if="founded">
      <p>
        New password has been send to your email. Please check email and change
        the password within 24h
      </p>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgotPasswordComp",
  data() {
    return {
      founded: undefined,
    };
  },
  methods: {
    search() {
      this.founded = false;
    },
  },
  components: {},
  mounted() {},
};
</script>
<style scoped>
p {
    margin: 0;
}
.wrapper {
  width: 400px;
  border: 1px solid #ddd;
  border-radius: 9px;
  padding: 20px 0;
}
.alert-notice {
    color: red;
}
form {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 20px;
}
h4 {
  padding-left: 20px;
}
.btn {
  font-size: 14px;
  margin-left: auto;
}
input {
  outline: none;
  border: 1px solid #999;
  border-radius: 6px;
  width: 100%;
}
</style>
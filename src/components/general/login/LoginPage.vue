<template>
    <div class="login">
        <LoginComponent />
    </div>
</template>
<script>
import LoginComponent from "@/components/others/LoginComponent.vue"
import { mapActions } from "vuex";

export default {
    data() {
    return {
      showPassword: false,
      passwordToggle: false,
      form: {
        email: {
          value: "",
          valid: true,
          message: "",
        },
        password: {
          value: "",
          valid: true,
          message: "",
        }
      },
    };
  },
  methods: {
    ...mapActions(["validator",'login']),
    print() {
      console.log(this.form.password.valid);
    },
  },
  components: {
    LoginComponent
  }
}
</script>
<style scoped lang="scss">
.login {
  .login-section {
    .login-form {
      width: 800px;
      margin: auto;
      .form-item {
        margin-bottom: 20px;

        label {
          display: block;
        }
        .input-field {
          width: 400px;
          border: 1px solid #ddd;
          border-radius: 12px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          padding: 5px 10px;
          align-items: center;

          input {
            border: none;
            outline: none;
            flex-grow: 4;
          }
          span {
            cursor: pointer;
          }
        }
      } 
        span {
          display: block;
          height: 20px;
        }
        span.invisible {
          visibility: hidden;
        }
      .form-item.invalid {
        .input-field {
          border: 1px solid rgb(233, 93, 93);
          input {
            color: rgb(233, 93, 93);
          }
        }
        span {
          color: rgb(233, 93, 93);
        }
      }
    }
  }
}
</style>
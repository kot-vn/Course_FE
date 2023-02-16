<template>
  <div class="login text-center">
    <section class="login-section mt-5">
      <h3>Đăng nhập</h3>
      <form @submit.prevent="submit(form)" class="login-form">
        <div class="form-item" :class="{ invalid: !form.email.valid }">
          <label class="mb-2" for="email">Email:</label>
          <div class="input-field">
            <input
              type="text"
              name="email"
              placeholder="Email của bạn"
              v-model="form.email.value"
              v-keyup="
                () =>
                  (form.email.valid =
                    validator.empty(form.email) && validator.email(form.email))
              "
            />
          </div>
          <span :class="{ invisible: form.email.valid }">{{
            form.email.message
          }}</span>
        </div>
        <div class="form-item" :class="{ invalid: !form.password.valid }">
          <label class="mb-2" for="password">Mật khẩu:</label>
          <div class="input-field">
            <input
              :type="showPassword ? 'text' : 'password'"
              name="password"
              placeholder="Mật khẩu của bạn"
              v-model="form.password.value"
              v-keyup="
                () =>
                  (form.password.valid =
                    validator.empty(form.password) &&
                    validator.password(form.password))
              "
            />
            <span @click="showPassword = !showPassword" v-if="!showPassword">
              <font-awesome-icon icon="fa-solid fa-eye" />
            </span>
            <span @click="showPassword = !showPassword" v-else
              ><font-awesome-icon icon="fa-solid fa-eye-slash"
            /></span>
          </div>
          <span :class="{ invisible: form.password.valid }">{{
            form.password.message
          }}</span>
        </div>
        <input
          type="submit"
          class="btn btn-submit btn-primary"
          value="Đăng nhập"
        />
        <br /><span class="invalid" :class="{ invisible: form.server.validate }"
          >{{form.server.message}}</span
        >
        <router-link to='/forgot'>Forgot password ?</router-link>
      </form>
    </section>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import validator from "../../mymodules/validator.js";

export default {
  props:{
    role:{
      type:String,
      default:"user"
    }
  },
  data() {
    return {
      showPassword: false,
      passwordToggle: false,
      form: {
        server:{
          value:true,
          validate:true,
          message:"Hãy chắc rằng các mục đã được nhập đúng và không bị bỏ trống"
        },
        email: {
          value: "",
          valid: true,
          message: "",
        },
        password: {
          value: "",
          valid: true,
          message: "",
        },
      },
    };
  },
  computed: {
    // qualified(){
    //   let flag = true
    //   for (const prop in this.form) {
    //     console.log(this.form[prop].valid )
    //     if ( this.form[prop].valid == false ) {
    //           flag = false
    //           break
    //     }
    //   }
    //   return this.form.email.value&&flag
    // }
  },
  methods: {
    ...mapActions("authen",['login']),
    submit(form) {
      if (!this.validator.general(form)) {
        this.form.server.validate = false;
        return;
      }
      this.form.server.validate = true;
      this.login([this.form,this.role])
    },
    debounce(func, timeout = 300) {
      let timer;
      return function () {
        clearTimeout(timer);
        setTimeout(func, timeout);
      }
    }
  },
  directives: {
    keyup: {
      // directive definition
      inserted: function (el, binding, vNode) {
        let process = vNode.context.debounce(binding.value);
        el.addEventListener("keyup", process);
        let process2 = vNode.context.debounce(binding.value, 0);
        el.addEventListener("focusout", process2);
         el.addEventListener('keyup',function(){
      vNode.context.form.server.validate = true
    })
      },
    },
  },

  mounted() {
    this.validator = validator;
  },
};
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
.btn-submit.non-click {
  // pointer-events: none;
  cursor: not-allowed;
}
span.invalid {
  color: rgb(218, 64, 47);
}
a {
  text-decoration: none;
  color:#06bbcc;
}
</style>
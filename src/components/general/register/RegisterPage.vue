<template>
  <div class="register text-center">
    <section class="register-section mt-5">
      <h2 class="mb-5">
        Start your journey
      </h2>
      <form @submit.prevent="submit(form)" class="register-form">
        <div class="form-item" :class="{ invalid: !form.name.valid }">
          <label class="mb-2" for="fullName">Your name: </label>
          <div class="input-field">
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              v-model="form.name.value"
              v-keyup="() => form.name.valid = validator.empty(form.name) && validator.name(form.name)"
            />
          </div>
          <span :class="{invisible:form.name.valid}">{{ form.name.message }}</span>
        </div>
        <div class="form-item" :class="{ invalid: !form.email.valid }">
          <label class="mb-2" for="email">Email:</label>
          <div class="input-field">
            <input
              type="text"
              name="email"
              placeholder="Email của bạn"
              v-model="form.email.value"
              v-keyup="()=> form.email.valid = validator.empty(form.email) && validator.email(form.email)"
            />
          </div>
          <span :class="{ invisible: form.email.valid }">{{
            form.email.message 
          }}</span>
        </div>
        <div class="form-item" :class="{ invalid: !form.password.valid }">
          <label class="mb-2" for="password">Password:</label>
          <div class="input-field">
            <input
              :type="showPassword ? 'text' : 'password'"
              name="password"
              placeholder="Mật khẩu của bạn"
              v-model="form.password.value"
              v-keyup="()=>{form.password.valid = validator.empty(form.password) && validator.password(form.password) ; validator.confirm(form.password,form.confirmPassword)}"
            />
            <span @click="showPassword = !showPassword" v-if="!showPassword">
              <font-awesome-icon icon="fa-solid fa-eye" />
            </span>
            <span @click="showPassword = !showPassword" v-else
              ><font-awesome-icon icon="fa-solid fa-eye-slash"
            /></span>
          </div>
          <span :class="{ invisible:form.password.valid }">{{
            form.password.message
          }}</span>
        </div>
        <div
          class="form-item"
          :class="{ invalid: !form.confirmPassword.valid }"
        >
          <label class="mb-2" for="confirmPassword">Password confirmation:</label>
          <div class="input-field">
            <input
              :type="showConfirmPassword?'text':'password'"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              v-model="form.confirmPassword.value"
              v-keyup="()=>form.confirmPassword.valid = validator.empty(form.confirmPassword) && validator.password(form.confirmPassword)&& validator.confirm(form.password,form.confirmPassword)"
            />
            <span @click="showConfirmPassword=!showConfirmPassword" v-if="!showConfirmPassword"><font-awesome-icon icon="fa-solid fa-eye" /></span>
            <span @click="showConfirmPassword=!showConfirmPassword" v-else><font-awesome-icon icon="fa-solid fa-eye-slash" /></span>
          </div>
          <span :class="{invisible:form.confirmPassword.valid}">{{
            form.confirmPassword.message
          }}</span>
        </div>
        <input type="submit"  class="btn btn-primary" value="Đăng ký">
         <br /><span class="invalid" :class="{ invisible: form.server.validate }"
          >{{form.server.message}}</span
        >
      </form>
    </section>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import validator from "@/mymodules/validator.js";

export default {
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      form: {
        server:{
          value:true,
          validate:true,
          message:"Hãy chắc rằng các mục đã được nhập đúng và không bị bỏ trống"
        },
        name: {
          value: "",
          valid: true,
          message: "",
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
        confirmPassword: {
          value: "",
          valid: true,
          message: "",
        },
      },
    };
  },
  methods: {
     ...mapActions("authen",["register"]),
    submit(form) {
      if (!this.validator.general(form)) {
        this.form.server.validate= false;
        return;
      }
      this.form.server.validate= true
      this.register(this.form)
    },
    debounce(func,timeout=500){
      let timer;
      return function(){
        clearTimeout(timer)
        setTimeout(func,timeout)
      }
    }
  },
  directives: {
  keyup: {
    // directive definition
    inserted: function (el,binding,vNode) {
    let process = vNode.context.debounce(binding.value)
    el.addEventListener('keyup',process)
    let process2 =  vNode.context.debounce(binding.value,0)
    el.addEventListener('focusout',process2)
    el.addEventListener('keyup',function(){
      vNode.context.form.server.validate = true
    })
  } 
  } 
  },
   mounted() {
    this.validator = validator;
  }
}
</script>
<style scoped lang="scss">
.register {
  .register-section {
    .register-form {
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
            background-color: transparent;
          }
          input:focus {
            background-color: transparent;
          }
          span {
            cursor: pointer;
          }
        }

        span {
          display: block;
          height: 20px;  
        }
        span.invisible {
          visibility: hidden;
        }
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
span.invalid {
  color:  salmon;
}
</style>
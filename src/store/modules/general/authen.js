import axios from 'axios'
import router from '@/router'

export default {
    namespaced:true,
    state: {
        username: undefined,
        userEmail:undefined,
        isUserLogin: false,
        isAdminLogin: false,
        token: "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjY3Mjk3Nzc3fQ.off8Ql18HJMEM3yA6LB7GdheW9K2rkO7wH-wveuAJQI"
      },
      getters: {
      },
      mutations: {
        toggleUserLogin(state) {
          state.isUserLogin = !state.isUserLogin
        },
        toggleAdminLogin(state) {
          state.isAdminLogin = !state.isAdminLogin
        },
        setToken(state, token) {
          state.token = token
        },
        setUsername(state, username) {
          state.username = username
        },
        setUserEmail(state, email) {
            state.userEmail = email
          }
      },
      actions: {
        async login(context, [form, role]) {
          await axios.post(`api/v1/${role=='admin'?'admin':'users'}/login`,
            {
              'email': form.email.value,
              'password': form.password.value,
            }
          ) 
            // SUCCESS
            .then(res => {
              context.commit('setToken', res.data.token)
            //  CHECK ROLE
              if (role == "admin") {
                context.commit('toggleAdminLogin')
                context.commit('toggleUserLogin')
                router.push('/admin')
              }
              else {
                context.commit('toggleUserLogin')
                router.push('/')
              }
              console.log(1)
            })
            //  FAIL
            .catch(error => {
              if (error.response) {
                form.server.validate = false
                if (error.response.data) {
                  form.server.message = error.response.data.message
                  form.password.value = ""
                }
                else
                  form.server.message = "Vui lòng kiểm tra lại kết nối của bạn"
              }
              else if (error.request) {
                form.server.validate = false
                form.server.message = "Vui lòng kiểm tra lại kết nối của bạn"
              }
              else {
                form.server.validate = false
                form.server.message = "Lỗi không xác định, vui lòng thử lại sau giây lát"
              }
            })
          if (context.state.isUserLogin || context.state.isAdminLogin) {
            axios.get('/api/v1/users/profile').then(res => {
              context.commit('setUsername', res.data.name)
              context.commit('setUserEmail', res.data.email)
              if (res.data.is_admin && !context.state.isAdminLogin)
                context.commit('toggleAdminLogin')
            }).catch((res) => { console.log(res)})
          }
        },
        // REGISTER 
        register(context, form) {
          axios.post("api/v1/users/register",
            {
              'name': form.name.value,
              'email': form.email.value,
              'password': form.password.value,
              'password_confirmation': form.confirmPassword.value
            }
          )
            // SUCCESS
            .then(() => {
              alert("Register succesfully !")
              router.push('/login')
            })
            // FAILED
            .catch(error => {
              if (error.response) {
                form.server.validate = false
                if (error.response.data) {
                  form.server.message = error.response.data.message
                  form.password.value = ""
                }
                else
                  form.server.message = "Vui lòng kiểm tra lại kết nối của bạn"
              }
              else if (error.request) {
                form.server.validate = false
                form.server.message = "Vui lòng kiểm tra lại kết nối của bạn"
              }
              else {
                form.server.validate = false
                form.server.message = "Lỗi không xác định, vui lòng thử lại sau giây lát"
              }
            })
        },
        // LOGOUT
        logout(context) {
            // CHECK ROLE
          if (context.state.isAdminLogin == true) {
            context.commit('toggleAdminLogin')
            context.commit('toggleUserLogin')
            context.commit('setToken', '')
          }
          else {
            context.commit('toggleUserLogin')
            context.commit('setToken', '')
          }
          if ( router.currentRoute.path=="/")
            return
          else
            router.push("/")
        }
      },
}

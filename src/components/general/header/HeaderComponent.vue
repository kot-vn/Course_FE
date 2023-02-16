<template>
  <header>
    <!-- Topbar start -->
    <div class="container-fluid px-5 d-none d-lg-block top-bar">
      <div class="row gx-0">
        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div class="d-inline-flex align-items-center" style="height: 45px">
            <small class="me-3 text-light"
              > <font-awesome-icon icon="fa-solid fa-location-dot" />&nbsp; 123 Street, Ha Noi, Viet
              Nam</small
            >
            <small class="me-3 text-light"
              ><font-awesome-icon icon="fa-solid fa-phone" />&nbsp; +012 345 6789</small
            >
            <small class="text-light"
              ><font-awesome-icon icon="fa-solid fa-envelope" />&nbsp; eLearning@gmail.com</small
            >
          </div>
        </div>
        <div class="col-lg-4 text-center text-lg-end">
          <div class="d-inline-flex align-items-center" style="height: 45px">
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
              ><font-awesome-icon icon="fa-brands fa-twitter"
            /></a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
              ><font-awesome-icon icon="fa-brands fa-facebook"
            /></a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
              ><font-awesome-icon icon="fa-brands fa-linkedin"
            /></a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
              ><font-awesome-icon icon="fa-brands fa-youtube"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-5"
    >
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <svg
          role="img"
          height="50px"
          width="50px"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Premier League</title>
          <path
            d="M11.176 0s-.681 1.938-.867 2.527C9.844 2.202 8.386 1.194 7.78.775c.14.806.356 2.124.403 2.403-.124-.093-.821-.698-1.875-1.194.589.682 1.008 1.736 1.271 2.588a10.566 10.566 0 0 1 5.238-1.379c.977 0 1.94.14 2.854.403.093-.884.279-1.968.682-2.758-.915.728-1.474 1.503-1.551 1.596-.031-.186-.093-1.52-.17-2.434-.372.403-1.8 2.016-2.063 2.264C12.384 1.938 11.176 0 11.176 0zm1.674 3.86c-1.674 0-3.3.386-4.696 1.115.713.046 1.224.668 1.395 1.164-.558-.45-1.442-.667-1.985-.078-.511.589-.464 1.688.047 2.572-1.193-.605-1.194-2.185-.775-2.867A10.392 10.392 0 0 0 3.61 9.594l1.07.172c-1.24 1.426-2.107 3.953-2.107 5.146l1.75-.543c-.31 1.054-.401 4.602.653 6.385 0 0 1.38-.96 2.945-3.363.65 2.17.356 3.985 0 5.767 2.82 1.581 6.09.696 8.012-.683l.357 1.35c2.248-1.489 3.488-3.628 3.72-6.124l.837.93c1.286-3.829.28-6.883-1.565-9.502l-.078.637-.79-.87s.17-.077.31-.263c.03-.078-.046-.495-.371-.774-.31.078-.56.264-.684.45a3.222 3.222 0 0 0-.93-.543c.062.077.604.79.65 1.007.466.388 1.102.837 1.52 1.395-.34-.403-1.984-.497-2.728-.078 0 0-.744-.868-1.426-1.473-.14-.511.326-.96.326-.96s-.48-.03-.93.42c-.682-.512-1.55-.745-1.55-.745-.961.14-1.612.82-1.612.82.217.14.512.327.776.42.511.217 1.006.139 1.332.139.263 0 .636.078.636.078s.635.495 1.565 1.565c-1.426-.574-2.915.062-3.969-.45-1.24-.62-1.146-1.595-1.146-1.595s-.836-.11-.836-.141c0 0 .618-.82 1.548-1.1l-.464-.402c.558-.465 1.534-1.085 3.115-1.24 0 0 .683.262 2.11 1.285.232-.326.308-1.008.308-1.008.728.248 2.217 1.333 2.806 1.984-.325-.759-.559-1.223-.636-2.013-.357-.357-1.24-1.101-3.069-1.551.295.605.264 1.115.264 1.115-.34-.45-1.055-1.146-1.55-1.332-.295-.015-.605-.047-.93-.047zm3.271 7.068a4.323 4.323 0 0 0 1.256.697v1.348c-.465.403-1.985 1.675-3.008 1.566-.573-1.1-1.115-2.107-1.115-2.107s1.565-1.318 2.867-1.504zm2.975.031c.465 1.131.59 2.48.078 3.379-.28-.605-.636-.947-1.008-1.35v-1.347s.418-.264.93-.682zm-.977 3.395c.465.511.559 1.068.559 1.068-.202 1.131-.836 1.846-1.301 2.14.046-.821-.172-1.519-.172-1.519-.34.372-1.13.743-1.596.836l-.697-1.3c.822-.032 2.201-1.194 2.201-1.194l1.006-.031z"
          />
        </svg>
        <h2 class="">eLEARNING</h2>
      </router-link>
      <button
        type="button"
        class="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0 align-items-center">
          <router-link
            to="/"
            class="nav-item nav-link"
            :class="{ active:$route.path=='/'}"
          >
            Home</router-link
          >
          <router-link
            to="/about"
            class="nav-item nav-link"
            :class="{ active:$route.path.split('/')[1]== 'about' }"
          >
          About</router-link
          >
          <router-link
            to="/schedules"
            class="nav-item nav-link"
            :class="{active:$route.path.split('/')[1] == 'schedules' }"
          >
            Schedules</router-link
          >
          <router-link
            to="/courses"
            class="nav-item nav-link"
            :class="{ active:$route.path.split('/')[1]== 'courses' }"
          >
           Courses</router-link
          >
          <button type="button" @click="showModal=true" class="search-btn" data-bs-toggle="modal" data-bs-target="#searchModal"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
        </div>
        <div class="nav-interact">
          <router-link
            v-if="!isUserLogin"
            to="/login"
            class="btn btn-primary me-3"
            >Login</router-link
          >
          <router-link
            v-if="!isUserLogin"
            to="/register"
            class="btn btn-primary"
            >Register</router-link
          >
          <div class="dropdown me-2" v-if="isUserLogin">
            <button
              class="btn btn-primary dropdown-toggle"
              @click="userToggle = !userToggle"
              type="button"
            >
              <font-awesome-icon icon="fa-solid fa-user-graduate" />
            </button>
            <ul class="dropdown-menu" v-if="userToggle">
              <li class="text-center">
                <strong>Hi, {{ username }}</strong>
              </li>
              <li>
                <router-link class="dropdown-item" to="/user"
                  >Trang cá nhân</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/user/profile"
                  >Profile</router-link
                >
              </li>
              <li class="mt-2">
                <div class="pe-1 text-center">
                  <button
                    v-if="isUserLogin"
                    @click="logout"
                    class="btn btn-primary ms-auto p-1"
                  >
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- Full screen Search -->
    <div class="modal" v-show="showModal" id="searchModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style="background: rgba(9, 30, 62, .7);">
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" @click="showModal=false" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center justify-content-center">
                    <div class="input-group" style="max-width: 600px;">
                        <input type="text" class="form-control bg-transparent border-primary p-3" placeholder="Type search keyword">
                        <button class="search-btn"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
import { mapActions,mapState } from "vuex";
export default {
  name: "HeaderComponent",
  data() {
    return {
      showModal:false,
      currentTab: "home",
      userToggle: false,
      fadedMessage: "",
    };
  },
  methods: {
    ...mapActions("authen",["logout"]),
  },
  computed:{
    ...mapState('authen', {
    username:state=>state.username,
    isUserLogin: state => state.isUserLogin,
  }),
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
:root {
  --primary: #06bbcc;
  --light: #f0fbfc;
  --dark: #181d38;
}
// MODAL
.modal {
  z-index: 9999;
  display: block;
  opacity: 1;
  bottom: 0;
}
.modal.fade .modal-dialog {
  transform: translateX(0);
}
.modal .search-btn {
  color: white;
  background-color: #06bbcc;
  border: 1px solid #06bbcc;
  padding: 10px 20px;
  font-size: 20px;
}
.modal input {
  border:1px solid #06bbcc !important;
  color: white;
  font-size: 18px;
  font-weight: 600;
}
.modal input:focus {
  border:1px solid #06bbcc !important;
  box-shadow: none;
}
.fw-medium {
  font-weight: 600 !important;
}

.fw-semi-bold {
  font-weight: 700 !important;
}

.back-to-top {
  position: fixed;
  display: none;
  right: 45px;
  bottom: 45px;
  z-index: 99;
}

/*** Button ***/
.top-bar {
  background-color: #06bbcc;
  a:hover {
    background-color: white !important;
    color: #06bbcc;
  }
}
.navbar-brand {
  color: #06bbcc;
  h2 {
    color: #06bbcc !important;
    margin-left: 10px;
  }
}
.navbar-brand:hover {
  opacity: 0.8;
  color: #06bbcc;
}
.btn {
  font-weight: 600;
  transition: 0.5s;
}
.btn:hover {
  opacity: 0.8;
  background-color: #06bbcc !important;
}

.btn-square {
  width: 38px;
  height: 38px;
}

.btn-sm-square {
  width: 32px;
  height: 32px;
}

.btn-lg-square {
  width: 48px;
  height: 48px;
}

.btn-square,
.btn-sm-square,
.btn-lg-square {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  border-radius: 0px;
}

/*** Navbar ***/
.navbar {
  box-shadow: 0 1px 2px rgb(0 0 0 / 15%) !important;
  .btn-primary {
    background-color: #06bbcc;
    border: none;
    color: white;
  }
  .search-btn {
    background-color: transparent;
    color: #06bbcc;
    border: none;
    outline: none;
    margin-right: 30px;
    font-weight: 600;
    font-size: 20px;
  }
}

.navbar-light .navbar-nav .nav-link {
  margin-right: 30px;
  padding: 25px 0;
  font-size: 15px;
  text-transform: uppercase;
  outline: none;
  font-weight: bold !important;
}
.nav-link {
  padding: 0 !important;
}
.nav-link span {
  display: block;
  padding:25px 0 ;
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.active {
  color: #06bbcc;
}
.dropdown-menu {
  display: block;
  left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 991.98px) {
  .navbar-light .navbar-nav .nav-link {
    margin-right: 0;
    padding: 10px 0;
  }

  .navbar-light .navbar-nav {
    border-top: 1px solid #eeeeee;
  }
}

.navbar-light .navbar-nav .nav-link {
  color: var(--dark);
  font-weight: 500;
}

.navbar-light.sticky-top {
  top: -100px;
  transition: 0.5s;
}

@media (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: block;
    margin-top: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
  }

  .navbar .dropdown-menu.fade-down {
    top: 100%;
    transform: rotateX(-75deg);
    transform-origin: 0% 0%;
  }

  .navbar .nav-item:hover .dropdown-menu {
    top: 100%;
    transform: rotateX(0deg);
    visibility: visible;
    transition: 0.5s;
    opacity: 1;
  }
}
</style>

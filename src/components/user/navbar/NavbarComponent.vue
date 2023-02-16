<template>
  <div>
    <!-- Sidebar Start -->
    <div class="sidebar pe-4 pb-3" :class="{ open: !showSideBar }">
      <nav class="navbar navbar-light">
        <router-link to="/admin" class="navbar-brand mx-4 mb-3">
          <h3 class="text-primary">
            <i class="fa fa-hashtag me-2"></i># ADMIN
          </h3>
        </router-link>
        <div class="d-flex align-items-center ms-4 mb-4">
          <div class="position-relative">
            <img
              class="rounded-circle"
              src="@/assets/img/user/user.jpg"
              alt=""
              style="width: 40px; height: 40px"
            />
            <div
              class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"
            ></div>
          </div>
          <div class="ms-3">
            <h6 class="mb-0">{{username}}</h6>
          </div>
        </div>
        <div class="navbar-nav sidebar-link w-100">
          <router-link
            to="/admin"
            class="nav-item nav-link"
            :class="{ active: $route.path.split('/')[2] == undefined }"
            ><i><font-awesome-icon icon="fa-solid fa-gauge-simple" /></i>
           Dashboard</router-link
          >
          <router-link
            to="/admin/users"
            class="nav-item nav-link"
            :class="{ active: $route.path.includes('users') }"
            ><i><font-awesome-icon icon="fa-solid fa-user" /></i>
           Users</router-link
          >
          <router-link
            to="/admin/billboards"
            class="nav-item nav-link"
            :class="{ active: $route.path.includes('billboards') }"
            ><i><font-awesome-icon icon="fa-solid fa-solar-panel" /></i>
           Billboards</router-link
          >
          <router-link :class="{active:$route.path.includes('schedules')}"
            to="/admin/schedules"
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            ><i> <font-awesome-icon icon="fa-solid fa-calendar" /></i>
            Schedules</router-link
          >
          <router-link to="/admin/courses" class="nav-item nav-link" :class="{active:$route.path.includes('courses')}"
            ><i> <font-awesome-icon icon="fa-solid fa-person-chalkboard" /></i>
            Courses</router-link
          >
        </div>
      </nav>
    </div>
    <!-- Sidebar End -->
    <!-- Content Start -->
    <div class="content" :class="{ open: !showSideBar }">
      <!-- Navbar Start -->
      <nav
        class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0"
      >
        <router-link to="index.html" class="navbar-brand d-flex d-lg-none me-4">
          <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
        </router-link>
        <a
          to="#"
          @click="$store.dispatch('toggleSidebar')"
          class="sidebar-toggler flex-shrink-0"
        >
          <i class="text-primary"
            ><font-awesome-icon icon="fa-solid fa-bars"
          /></i>
        </a>
        <router-link class="d-none d-md-flex ms-4 text-primary fw-bold" to="/">
          Back to homepage
        </router-link>
        <div class="navbar-nav align-items-center ms-auto">
          <div class="nav-item dropdown" @click="showMessage = !showMessage">
            <router-link
              to="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i><font-awesome-icon icon="fa-solid fa-envelope" /></i>
              <span class="d-none d-lg-inline-flex ms-1 me-1">Message </span>
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </router-link>
            <div
              v-show="showMessage"
              class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
            >
              <router-link to="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/user/user.jpg"
                    alt=""
                    style="width: 40px; height: 40px"
                  />
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </router-link>
              <hr class="dropdown-divider" />
              <router-link to="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/user/user.jpg"
                    alt=""
                    style="width: 40px; height: 40px"
                  />
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </router-link>
              <hr class="dropdown-divider" />
              <router-link to="#" class="dropdown-item">
                <div class="d-flex align-items-center">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/user/user.jpg"
                    alt=""
                    style="width: 40px; height: 40px"
                  />
                  <div class="ms-2">
                    <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                    <small>15 minutes ago</small>
                  </div>
                </div>
              </router-link>
              <hr class="dropdown-divider" />
              <router-link to="#" class="dropdown-item text-center"
                >See all message</router-link
              >
            </div>
          </div>
          <div class="nav-item dropdown">
            <a
              @click="showNoti = !showNoti"
              to="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i><font-awesome-icon icon="fa-solid fa-bell" /></i>
              <span class="d-none d-lg-inline-flex ms-1 me-1">
                Notification</span
              >
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </a>
            <div
              v-show="showNoti"
              class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
            >
              <router-link to="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">Profile updated</h6>
                <small>15 minutes ago</small>
              </router-link>
              <hr class="dropdown-divider" />
              <router-link to="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">New user added</h6>
                <small>15 minutes ago</small>
              </router-link>
              <hr class="dropdown-divider" />
              <router-link to="#" class="dropdown-item">
                <h6 class="fw-normal mb-0">Password changed</h6>
                <small>15 minutes ago</small>
              </router-link>
              <hr class="dropdown-divider" />
              <router-link to="#" class="dropdown-item text-center"
                >See all notifications</router-link
              >
            </div>
          </div>
          <div @click="showUser = !showUser" class="nav-item dropdown">
            <a
              to="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                class="rounded-circle me-lg-2"
                src="@/assets/img/user/user.jpg"
                alt=""
                style="width: 40px; height: 40px"
              />
              <span class="d-none d-lg-inline-flex">{{username}}</span>
            </a>
            <div
              v-show="showUser"
              class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0"
            >
              <router-link to="#" class="dropdown-item">My Profile</router-link>
              <router-link to="#" class="dropdown-item">Settings</router-link>
              <a to="#" @click="logout" class="dropdown-item">Log Out</a>
            </div>
          </div>
        </div>
      </nav>
      <!-- Navbar End -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HeaderView",
  data() {
    return {
      showNoti: false,
      showMessage: false,
      showUser: false,
    };
  },
  computed: {
    ...mapState({
      showSideBar: (state) => state.admin.showSidebar,
    }),
    ...mapState("authen",{
      username: state => state.username,
    })
  },
  methods: {
    ...mapActions("authen",["logout"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  min-height: auto !important;
}
// Adjust bootstrap
.dropdown-menu {
  display: block;
}
.nav-item {
  cursor: pointer;
}
a {
  cursor: pointer;
}
/*** Layout ***/
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  height: 100vh;
  overflow-y: auto;
  background: #f3f6f9;
  transition: 0.5s;
  z-index: 999;
}
.sidebar a {
  text-align: left;
}
.content {
  margin-left: 250px;
  min-height: 100vh;
  background: #ffffff;
  transition: 0.5s;
}

@media (min-width: 992px) {
  .sidebar {
    margin-left: 0;
  }

  .sidebar.open {
    margin-left: -250px;
  }

  .content {
    width: calc(100% - 250px);
  }

  .content.open {
    width: 100%;
    margin-left: 0;
  }
}

@media (max-width: 991.98px) {
  .sidebar {
    margin-left: -250px;
  }

  .sidebar.open {
    margin-left: 0;
  }

  .content {
    width: 100%;
    margin-left: 0;
  }
}

/*** Navbar ***/
.sidebar .navbar .navbar-nav .nav-link {
  padding: 7px 20px;
  color: var(--dark);
  font-weight: 500;
  border-left: 3px solid var(--light);
  border-radius: 0 30px 30px 0;
  outline: none;
}
.sidebar-link a {
  font-weight: 600 !important;
}
.sidebar .navbar .navbar-nav .nav-link:hover,
.sidebar .navbar .navbar-nav .nav-link.active {
  color: var(--primary);
  background: #ffffff;
  border-color: var(--primary);
}

.sidebar .navbar .navbar-nav .nav-link i {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 40px;
}

.sidebar .navbar .navbar-nav .nav-link:hover i,
.sidebar .navbar .navbar-nav .nav-link.active i {
  background: var(--light);
}

.sidebar .navbar .dropdown-toggle::after {
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  transition: 0.5s;
}
.navbar-expand {
  background-color: #f3f6f9 !important;
}
.sidebar .navbar .dropdown-toggle[aria-expanded="true"]::after {
  transform: rotate(-180deg);
}

.sidebar .navbar .dropdown-item {
  padding-left: 25px;
  border-radius: 0 30px 30px 0;
}
.content .navbar {
  background: #f3f6f9;
}
.content .navbar .navbar-nav .nav-link {
  margin-left: 25px;
  padding: 12px 0;
  color: var(--dark);
  outline: none;
}

.content .navbar .navbar-nav .nav-link:hover,
.content .navbar .navbar-nav .nav-link.active {
  color: var(--primary);
}

.content .navbar .sidebar-toggler,
.content .navbar .navbar-nav .nav-link i {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 40px;
}

.content .navbar .dropdown-toggle::after {
  margin-left: 6px;
  vertical-align: middle;
  border: none;
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  transition: 0.5s;
}

.content .navbar .dropdown-toggle[aria-expanded="true"]::after {
  transform: rotate(-180deg);
}

@media (max-width: 575.98px) {
  .content .navbar .navbar-nav .nav-link {
    margin-left: 15px;
  }
}
/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>

<template>
  <aside class="sidebar">
    <div class="container-fluid flex-nowrap">
      <ul class="main-list">
        <li>
          <router-link to="/user/profile">Profile</router-link>
        </li>
        <li>
          <router-link to="/user/schedules">Schedules</router-link>
        </li>
        <li>
          <router-link to="/user/courses">Courses</router-link>
        </li>
        <li>
          <router-link to="/user/timetable">Timetable</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "HeaderView",
  methods: {
    ...mapActions("authen",['logout'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
  position: sticky;
  top: 100px;
  width: 200px;
  border-right: 1px solid #ccc;
  align-self: flex-start;
  .main-list {
    text-align: left;
    text-decoration: none;
    list-style: none;
    padding: 0;
  }
}
</style>
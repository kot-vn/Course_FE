<template>
     <div class="table-wrapper">
        <table class="table">
        <thead>
          <tr>
            <!-- <th><input type="checkbox" /></th> -->
            <th class="text-nowrap" role="button" >ID  <span class="ms-2"><font-awesome-icon icon="fa-solid fa-sort" /></span></th>
            <th>Name <span></span></th>
            <th>Category</th>
            <th>Lessons</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(course, index) in courses" :key="index">
            <!-- <td><input type="checkbox" /></td> -->
            <td>{{ course.id }}</td>
            <td>{{ course.name }} </td>
            <td>{{course.category}}</td>
            <td>{{course.lessons.length}}</td>
            <td>
              <router-link
                class="btn btn-primary"
                :to="$route.path + `/${course.id}`"
              >
                Edit
              </router-link>
            </td>
            <td>
              <button @click="$emit('requestDeleteCourse',course)" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
</template>
<script>
export default {
    props:["courses"]
}
</script>
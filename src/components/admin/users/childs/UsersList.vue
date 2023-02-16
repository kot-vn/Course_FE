<template>
    <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <!-- <th><input type="checkbox" /></th> -->
              <th class="text-nowrap" role="button">
                ID
                <span class="ms-2"
                  ><font-awesome-icon icon="fa-solid fa-sort"
                /></span>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in users"
              :key="index"
              @click="$emit('showUser',user)"
            >
              <!-- <td><input type="checkbox" /></td> -->
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{user.date_of_birth?user.date_of_birth.split("-").reverse().join("-"):'' }}</td>
              <td>
                <button
                  @click.stop="$emit('requestUpdateUser',user)"
                  class="btn btn-primary"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  @click.stop="$emit('requestDeleteUser',user)"
                  class="btn btn-danger"
                >
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
    props:["users"]
}
</script>
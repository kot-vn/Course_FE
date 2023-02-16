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
              <th colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(category, index) in categories"
              :key="index"
              @click="$emit('showCategory',category)"
            >
              <!-- <td><input type="checkbox" /></td> -->
              <td>{{ category.id }}</td>
              <td>{{ category.name }}</td>
              <td>
                <button
                  @click.stop="$emit('requestUpdateCategory',category)"
                  class="btn btn-primary"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  @click.stop="$emit('requestDeleteCategory',category)"
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
    props:["categories"]
}
</script>
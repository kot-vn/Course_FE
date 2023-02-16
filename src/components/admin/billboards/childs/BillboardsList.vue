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
              <th>Title</th>
              <th>Content</th>
              <th>Image</th>
              <th colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(billboard, index) in billboards"
              :key="index"
              @click="$emit('showBillboard',billboard)"
            >
              <!-- <td><input type="checkbox" /></td> -->
              <td>{{ billboard.id }}</td>
              <td>{{ billboard.name }}</td>
              <td>{{ billboard.title }}</td>
              <td>{{ billboard.content }}</td>
              <td>{{billboard.image}}</td>
              <td>
                <button
                  @click.stop="$emit('requestUpdateBillboard',billboard)"
                  class="btn btn-primary"
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  @click.stop="$emit('requestDeleteBillboard',billboard)"
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
    props:["billboards"]
}
</script>
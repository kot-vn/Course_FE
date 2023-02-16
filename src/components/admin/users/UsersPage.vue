<template>
  <div class="mt-4" v-if="data">
    <div
      class="text-start mb-3 d-flex justify-content-between align-items-center"
    >
      <h4 class="fw-bold">Account Management</h4>
      <search-form @searching="search(value)" />
      <div>
        <button
          class="btn btn-primary me-2"
          @click="
            newForm = true;
            action = 'Add';
          "
        >
          Add new user
        </button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
    <!-- USER LIST START-->
    <UsersList
      @showUser="showUser"
      @requestUpdateUser="requestUpdateUser"
      @requestDeleteUser="requestDeleteUser"
      :users="data.users"
    />
    <!-- USER LIST END-->

    <!-- PAGINATION START -->
    <div class="vue-pagination mb-4" v-if="data.meta.pages > 1">
      <paginate
        v-model="currentPage"
        :pageCount="data.meta.pages"
        :click-handler="userPaging"
      />
    </div>
    <!-- PAGINATION END -->

    <!-- OVERLAY START-->
    <div class="overlay" v-if="showForm || updateForm || newForm">
      <!-- SHOW USER  START-->
      <ShowForm @cancel="showForm=false" :user="currentUser" v-if="showForm"/>
      <!-- SHOW USER END-->

      <!-- NEW USER FORM START-->
      <NewForm @createUser="createUser" @cancel="newForm=false" v-if="newForm"/>
      <!-- NEW USER FORM END-->

      <!-- UPDATE USER FORM START-->
      <UpdateForm @updateUser="updateUser" @cancel="updateForm=false" :currentUser="currentUser" v-show="updateForm"/>
      <!-- UPDATE USER FORM END-->
    </div>
    <!-- OVERLAY END-->

    <!-- DELETE WARNING -->
    <ModalComponent
      v-if="deleteWarning"
      @cancel="deleteWarning = false"
      @process="deleteUser(currentUser.id)"
    />
    <!-- DELETE WARNING -->
  </div>
</template>
  <script>
// COMPONENT
import UsersList from "@/components/admin/users/childs/UsersList.vue";
import NewForm from "@/components/admin/users/childs/NewForm.vue";
import ShowForm from "@/components/admin/users/childs/ShowForm.vue";
import UpdateForm from "@/components/admin/users/childs/UpdateForm.vue";
// JS
import ModalComponent from "@/components/others/ModalComponent.vue";
import SearchForm from "@/components/others/SearchForm.vue";
import API from "@/api/admin/users/index";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      // DATA
      data: false,
      currentUser: false,
      //FORM
      newForm:false,
      showForm: false,
      updateForm: false,
      deleteWarning: false,
      // pagination
      currentPage: 1,
      usersCount: false,
      remainsCount: false,
    };
  },
  methods: {
    // STORE
    ...mapActions("alert", ["showSuccess"]),
    // API CALL
    // get user list
    async getUsers(page) {
      this.data = await API.getUsers(page);
      this.currentPage = page;
      this.usersCount = this.data.users.length;
      console.log(this.users);
    },
    // create user
    async createUser(data) {
      this.newForm = false
      await API.createUser(data);
      this.showSuccess();
      this.getUsers(1);
    },
    // update user
    async updateUser(data) {
      await API.updateUser(data);
      this.updateForm = false;
      this.showSuccess();
      this.getUsers(this.currentPage);
    },
    // delete user
    async deleteUser(id) {
      await API.deleteUser(id);
      this.showSuccess();
      if (this.usersCount == 1) this.getUsers(this.currentPage - 1);
      else this.getUsers(this.currentPage);
    },
    // CLICKPAGIN
    userPaging(page) {
      this.getUsers(page);
    },
    search(value) {
      console.log(value);
    },
    // FORM POPUP
    showUser(user) {
      this.currentUser = user;
      this.showForm = true;
    },
    requestUpdateUser(user) {
      this.currentUser = user;
      this.updateForm = true;
    },
    requestDeleteUser(user) {
      this.currentUser = user;
      this.deleteWarning = true;
    }
  },
  components: {
    ModalComponent,
    SearchForm,
    UsersList,
    ShowForm,
    NewForm,
    UpdateForm,
  },
  created() {
    this.getUsers(1);
  }
};
</script>
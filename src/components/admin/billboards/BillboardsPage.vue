<template>
  <div class="mt-4" v-if="data">

    <div
      class="text-start mb-3 d-flex justify-content-between align-items-center"
    >
      <h4 class="fw-bold">Billboard Management</h4>
      <search-form @searching="search(value)" />
      <div>
        <button
          class="btn btn-primary me-2"
          @click="newForm = true"
        >
          Add new billboard
        </button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>

    <!-- NO BILLBOARD -->
    <h4 v-if="!data.billboards.length"  class="text-center mt-5" >No billboards availble</h4>
     <!-- NO BILLBOARD -->

    <!-- CATEGORY LIST START-->
    <BillboardsList
      v-if="data.billboards.length"
      @showBillboard="showBillboard"
      @requestUpdateBillboard="requestUpdateBillboard"
      @requestDeleteBillboard="requestDeleteBillboard"
      :billboards="data.billboards"
    />
    <!-- CATEGORY LIST END-->

    <!-- PAGINATION START -->
    <div class="vue-pagination mb-4" v-if="data && data.meta.pages > 1">
      <paginate
        v-model="currentPage"
        :pageCount="data.meta.pages"
        :click-handler="billboardPaging"
      />
    </div>
    <!-- PAGINATION END -->

    <!-- OVERLAY START-->
    <div class="overlay" v-if="showForm || updateForm || newForm">
      <!-- SHOW CATEGORY  START-->
      <ShowForm @cancel="showForm=false" :billboard="currentBillboard" v-if="showForm"/>
      <!-- SHOW CATEGORY END-->

      <!-- NEW CATEGORY FORM START-->
      <NewForm @createBillboard="createBillboard" @cancel="newForm=false" v-if="newForm"/>
      <!-- NEW CATEGORY FORM END-->

      <!-- UPDATE CATEGORY FORM START-->
      <UpdateForm @updateBillboard="updateBillboard" @cancel="updateForm=false" :currentBillboard="currentBillboard" v-show="updateForm"/>
      <!-- UPDATE CATEGORY FORM END-->
    </div>
    <!-- OVERLAY END-->

    <!-- DELETE WARNING -->
    <ModalComponent
      v-if="deleteWarning"
      @cancel="deleteWarning = false"
      @process="deleteBillboard(currentBillboard.id)"
    />
    <!-- DELETE WARNING -->
  </div>
</template>
  <script>
// COMPONENT
import BillboardsList from "@/components/admin/billboards/childs/BillboardsList.vue";
import NewForm from "@/components/admin/billboards/childs/NewForm.vue";
import ShowForm from "@/components/admin/billboards/childs/ShowForm.vue";
import UpdateForm from "@/components/admin/billboards/childs/UpdateForm.vue";
// JS
import ModalComponent from "@/components/others/ModalComponent.vue";
import SearchForm from "@/components/others/SearchForm.vue";
import API from "@/api/admin/billboards/index";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      // DATA
      data: false,
      currentBillboard: false,
      //FORM
      newForm:false,
      showForm: false,
      updateForm: false,
      deleteWarning: false,
      // pagination
      currentPage: 1,
      billboardsCount: false,
      remainsCount: false,
    };
  },
  methods: {
    // STORE
    ...mapActions("alert", ["showSuccess"]),
    // API CALL
    // get billboard list
    async getBillboards(page) {
      this.data = await API.getBillboards(page);
      this.currentPage = page;
      this.billboardsCount = this.data.billboards.length;
    },
    // create billboard
    async createBillboard(data) {
      this.newForm = false
      await API.createBillboard(data);
      this.showSuccess();
      this.getBillboards(1);
    },
    // update billboard
    async updateBillboard(data) {
      await API.updateBillboard(data);
      this.updateForm = false;
      this.showSuccess();
      this.getBillboards(this.currentPage);
    },
    // delete billboard
    async deleteBillboard(id) {
      await API.deleteBillboard(id);
      this.showSuccess();
      if (this.billboardsCount == 1) this.getBillboards(this.currentPage - 1);
      else this.getBillboards(this.currentPage);
    },
    // CLICKPAGIN
    billboardPaging(page) {
      this.getBillboards(page);
    },
    search(value) {
      console.log(value);
    },
    // FORM POPUP
    showBillboard(billboard) {
      this.currentBillboard = billboard;
      this.showForm = true;
    },
    requestUpdateBillboard(billboard) {
      this.currentBillboard = billboard;
      this.updateForm = true;
    },
    requestDeleteBillboard(billboard) {
      this.currentBillboard = billboard;
      this.deleteWarning = true;
    }
  },
  components: {
    ModalComponent,
    SearchForm,
    BillboardsList,
    ShowForm,
    NewForm,
    UpdateForm,
  },
  created() {
    this.getBillboards(1);
  }
};
</script>
<template>
  <div class="mt-4" v-if="data">
    <div
      class="text-start mb-3 d-flex justify-content-between align-items-center"
    >
      <h4 class="fw-bold">Categories Management</h4>
      <search-form @searching="search(value)" />
      <div>
        <button
          class="btn btn-primary me-2"
          @click="
            newForm = true;
            action = 'Add';
          "
        >
          Add new category
        </button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
    <!-- CATEGORY LIST START-->
    <CategoriesList
      @showCategory="showCategory"
      @requestUpdateCategory="requestUpdateCategory"
      @requestDeleteCategory="requestDeleteCategory"
      :categories="data.categories"
    />
    <!-- CATEGORY LIST END-->

    <!-- PAGINATION START -->
    <div class="vue-pagination mb-4" v-if="data && data.meta.pages > 1">
      <paginate
        v-model="currentPage"
        :pageCount="data.meta.pages"
        :click-handler="categoryPaging"
      />
    </div>
    <!-- PAGINATION END -->

    <!-- OVERLAY START-->
    <div class="overlay" v-if="showForm || updateForm || newForm">
      <!-- SHOW CATEGORY  START-->
      <ShowForm
        @cancel="showForm = false"
        :category="currentCategory"
        v-if="showForm"
      />
      <!-- SHOW CATEGORY END-->

      <!-- NEW CATEGORY FORM START-->
      <NewForm
        @createCategory="createCategory"
        @cancel="newForm = false"
        v-if="newForm"
      />
      <!-- NEW CATEGORY FORM END-->

      <!-- UPDATE CATEGORY FORM START-->
      <UpdateForm
        @updateCategory="updateCategory"
        @cancel="updateForm = false"
        :currentCategory="currentCategory"
        v-show="updateForm"
      />
      <!-- UPDATE CATEGORY FORM END-->
    </div>
    <!-- OVERLAY END-->

    <!-- DELETE WARNING -->
    <ModalComponent
      v-if="deleteWarning"
      @cancel="deleteWarning = false"
      @process="deleteCategory(currentCategory.id)"
    />
    <!-- DELETE WARNING -->
  </div>
</template>
  <script>
// COMPONENT
import CategoriesList from "@/components/admin/categories/childs/CategoriesList.vue";
import NewForm from "@/components/admin/categories/childs/NewForm.vue";
import ShowForm from "@/components/admin/categories/childs/ShowForm.vue";
import UpdateForm from "@/components/admin/categories/childs/UpdateForm.vue";
// JS
import ModalComponent from "@/components/others/ModalComponent.vue";
import SearchForm from "@/components/others/SearchForm.vue";
import API from "@/api/admin/categories/index";
import formHandling from "@/mixin/formHandling";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      // DATA
      data:false,
      currentCategory: false,
      // PAGING
      currentPage: 1,
      categoriesCount: false,
      remainsCount: false,
      // FORM
      newForm:false,
      showForm: false,
      updateForm: false,
      deleteWarning: false,
    };
  },
  methods: {
    // STORE
    ...mapActions("alert", ["showSuccess"]),
    // API CALL
    // get category list
    async getCategories(page) {
      this.data = await API.getCategories(page);
      this.categories = this.data.categories;
      this.meta = this.data.meta;
      this.currentPage = page;
      this.categoriesCount = this.categories.length;
      console.log(this.data);
    },
    // create category
    async createCategory(data) {
      await API.createCategory(data);
      this.newForm = false;
      this.showSuccess();
      this.getCategories(1);
    },
    // update category
    async updateCategory(data) {
      await API.updateCategory(data);
      this.updateFormShow = false;
      this.showSuccess();
      this.updateForm = false
      this.getCategories(this.currentPage);
    },
    // delete category
    async deleteCategory(id) {
      await API.deleteCategory(id);
      this.showSuccess();
      if (this.categoriesCount == 1) this.getCategories(this.currentPage - 1);
      else this.getCategories(this.currentPage);
    },
    // clickPagin
    categoryPaging(page) {
      this.getCategories(page);
    },
    search(value) {
      console.log(value);
    },
     // FORM POPUP
     showCategory(category) {
      this.currentCategory = category;
      this.showForm = true;
    },
    requestUpdateCategory(category) {
      this.currentCategory = category;
      this.updateForm = true;
    },
    requestDeleteCategory(category) {
      this.currentCategory = category;
      this.deleteWarning = true;
    }
  },
  components: {
    ModalComponent,
    SearchForm,
    CategoriesList,
    ShowForm,
    NewForm,
    UpdateForm
  },
  mixins: [formHandling],
  created() {
    this.getCategories(1);
  }
};
</script>
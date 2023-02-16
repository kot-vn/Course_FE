<template>
  <div>
    <nav class="categories-bar mb-5" v-if="categories">
      <ul class="d-flex align-items-center px-5 bg-primary border-primary-blur">
        <li
          class="me-5 py-1"
          v-for="(category, index) in categories"
          :key="index"
        >
          <router-link
            :to="'/courses/' + toUrl(category.name)"
            class="text-white cursor-pointer"
            :key="index"
          >
            {{ category.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import stringCase from "@/mixin/stringCase";
import categoriesAPI from "@/api/users/categories/index";

export default {
  data() {
    return {
      categoriesData: false,
      categories: false,
    };
  },
  mixins: [stringCase],
  methods: {
    async getCategories() {
      this.categoriesData = await categoriesAPI.getCategories(1);
      this.categories = this.categoriesData.categories;
      if (this.$route.path == "/courses")
        this.$router.push("/courses/" + this.toUrl(this.categories[0].name));
    },
  },
  watch: {
    '$route'(newValue) {
      if (newValue.path == "/courses")
        this.$router.push("/courses/" + this.toUrl(this.categories[0].name));
    },
  },
  mounted(){
    this.getCategories();
  },
};
</script>
<style scoped>
</style>

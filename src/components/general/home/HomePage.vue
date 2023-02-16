<template>
  <main>
    <!-- CAROUSEL -->
    <BillboardsSection />
    <!-- CAROUSEL -->
    <!-- Categories Start -->
    <CategoriesSection />
    <!-- Categories Start -->

    <!-- Courses Start -->
    <CoursesSection />
    <!-- Courses Start -->
  </main>
</template>
<script>
import BillboardsSection from '@/components/general/home/childs/BillboardsSection.vue';
import CategoriesSection from '@/components/general/home/childs/CategoriesSection.vue';
import CoursesSection from '@/components/general/home/childs/CoursesSection.vue';


export default {
  name: "HomeView", 
  components:{
    BillboardsSection,
    CategoriesSection,
    CoursesSection
  }
};
</script>

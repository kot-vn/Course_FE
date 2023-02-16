<template>
  <div>
    <!-- COURES POOL -->
    <div class="courses-pool px-3 w-1300 m-auto">

      <!-- PROMINENT SECTION -->
      <ProminentSection/>
      <!-- PROMINENT SECTION -->

      <!-- POOL SECTION start-->
      <PoolSection />
      <!-- POOL SECTION end-->
    </div>
  </div>
</template>
<script>
import ProminentSection from "@/components/general/courses/childs/ProminentSection.vue";
import PoolSection from "@/components/general/courses/childs/PoolSection.vue";

import stringCase from "@/mixin/stringCase";

export default {
  data() {
    return {

      // ALL COURSE
      sortCriteria: "Most Popular",
      sortByShow: false,
    };
  },
  components: {
    ProminentSection,
    PoolSection,
  },
  mixins: [stringCase]
};
</script>
<style lang="scss">
@import "@/assets/styles/general/course_item.scss";
ul {
  box-shadow: 0 1px 1px rgb(0 0 0 / 15%);
}
.router-link-active {
  font-weight: bold;
  font-size: 18px;
}
</style>

<template>
  <!-- NAV-BUTTON -->
  <ul class="d-flex nav-buttons-primary p-0">
    <li
    v-for="(item,index) in navOptions" :key="index"
      @click="select(item)"
      :class="{ active: currentOption == item }"
      class="py-2 col-6 text-center"
    >
      <h5 class="fw-bold mb-0">{{item}}</h5>
    </li>
  </ul>
  <!-- OVER VIEW -->
</template>
<script>
export default {
  data() {
    return {
      currentOption: this.navOptions[0],
    };
  },
  methods:{
    select(item){
        this.currentOption = item
        this.$emit('nav-select',item)
    }
  },
  props:['navOptions']
};
</script>
<style scoped>
.nav-buttons-primary li {
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  color:#999;
}
.nav-buttons-primary li:hover{
  color: #333;
}
.nav-buttons-primary li.active {
  border-bottom: 3px solid #666;
  color: #333 !important;
}
</style>
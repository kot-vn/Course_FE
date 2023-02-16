<template>
  <!-- NAV-BUTTON -->
  <ul class="d-flex nav-buttons-primary p-0">
    <li
    v-for="(item,index) in navOptions" :key="index"
      @click="select(item)"
      :class="{ active: currentOption == item }"
      class="py-2 me-4 text-center"
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
  cursor: pointer;
  color:#d1d7dc;
}
.nav-buttons-primary li:hover{
  color: #fff !important;
}
.nav-buttons-primary li.active {
  border-bottom: 5px solid white;
  color: white !important;
}
</style>
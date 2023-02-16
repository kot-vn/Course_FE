<template>
  <div>
    <ul class="d-flex nav-buttons-primary p-0">
      <li v-for="(item,index) in criterias" :key="index"
        @click="selectCriteria(item,index)"
        :class="{ active: currentIndex == index }"
        class="me-4 py-2 text-secondary text-center"
      >
        <h6 class="fw-bold mb-0">{{item}}</h6>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      criterias: ["New","Most popular","Trending"],
      currentIndex:0
    };
  },
  methods:{
    selectCriteria(item,index){
        this.currentIndex = index
        this.$emit('selectCriteria',item)
    }
  },
  created(){
    this.$emit('selectCriteria',this.criterias[0])
  }
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

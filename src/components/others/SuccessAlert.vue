<template>
  <transition name="fade">
    <div class="alert alert-success" role="alert" v-show="show">
      <h4 class="alert-heading">Success !!!</h4>
    </div>
  </transition>
</template>
<script>
import {mapState,mapActions} from 'vuex'

export default {
  computed:{
    ...mapState("alert",{
      show:state=>state.successAlert
    })
  },
  methods:{
    ...mapActions("alert",['showSuccess'])
  }
}
</script>
<style scoped>
div {
  position: fixed;
  z-index: 3000;
  bottom: 20px;
  right: 20px;
  margin: 0;
  padding: 5px 10px;
}
h4 {
  margin: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

export default {
  namespaced: true,
  state: {
    successAlert:false,
    failureAlert:false
  },
  mutations: {
    toggleSuccess(state) {
      state.successAlert =  !state.successAlert;
    },
    toggleFailure(state) {
      state.failureAlert =  !state.failureAlert;
    }
  },
  actions: {
    showSuccess({ commit}) {
        commit('toggleSuccess')
        setTimeout(function(){
            commit('toggleSuccess')
        },1000)
      },
      showFailure({ commit}) {
        commit('toggleFailure')
        setTimeout(function(){
            commit('toggleFailure')
        },1000)
      }
  },
};

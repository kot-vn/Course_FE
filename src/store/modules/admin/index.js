export default {
    namespace:true,
    state:{
        showSidebar:true
    },
    mutations:{
        changeSidebar(state){
            state.showSidebar = !state.showSidebar
        }
    },
    actions:{
        toggleSidebar(context){
            console.log(2)
            context.commit('changeSidebar')
        }
    }
}



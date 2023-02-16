<template>
    <div>
        <CategoriesBar/>
        <router-view />
    </div>
</template>
<script>
import CategoriesBar from "@/components/general/courses/CategoriesBar.vue"

export default {
    name:"HomeCoursesPage",
    data(){
        return {
        }
    },
    components:{
        CategoriesBar
    }
}
</script>
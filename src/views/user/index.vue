<template>
  <div>
    <div class="admin">
      <NavbarComponent v-if="!($route.path == '/admin/login')" />
      <main :class="{open:!$store.state.admin.showSidebar||$route.path == '/admin/login'}">
        <router-view :role="adminRole"></router-view>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/user/navbar/NavbarComponent.vue";


export default {
  data() {
    return {
      adminRole: "admin",
    };
  },
  name: "HomeView",
  components: {
    NavbarComponent,
  },
  methods:{
    async get(){
      let el = this
      let playlistId = 'PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3'
      let courseId = 23
      let data
      await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=17&playlistId=${playlistId}&key=AIzaSyApn2HB5U_StzHWNmyVb37etPSkji7b94c`).then(res=>res.json()).then(res=>data=res)
      console.log(data)
      data = data.items
      let i=0
      let interval = setInterval(function(){
        console.log(i)
        if (data[i].snippet.title=="Deleted video")
          {
            i++
            return
          }
        el.axios.post(`api/v1/admin/courses/${courseId}/lessons`,{
          name:data[i].snippet.title.replace(/.*- /g,''),
          description:data[i].snippet.description.slice(0,150),
          url:"https://www.youtube.com/watch?v="+data[i].snippet.resourceId.videoId
        })
        i++
        if (i>16) clearInterval(interval)
      },2000)
    }
  },
  mounted(){
    // this.get()
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/admin/admin_crud.scss";
</style>
<style lang="scss" scoped>
  main {
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 250px;
    transition: 0.5s;
  }
  main.open{
    margin-left: 0;
  }
</style>
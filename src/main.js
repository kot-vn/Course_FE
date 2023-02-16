import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import VueYoutube from 'vue-youtube'
import VueCarousel from 'vue-carousel';
import Paginate from 'vuejs-paginate'
// import the fontawesome core 
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/assets/styles/general/global.scss'
// import specific icons
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons'
import { faTwitter,faFacebook,faYoutube,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret,faUserGraduate,faEye,faEyeSlash,faReply,faSquareUpRight,faEnvelope,faLocationDot,faPhone,faMagnifyingGlass,faLessThan,faGreaterThan,faUserTie,faUser,faClock,faStar,faSolarPanel,faGaugeSimple,faCalendar,faPersonChalkboard,faBook,faPuzzlePiece,faBlog,faBars,faBell,faAngleDown,faSort,faCirclePlay,faStarHalfStroke,faPenToSquare,faCaretDown} from '@fortawesome/free-solid-svg-icons'
// add icons to the library
library.add(faUserSecret,faUserGraduate,faEye,faEyeSlash,faReply,faTwitter,faFacebook,faYoutube,faLinkedin,faSquareUpRight,faEnvelope,faLocationDot,faPhone,faMagnifyingGlass,faLessThan,faGreaterThan,faUserTie,faUser,faClock,faStar,faRegularStar,faSolarPanel,faGaugeSimple,faCalendar,faPersonChalkboard,faBook,faPuzzlePiece,faBlog,faBars,faBell,faAngleDown,faSort,faCirclePlay,faStarHalfStroke,faPenToSquare,faCaretDown)

// add font awesome icon component
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('paginate', Paginate)
Vue.use(VueAxios, axios)
Vue.use(VueCarousel);
Vue.config.productionTip = false
Vue.use(VueYoutube)

axios.defaults.baseURL = 'http://127.0.0.1:3000';
// axios.defaults.headers.common= {'Authorization':`Bearer ${store.state.token}`}

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${store.state.authen.token}`;
    return config;
  },
  (error) => {
    // console.log("request error", error);
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

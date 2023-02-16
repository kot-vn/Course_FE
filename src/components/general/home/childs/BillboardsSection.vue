<template>
  <div class="billboards">
    <carousel
      v-if="data"
      class="home-carousel over-flow-hidden"
      ref="carousel"
      :per-page="1"
      :navigationEnabled="true"
      :navigation-next-label="nextLabel"
      :navigation-prev-label="prevLabel"
      :loop="true"
      :mouse-drag="false"
    >
      <slide v-for="(billboard, index) in data.billboards" :key="index">
        <div class="owl-carousel-item position-relative">
          <img class="img-fluid w-100" :src="billboard.image" alt="" />
          <div
            class="
              position-absolute
              top-0
              start-0
              w-100
              h-100
              d-flex
              align-items-center
            "
            style="background: rgba(24, 29, 56, 0.7)"
          >
            <div class="container slide-caption">
              <div class="row justify-content-start">
                <div class="col-sm-10 col-lg-8 text-start">
                  <h5
                    class="
                      text-primary text-uppercase
                      mb-3
                      animated
                      slideInDown
                    "
                  >
                    {{ billboard.name }}
                  </h5>
                  <h1 class="display-3 text-white animated slideInDown">
                    {{ billboard.title }}
                  </h1>
                  <p class="fs-5 text-white mb-4 pb-2">
                    {{ billboard.content }}
                  </p>
                  <router-link
                    to="/about"
                    class="
                      btn btn-primary
                      py-md-3
                      px-md-5
                      me-3
                      animated
                      slideInLeft
                    "
                    >Read More</router-link
                  >
                  <router-link
                    to="/register"
                    class="btn btn-light py-md-3 px-md-5 animated slideInRight"
                    >Join Now</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import billboardsAPI from "@/api/users/billboards/index";

export default {
  data() {
    return {
      prevLabel: `<svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="currentColor" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
						</svg>`,
      nextLabel: `<svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="currentColor" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
						</svg>`,
      data: false
    };
  },
  methods: {
    async getBillboards() {
      this.data = await billboardsAPI.getBillboards(1);
    },
  },
  components: {
    Carousel,
    Slide,
  },
  created() {
    this.getBillboards();
  }
};
</script>
<style lang="scss">
.billboards {
  min-height: 500px;
}
/* CAROUSEL */
.home-carousel{
  .VueCarousel-wrapper{
    overflow: hidden;
  }
  .VueCarousel-inner {
    height: auto;
  }
  .VueCarousel-pagination {
    position: absolute;
    bottom: 20px;
  }
  .VueCarousel-navigation-button {
    border: 1px solid white !important;
  }
  .VueCarousel-navigation-prev {
    margin-right: 0 !important;
    display: inline !important;
    left: unset !important;
    right: 40px !important;
    transform: translateY(-110%) translateX(0%) !important;
  }
  .VueCarousel-navigation-next {
    right: 40px !important;
    transform: translateY(10%) translateX(0%) !important;
  }
  .VueCarousel-navigation-button svg {
    width: 30px !important;
    height: 30px !important;
    color: white;
  }
  .VueCarousel-dot {
    background-color: #aaa !important;
  }
  .VueCarousel-dot--active {
    background-color: #06bbcc !important;
  }
  .VueCarousel-dot:focus {
    border: none !important;
    outline: none !important;
  }
  /*  Carousel */
  .carousel-caption {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(9, 30, 62, 0.7);
    z-index: 1;
  }
  .slide-caption {
    margin-top: 100px;
    h1 {
      font-weight: bold;
    }
    h5 {
      color: #06bbcc !important;
    }
    .btn-primary {
      background-color: #06bbcc;
      border: 1px solid #06bbcc;
    }
    .btn-primary:hover {
      background-color: #06bbcc;
      border: 1px solid #06bbcc;
      opacity: 0.8;
    }
  }
  @media (max-width: 576px) {
    .carousel-caption h5 {
      font-size: 14px;
      font-weight: 500 !important;
    }

    .carousel-caption h1 {
      font-size: 30px;
      font-weight: 600 !important;
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 10%;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 3rem;
    height: 3rem;
  }
}</style>

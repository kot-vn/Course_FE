<template>
  <div>
    <div class="about">
       <!-- Header Start -->
    <div class="container-fluid bg-primary py-5 mb-5 page-header">
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->
      <!-- Service Start -->
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item text-center pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                  <h5 class="mb-3">Skilled Instructors</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item text-center pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                  <h5 class="mb-3">Online Classes</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item text-center pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-home text-primary mb-4"></i>
                  <h5 class="mb-3">Home Projects</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div class="service-item text-center pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-book-open text-primary mb-4"></i>
                  <h5 class="mb-3">Book Library</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Service End -->

      <!-- About Start -->
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div
              class="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style="min-height: 400px"
            >
              <div class="position-relative h-100">
                <img
                  class="img-fluid w-100 h-100 position-absolute start-0"
                  src="@/assets/img/about/about.jpg"
                  alt=""
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s ">
              <h6 class="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 class="mb-4 ">Welcome to eLEARNING</h1>
              <p class="mb-4 text-start">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p class="mb-4 text-start">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div class="row gy-2 gx-4 mb-4 text-start">
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Skilled
                    Instructors
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Online
                    Classes
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i
                    >International Certificate
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Skilled
                    Instructors
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Online
                    Classes
                  </p>
                </div>
                <div class="col-sm-6">
                  <p class="mb-0">
                    <i class="fa fa-arrow-right text-primary me-2"></i
                    >International Certificate
                  </p>
                </div>
              </div>
              <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->

     <!-- Team Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Instructors</h6>
                <h1 class="mb-5">Expert Instructors</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp" v-for="index in 4" :key="index" data-wow-delay="0.1s">
                    <div class="team-item bg-light">
                        <div class="overflow-hidden">
                            <img class="img-fluid" :src="require('@/assets/img/about/team-'+index+'.jpg')" alt="">
                        </div>
                        <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><font-awesome-icon icon="fa-brands fa-twitter"/></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><font-awesome-icon icon="fa-brands fa-facebook"/></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><font-awesome-icon icon="fa-brands fa-linkedin"/></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Team End -->
    </div>
  </div>
</template>
<script>

export default {
  name: "AboutView",
  data(){
    return {
      teams:[

      ]
    }
  }
};
</script>
<style scoped>
.page-header {
    background: linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)), url('@/assets/img/carousel/carousel-1.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
h5 {
  font-weight: bold;
}
h6 {
  font-weight: 600;
  color: #06bbcc !important;
}
.page-header-inner {
    background: rgba(15, 23, 43, .7);
}

.breadcrumb-item + .breadcrumb-item::before {
    color: var(--light);
}
/*** Service ***/
.service-item {
    background: var(--light);
    transition: .5s;
    cursor: pointer;
}

.service-item:hover {
    margin-top: -10px;
    background: var(--primary);
}

.service-item * {
    transition: .5s;
}

.service-item:hover * {
    color: var(--light) !important;
}
/*** Categories & Courses ***/
.category img,
.course-item img {
    transition: .5s;
}

.category a:hover img,
.course-item:hover img {
    transform: scale(1.1);
}


/*** Team ***/
.team-item img {
    transition: .5s;
}

.team-item:hover img {
    transform: scale(1.1);
}

</style>

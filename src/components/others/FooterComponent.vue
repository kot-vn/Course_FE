<template>
  <footer >
    <div v-if="$route.path.includes('admin')?false:true" class="container-fluid bg-dark text-light footer mt-4 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Quick Link</h4>
                    <router-link class="btn btn-link" to="/about"><font-awesome-icon icon="fa-solid fa-square-up-right" />&nbsp; About Us</router-link>
                    <a class="btn btn-link" href=""><font-awesome-icon icon="fa-solid fa-square-up-right" />&nbsp; Contact Us</a>
                    <a class="btn btn-link" href=""><font-awesome-icon icon="fa-solid fa-square-up-right" />&nbsp; Privacy Policy</a>
                    <a class="btn btn-link" href=""><font-awesome-icon icon="fa-solid fa-square-up-right" />&nbsp; Terms & Condition</a>
                    <a class="btn btn-link" href=""><font-awesome-icon icon="fa-solid fa-square-up-right" />&nbsp; FAQs & Help</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Contact</h4>
                    <p class="mb-2 text-start"><font-awesome-icon icon="fa-solid fa-location-dot" />&nbsp; 123 Street, New York, USA</p>
                    <p class="mb-2 text-start"><font-awesome-icon icon="fa-solid fa-phone" />&nbsp; +012 345 67890</p>
                    <p class="mb-2 text-start"><font-awesome-icon icon="fa-solid fa-envelope" />&nbsp; info@example.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                        <a class="btn btn-outline-light btn-social" href=""><font-awesome-icon icon="fa-brands fa-facebook" /></a>
                        <a class="btn btn-outline-light btn-social" href=""><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
                        <a class="btn btn-outline-light btn-social" href=""><font-awesome-icon icon="fa-brands fa-youtube" /></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 gallery">
                    <h4 class="text-white mb-3">Gallery</h4>
                    <div class="row g-2 pt-2">
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../../assets/img/footer_gallery/gallery_1.jpg" alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../../assets/img/footer_gallery/gallery_2.jpg"  alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../../assets/img/footer_gallery/gallery_3.jpg"  alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../../assets/img/footer_gallery/gallery_4.jpg"  alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../../assets/img/footer_gallery/gallery_5.jpg"  alt="">
                        </div>
                        <div class="col-4">
                            <img class="img-fluid bg-light p-1" src="../../assets/img/footer_gallery/gallery_6.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-3">Newsletter</h4>
                    <p>Subscribe and surprise !</p>
                    <div class="position-relative mx-auto" style="max-width: 400px;">
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 subscribe-btn">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">eLearning.com</a>, All Right Reserved.

                        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                        <!-- Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br><br> -->
                        <!-- Distributed By <a class="border-bottom" href="https://themewagon.com">ThemeWagon</a> -->
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <div class="footer-menu">
                            <router-link to="/">Home</router-link>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
/*** Footer ***/
.footer a {
  text-decoration: none;
}
.footer .btn.btn-social {
    margin-right: 5px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--light);
    font-weight: normal;
    border: 1px solid #FFFFFF;
    border-radius: 35px;
    transition: .3s;
}

.footer .btn.btn-social:hover {
    color: var(--primary);
}

.footer .btn.btn-link {
    display: block;
    margin-bottom: 5px;
    padding: 0;
    text-align: left;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: normal;
    text-transform: capitalize;
    transition: .3s;
    text-decoration: none;
}
.gallery img {
  width: 80px;
  height: 60px;
}
.footer .btn.btn-link:hover {
    letter-spacing: 1px;
    box-shadow: none;
}
.subscribe-btn {
  background-color: #06BBCC;
  border: none;
}
.subscribe-btn:hover {
  opacity: 0.8;
  background-color: #06BBCC !important;
  border: none;
}
.footer .copyright {
    padding: 25px 0;
    font-size: 15px;
    border-top: 1px solid rgba(256, 256, 256, .1);
}

.footer .copyright a {
    color: var(--light);
}

.footer .footer-menu a {
    margin-right: 15px;
    padding-right: 15px;
    border-right: 1px solid rgba(255, 255, 255, .1);
}

.footer .footer-menu a:last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: none;
}
</style>
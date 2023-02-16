<template>
  <div
    class="col-lg-3 col-md-6 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <router-link class="d-block" :to="`/course/${course.id}/learning`">
      <div class="course-item bg-light">
        <div class="position-relative overflow-hidden">
          <img class="img-fluid" :src="course.cover.file_url" alt="" />
        </div>
        <div class="text-start p-2 pb-0">
          <div class="course-title">
            <h6 class="mb-2 fw-bold text-primary">
              {{ course.name }}
            </h6>
          </div>
          <div>
            <p class="text-primary mb-2">{{ course.description }}</p>
          </div>
        </div>
        <div class="px-2">
          <div class="progress mb-2">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 25%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <span class="text-primary progress-text">18% completed</span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props:["course"]
}
</script>
<style lang="scss" scoped>
.my-courses-list {
  .course-title {
    min-height: 50px;
  }
  .progress {
    background-color: #ddd;
    height: 3px;
  }
  .progress-bar {
    background-color: var(--primary);
  }
  .progress-text {
    font-size: 14px;
    opacity: 0.9;
  }
}
</style>
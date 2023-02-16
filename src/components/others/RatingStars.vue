<template>
  <span class="text-primary">
    <small v-for="j in 5" :key="j" >
      <font-awesome-icon
        :icon="
          score - j >= 0
            ? 'fa-solid fa-star'
            : score - j > -1
            ? 'fa-solid fa-star-half-stroke'
            : 'fa-regular fa-star'
        "
    /></small>
  </span>
</template>
<script>
export default {
  props: ["score"],
};
</script>

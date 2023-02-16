<template>
    <section>
        <h5 class="fw-bold">{{ lesson.name }}</h5>
        <p>{{ lesson.description }}</p>
    </section>
</template>
<script>
export default {
props:["lesson"]
}
</script>
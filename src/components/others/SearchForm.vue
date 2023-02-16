<template>
    <form @submit.prevent="submit" class="">
       <div class="field">
        <input type="search" placeholder="Search ..." v-model="searchValue">
       </div>
       <div class="search-button">
        <button class="btn btn-primary">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
       </div>
    </form>
</template>
<script>
export default {
    data(){
        return {
            searchValue:undefined
        }
    },
    name:"SearchForm",
    methods:{
        submit(){
            this.$emit('searching',this.searchValue)
        }
    }
}
</script>
<style scoped>
form {
    display: flex;
    align-items: center;
}
input {
    line-height: 34px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    outline: none;
    border-color:var(--primary);
}
input:focus {
    outline: none;
    border-color:var(--primary);
}
.btn {
    border-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
}
</style>
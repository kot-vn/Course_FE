import axios from "axios";

export default {
    // GET CATEGORY LIST
    async getCategories(page) {
        return await axios
            .get(`api/v1/admin/categories?limit=7&page=${page}`)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
    async createCategory(data) {
        await axios
            .post(`api/v1/admin/categories`,data)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
    async updateCategory(data) {
        await axios
            .put(`api/v1/admin/categories/${data.id}`,data)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
    async deleteCategory(id) {
        await axios
            .delete(`api/v1/admin/categories/${id}`)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },

};
import axios from "axios";

export default {
    // GET CATEGORY LIST
    async getCategories(page) {
        return await axios
            .get(`api/v1/users/categories?limit=7&page=${page}`)
            .then(res => res.data)
            .catch((res) => console.log(res));
    }
};
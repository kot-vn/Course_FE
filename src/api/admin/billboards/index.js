import axios from "axios";

export default {
    // GET BILLBOARD LIST
    async getBillboards(page) {
        return await axios
            .get(`api/v1/admin/billboards?limit=7&page=${page}`)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
    async createBillboard(data) {
        await axios
            .post(`api/v1/admin/billboards`,data)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
    async updateBillboard(data) {
        await axios
            .put(`api/v1/admin/billboards/${data.id}`,data)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
    async deleteBillboard(id) {
        await axios
            .delete(`api/v1/admin/billboards/${id}`)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },

};
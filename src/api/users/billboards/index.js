import axios from "axios";

export default {
    // GET BILLBOARD LIST
    async getBillboards(page) {
        return await axios
            .get(`api/v1/users/billboards?limit=7&page=${page}`)
            .then(res => res.data)
            .catch((res) => console.log(res));
    }
};
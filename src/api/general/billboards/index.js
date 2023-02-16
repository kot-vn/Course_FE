import axios from "axios";

export default {
    async getBillboards() {
        return await axios
          .get(`http://localhost:4000/billboards`)
          .then(res =>  res.data)
          .catch((res) => console.log(res));
      }
};

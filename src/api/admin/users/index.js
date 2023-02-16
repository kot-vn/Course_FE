import axios from "axios";

export default {
  courses:1,
  // GET USERS LIST
  async getUsers(page) {
    return await axios
      .get(`api/v1/admin/users?limit=7&page=${page}`)
      .then(res => res.data)
      .catch((res) => console.log(res));
  },
  // CREATE NEW USER
  async createUser(data){
    await axios
      .post(`api/v1/admin/users`,data)
      .then(()=>false)
      .catch((res) => console.log(res));
  },
   // SHOW USER
   async showUser(id) {
    await axios
      .get(`localhost:3000/api/v1/admin/users/${id}`)
      .then(res => res.data)
      .catch((res) => console.log(res));
  },
  // UPDATE USER
  async updateUser(data) {
    await axios
      .put(`api/v1/admin/users/${data.id}`,data)
      .then(() => false)
      .catch((res) => console.log(res));
  },
  // DELETE USER
  async deleteUser(id) {
    await axios
      .delete(`api/v1/admin/users/${id}`)
      .then(() => false)
      .catch((res) => console.log(res));
  }

};

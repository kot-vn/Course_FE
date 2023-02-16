import axios from "axios";

export default {
  courses:1,
  // GET USERS LIST
  async getLessons(course_id,page) {
    return await axios
      .get(`api/v1/admin/courses/${course_id}/lessons?limit=5&page=${page}`)
      .then(res => res.data)
      .catch((res) => console.log(res));
  },
  // CREATE NEW USER
  async createLesson(course_id,data){
    await axios
      .post(`api/v1/admin/courses/${course_id}/lessons`,data)
      .then(()=>false)
      .catch((res) => console.log(res));
  },
   // SHOW USER
   async showLesson(course_id,id) {
    return await axios
      .get(`api/v1/admin/courses/${course_id}/lessons/${id}`)
      .then(res => res.data)
      .catch((res) => console.log(res));
  },
  // UPDATE USER
  async updateLesson(course_id,id,data) {
    await axios
      .put(`api/v1/admin/courses/${course_id}/lessons/${data.id}`,data)
      .then(() => false)
      .catch((res) => console.log(res));
  },
  // DELETE USER
  async deleteLesson(course_id,id) {
    await axios
      .delete(`api/v1/admin/courses/${course_id}/lessons/${id}`)
      .then(() => false)
      .catch((res) => console.log(res));
  }

};

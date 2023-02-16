import axios from "axios";

export default {
  // GET QUIZZES LIST
  async getQuizzes(course_id,page) {
    return await axios
      .get(`api/v1/admin/courses/${course_id}/quizzes?limit=5&page=${page}`)
      .then(res => res.data)
      .catch((res) => console.log(res));
  },
  // CREATE NEW QUIZ
  async createQuiz(course_id,data){
    return await axios
      .post(`api/v1/admin/courses/${course_id}/quizzes`,data)
      .then(res => res)
      .catch(error => error.response.data.message);
  },
   // SHOW QUIZ
   async showQuiz(course_id,id) {
    return await axios
      .get(`api/v1/admin/courses/${course_id}/quizzes/${id}`)
      .then(res => res.data)
      .catch((res) => console.log(res));
  },
  // UPDATE QUIZ
  async updateQuiz(course_id,id,data) {
    await axios
      .put(`api/v1/admin/courses/${course_id}/quizzes/${data.id}`,data)
      .then(() => false)
      .catch((res) => console.log(res));
  },
  // DELETE QUIZ
  async deleteQuiz(course_id,id) {
    await axios
      .delete(`api/v1/admin/courses/${course_id}/quizzes/${id}`)
      .then(() => false)
      .catch((res) => console.log(res));
  }

};

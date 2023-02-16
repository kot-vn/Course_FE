import axios from "axios";

export default {
  // GET QUESTION LIST
  async getQuestions(course_id,quiz_id,page) {
    return await axios
      .get(`api/v1/admin/courses/${course_id}/quizzes/${quiz_id}/questions?limit=5&page=${page}`)
      .then(res => res.data)
      .catch((res) => console.log(res));
  },
  // CREATE NEW QUESTION
  async createQuestion(course_id,quiz_id,data){
    await axios
      .post(`api/v1/admin/courses/${course_id}/quizzes/${quiz_id}/questions`,data)
      .then(()=>false)
      .catch((res) => console.log(res));
  },
   // SHOW QUESTION
   async showQuestion(course_id,quiz_id,id) {
    return await axios
      .get(`api/v1/admin/courses/${course_id}/quizzes/${quiz_id}/questions/${id}`)
      .then(res => res.data)
      .catch((res) => console.log(res));
  },
  // UPDATE QUESTION
  async updateQuestion(course_id,quiz_id,id,data) {
    await axios
      .put(`api/v1/admin/courses/${course_id}/quizzes/${quiz_id}/questions/${data.id}`,data)
      .then(() => false)
      .catch((res) => console.log(res));
  },
  // DELETE QUESTION
  async deleteQuestion(course_id,quiz_id,id) {
    await axios
      .delete(`api/v1/admin/courses/${course_id}/quizzes/${quiz_id}/questions/${id}`)
      .then(() => false)
      .catch((res) => console.log(res));
  }

};
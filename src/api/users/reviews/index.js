import axios from "axios";

export default {
  // Reviews
  async getReviews(id) {
    return await axios
      .get(`api/v1/users/courses/${id}/reviews`)
      .then(res => res.data)
      .catch((res) => console.log(res));
  },
  async postReview(data,id){
    axios
      .post(`api/v1/users/courses/${id}/reviews`, data)
      .then(() => false)
      .catch((res) => console.log(res));
  },
  // YourReviews
  async getYourReview(id) {
    return await axios
      .get(`api/v1/users/courses/${id}/reviews/1`)
      .then(res => res.data)
      .catch((res) => console.log(res));
  },
  async updateReview(data,id) {
    await axios
      .put(`api/v1/users/courses/${id}/reviews`, data)
      .then(() => false)
      .catch((res) => console.log(res));
  },
  deleteReview(id) {
    axios
      .get(`api/v1/users/courses/${id}/reviews`)
      .then(() => false)
      .catch((res) => console.log(res));
  },
  // GET STATISTICS
  async getStatistics(id) {
    return await axios
      .get(`api/v1/users/courses/${id}/reviews/statistics`)
      .then(res => res.data)
      .catch((res) => console.log(res));
  },
};

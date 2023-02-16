import axios from "axios";

export default {
    // SEARCH COURSES
    async searchCourses(limit,page,data) {
        return await axios
            .get(`api/v1/users/courses/search?limit=${limit}&page=${page}`,{
                params:data
            })
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
    // GET COURSES LIST
    async getCourses(limit,page) {
        return await axios
            .get(`api/v1/users/courses?limit=${limit}&page=${page}`)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
    // CREATE NEW COURSE
    async createCourse(data) {
        await axios
            .post(`api/v1/users/courses`, data)
            .then(() => false)
            .catch((res) => console.log(res));
    },
    // SHOW COURSE
    async showCourse(id) {
        return await axios
            .get(`api/v1/users/courses/${id}`)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
    // UPDATE COURSE
    async updateCourse(data,id) {
        console.log(data)
        await axios({
            method: 'put',
            url: `api/v1/users/courses/${id}`,
            data: data,
            headers: {
                'Content-Type': `multipart/form-data`,
            },
        })
            .then(() => false)
            .catch((res) => console.log(res));
    },
    // DELETE COURSE
    async deleteCourse(id) {
        await axios
            .delete(`api/v1/users/courses/${id}`)
            .then(() => false)
            .catch((res) => console.log(res));
    },
    async subscribeCourse(id) {
      await axios
          .post(`api/v1/users/courses/${id}/subscribes`)
          .then(() => false)
          .catch((res) => console.log(res));
    },
    // LESSON SUBSCRIBE
    async updateLesson(data,id) {
        await axios.put(`api/v1/users/courses/${id}/subscribes/1`,{
            lessons_learned:data
        })
            .then(() => false)
            .catch((res) => console.log(res));
    },
    // LESSON INCREASE VIEW
    async updateLessonView(id) {
        await axios.put(`api/v1/users/lessons/${id}/view`)
            .then(() => false)
            .catch((res) => console.log(res));
    },  
};
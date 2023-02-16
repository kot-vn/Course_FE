import axios from "axios";

export default {
    // LOAD QUIZ
    async getQuiz(course_id,quiz_id) {
        return await axios
            .get(`api/v1/admin/courses/${course_id}/quizzes/${quiz_id}`)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
    // SUBMIT QUIZ
    async startQuiz(course_id,quiz_id,data) {
        return await axios
            .post(`api/v1/users/courses/${course_id}/quizzes/${quiz_id}/submit`)
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
    async submitQuiz(course_id,quiz_id,submission_id,data) {
        return await axios
            .put(`api/v1/users/courses/${course_id}/quizzes/${quiz_id}/submit`,{
                solutions:data,
                submission_id:submission_id
            })
            .then(res => res.data)
            .catch((res) => console.log(res));
    },
}
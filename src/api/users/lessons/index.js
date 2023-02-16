import axios from "axios";

export default {
    // Lessons
    async getLessons() {
        return await axios
            .get(`api/v1/admin/courses/17`)
            .then(res => res.data.lessons)
            .catch((res) => console.log(res));
    },
    async updateLesson(data, id) {
        await axios
            .put(`http://localhost:4000/lessons/${id}`, data)
            .then(() => false)
            .catch((res) => console.log(res));
    },
}
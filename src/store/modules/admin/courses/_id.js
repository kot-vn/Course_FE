import axios from "axios";

export default {
  namespaced: true,
  state: {
    courseData: false,
  },
  mutations: {
    setData(state, data) {
      state.courseData = data;
    },
  },
  actions: {
    // COURSES
    getCourse({ commit}, id) {
      axios
        .get(`/api/v1/admin/courses/${id}`)
        .then((res) => commit("setData", res.data))
        .catch((res) => console.log(res));
    },
    updateCourse({ dispatch }, [id, data]) {
      axios
        .put(`/api/v1/admin/courses/${id}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => dispatch("getCourse",id))
        .catch((res) => console.log(res));
    },
  },
};

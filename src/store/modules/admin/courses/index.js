import axios from "axios";

export default {
  namespaced: true,
  state: {
    coursesData: [],
  },
  mutations: {
    setData(state, data) {
      state.coursesData = data;
    },
  },
  actions: {
   createCourse({ dispatch }, data) {
    axios
        .post("/api/v1/admin/courses", data)
        .then(() => {
          dispatch("getCourses");
        })
        .catch((res) => console.log(res));
    },
    getCourses({ commit, state }) {
      axios
        .get("/api/v1/admin/courses")
        .then((res) => commit("setData", res.data))
        .catch((res) => console.log(res));
    },
    deleteCourse({ dispatch }, id) {
      axios
        .delete(`/api/v1/admin/courses/${id}`)
        .then(() => dispatch("getCourses"))
        .catch((res) => console.log(res));
    },
  },
};

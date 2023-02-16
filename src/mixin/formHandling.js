export default {
    methods:{
      clearForm(data) {
        Object.keys(data).forEach(v => data[v] = "")
    }
  }
}
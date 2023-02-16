export default {
    methods:{
      toDash(str) {
        return str.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    },
      toUrl(str){
          str = str.trim().toLowerCase();
          str = str.replace(/[\s\/]/g,'-'); //eslint-disable-line

          return str;  
      }
      ,toOrdinal(num){
        return num > 9 ? num : "0" + num
      }
  }
}
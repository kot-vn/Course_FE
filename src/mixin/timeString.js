export default {
    methods:{
      secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? "0"+h+":" : "";
        var mDisplay = m > 0 ? m > 9 ? m + ":" : "0"+ m +":" : "";
        var sDisplay = s > 0 ? s > 9 ? s : "0"+ s : "00";
        return hDisplay + mDisplay + sDisplay; 
    },
    secondsToHours(num){
      return (num/3600).toFixed(2)
    },
    primaryDate(str){
      str = str.split("T")[0]
      const [year, month, day] = str.split('-');
      return [month, day, year].join('/')
    }
  }
}
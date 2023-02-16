// eslint-disable-next-line no-unused-vars
function startTimer(duration,obj) {
  var timer = duration,
minutes,
seconds;
  minutes = parseInt(timer / 60, 10);
  seconds = parseInt(timer % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  obj.countDown = minutes + ":" + seconds;
  --timer
  let interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    obj.countDown = minutes + ":" + seconds;
    --timer
  }, 1000);
  return interval
}

export { startTimer };

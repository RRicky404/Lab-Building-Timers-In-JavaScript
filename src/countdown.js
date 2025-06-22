function countdownTimer(startTime, interval) {
  const timerId = setInterval(() => {
    console.log(startTime);
    startTime--;

    if (startTime <= 0) {
      clearInterval(timerId); // <- use the real global clearInterval
    }
  }, interval);

  return timerId;
}

module.exports = { countdownTimer };

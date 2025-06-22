function delayedReminder(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve("Reminder logged");
    }, delay);
  });
}

module.exports = { delayedReminder };
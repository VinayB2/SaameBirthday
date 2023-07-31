const specificDate = new Date("7/1/2003");
const elapsedTimeParagraph = document.getElementById("elapsed-time");
setInterval(() => {
const now = new Date();
const oneMinute = 60 * 1000;
const oneHour = 60 * oneMinute;
const elapsedTime = now - specificDate;
const oneDay = 24 * oneHour;
const oneMonth = oneDay * 30.44;
const oneYear = oneDay * 365.25;
const years = Math.floor(elapsedTime / oneYear);
const months = Math.floor((elapsedTime % oneYear) / oneMonth);
const days = Math.floor((elapsedTime % oneMonth) / oneDay);
const hours = Math.floor((elapsedTime % oneDay) / oneHour);
const minutes = Math.floor((elapsedTime % oneHour) / oneMinute);
const seconds = Math.floor((elapsedTime % oneMinute) / 1000);
const elapsedTimeString = `It's been ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds since saame's birth`;
elapsedTimeParagraph.textContent = elapsedTimeString;
}, 1000);

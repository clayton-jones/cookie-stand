'use-strict';

var dateEl = document.getElementById('date');

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var today = new Date();
console.log('today: ', today);
console.log('Proof of life');
console.log(`${days[today.getDate()]}`);
dateEl.textContent = `${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}`;


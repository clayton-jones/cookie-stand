'use-strict';

// global array of hours shared by all locations
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allStores = [];

var hourlyTotals = [];

var allStoresTotalSold = 0;


// stores one store element that each object can use to append to
var storeElement = document.getElementById('stores');

// object constructor for stores
function Store(name, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerCustomer) {
  this.name = name;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.customersEachHourArray = [];
  this.cookiesPerHourArray = [];
  this.totalCookiesForTheDay = 0;
  allStores.push(this);
  // this.randomCustomers();
  // this.calculateCookies();
  this.render();
}

// ============= global functions ==============

// random number function to be used by objects
function randomNumber(min, max) {
  // console.log('min: ', min);
  // console.log('max', max);
  var num = Math.floor(Math.random() * (max + 1 - min)) + min;
  // console.log('randomNum: ', num);
  return num;
}

// creates header
var makeHeader = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  storeElement.appendChild(trEl);
};

// creates footer
var makeFooter = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals:';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    var cookie = 0;
    thEl = document.createElement('th');
    for (var j = 0; j < allStores.length; j++) {
      cookie += allStores[j].cookiesPerHourArray[i];
    }
    thEl.textContent = cookie;
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = `Franchise total: ${allStoresTotalSold}`;

  trEl.appendChild(thEl);
  storeElement.appendChild(trEl);
};

// ============= end global functions ==============



// ============= prototypes ==============

Store.prototype.randomCustomers = function() {
  for (var i = 0; i < hours.length; i++) {
    var customers = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
    // console.log(`${this.name}: ${customers}`);
    // console.log('minCust: ', this.minCustomersEachHour);
    // console.log('maxCust: ', this.maxCustomersEachHour)
    this.customersEachHourArray.push(customers);
    // hourlyTotals.push(0);
  }
};

Store.prototype.calculateCookies = function() {
  for (var i = 0; i < this.customersEachHourArray.length; i++) {
    var cookies = Math.ceil(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
    this.cookiesPerHourArray.push(cookies);
    this.totalCookiesForTheDay += cookies;
    hourlyTotals[i] += cookies;
    allStoresTotalSold += cookies;

  }
};

Store.prototype.makeRow = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  for (var j = 0; j < hours.length; j++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHourArray[j];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesForTheDay;
  // allStoresTotalSold += this.totalCookiesForTheDay;
  trEl.appendChild(tdEl);
  storeElement.appendChild(trEl);
};

Store.prototype.render = function() {
  this.randomCustomers();
  this.calculateCookies();
  this.makeRow();
};

// ============= end prototypes ==============


// calling functions to create the table
makeHeader();

// creating store objects
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 5, 16, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.7);

// ============= event listeners ==============

var storeForm = document.getElementById('store-form');
storeForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var storeName = event.target.inputStoreName.value;
  var minCust = parseInt(event.target.inputMinCust.value);
  var maxCust = parseInt(event.target.inputMaxCust.value);
  var avgCookies = parseInt(event.target.inputAvgCookiesPerCust.value);

  // console.log('storeName: ', storeName);
  // console.log('minCust: ', minCust);
  // console.log('maxCust: ', maxCust);
  // console.log('avgCookies: ', avgCookies);
  new Store(storeName, minCust, maxCust, avgCookies);
  // console.log('userStore: ', userStore);
  // userStore.render();
  event.target.inputStoreName.value = null;
  event.target.inputMinCust.value = null;
  event.target.inputMaxCust.value = null;
  event.target.inputAvgCookiesPerCust.value = null;
  makeFooter();
}

// ============= end event listeners ==============

// for (var i = 0; i < allStores.length; i++) {
//   allStores[i].render();
// }
// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
makeFooter();

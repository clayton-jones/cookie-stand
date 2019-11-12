'use-strict';

// store element location
// var firstAndPikeElement = document.getElementById('firstAndPike');
// console.log(firstAndPikeElement);
// create element
// var liEl = document.createElement('li');
// // give element content
// liEl.textContent = 'proof of life';
// // append to the DOM
// firstAndPikeElement.appendChild(liEl);

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var firstAndPikeShop = {
//   name: 'First and Pike',
//   minCostomersEachHour: 23,
//   maxCustomersEachHour: 65,
//   averageCookiesPerCustomer: 6.3,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   totalCookiesForTheDay: 0,

//   randomNumber: function(min, max) {
//     return Math.floor(Math.random() * (max + 1 - min)) + min;
//   },

//   render: function() {
//     for ( var i = 0; i < hours.length; i++ ) {
//       // create element
//       var liEl = document.createElement('li');
//       // calculate number of customers for the hour, then add to array
//       var customers = this.randomNumber(this.minCostomersEachHour, this.maxCustomersEachHour);
//       this.customersEachHour.push(customers);
//       // calculate number of cookies for the hour, then add to array
//       var cookies = Math.round(customers * this.averageCookiesPerCustomer);
//       this.cookiesEachHour.push(cookies);
//       // give element content
//       liEl.textContent = `${hours[i]}: ${cookies} cookies`;
//       // append to DOM
//       firstAndPikeElement.appendChild(liEl);
//       this.totalCookiesForTheDay += cookies;
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalCookiesForTheDay}`
//     firstAndPikeElement.appendChild(liEl);
//   }
// };

// firstAndPikeShop.render();

// global random number function to be used by objects
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// store one store element that each object can use
// store seattle element location
var storeElement = document.getElementById('stores');

var seattle = {
  name: 'Seattle',
  minCostomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  // loops through hours array and calculates random customers based on store min and max
  randomCustomers: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = randomNumber(this.minCostomersEachHour, this.maxCustomersEachHour);
      this.customersEachHour.push(customers);
    }
  },

  // loops through customerEachHour array and calculates cookies, populates cookiesEachHour array
  calculateCookies: function() {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookies = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      this.cookiesEachHour.push(cookies);
      this.totalCookiesForTheDay += cookies;
    }
  },

  // use arrays from above to get customers and cookies
  render: function() {
    this.randomCustomers();
    this.calculateCookies();
    var h2El = document.createElement('h2');
    h2El.textContent = this.name;
    storeElement.appendChild(h2El);
    var ulEl = document.createElement('ul');
    for ( var i = 0; i < hours.length; i++ ) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay}`;
    ulEl.appendChild(liEl);
    storeElement.appendChild(ulEl);
  }
};
seattle.render();


var tokyo = {
  name: 'Tokyo',
  minCostomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  // loops through hours array and calculates random customers based on store min and max
  randomCustomers: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = randomNumber(this.minCostomersEachHour, this.maxCustomersEachHour);
      this.customersEachHour.push(customers);
    }
  },

  // loops through customerEachHour array and calculates cookies, populates cookiesEachHour array
  calculateCookies: function() {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookies = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      this.cookiesEachHour.push(cookies);
      this.totalCookiesForTheDay += cookies;
    }
  },

  // use arrays from above to get customers and cookies
  render: function() {
    this.randomCustomers();
    this.calculateCookies();
    var h2El = document.createElement('h2');
    h2El.textContent = this.name;
    storeElement.appendChild(h2El);
    var ulEl = document.createElement('ul');
    for ( var i = 0; i < hours.length; i++ ) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay}`;
    ulEl.appendChild(liEl);
    storeElement.appendChild(ulEl);
  }
};
tokyo.render();


var dubai = {
  name: 'Dubai',
  minCostomersEachHour: 11,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  // loops through hours array and calculates random customers based on store min and max
  randomCustomers: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = randomNumber(this.minCostomersEachHour, this.maxCustomersEachHour);
      this.customersEachHour.push(customers);
    }
  },

  // loops through customerEachHour array and calculates cookies, populates cookiesEachHour array
  calculateCookies: function() {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookies = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      this.cookiesEachHour.push(cookies);
      this.totalCookiesForTheDay += cookies;
    }
  },

  // use arrays from above to get customers and cookies
  render: function() {
    this.randomCustomers();
    this.calculateCookies();
    var h2El = document.createElement('h2');
    h2El.textContent = this.name;
    storeElement.appendChild(h2El);
    var ulEl = document.createElement('ul');
    for ( var i = 0; i < hours.length; i++ ) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay}`;
    ulEl.appendChild(liEl);
    storeElement.appendChild(ulEl);
  }
};
dubai.render();

var paris = {
  name: 'Paris',
  minCostomersEachHour: 20,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  // loops through hours array and calculates random customers based on store min and max
  randomCustomers: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = randomNumber(this.minCostomersEachHour, this.maxCustomersEachHour);
      this.customersEachHour.push(customers);
    }
  },

  // loops through customerEachHour array and calculates cookies, populates cookiesEachHour array
  calculateCookies: function() {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookies = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      this.cookiesEachHour.push(cookies);
      this.totalCookiesForTheDay += cookies;
    }
  },

  // use arrays from above to get customers and cookies
  render: function() {
    this.randomCustomers();
    this.calculateCookies();
    var h2El = document.createElement('h2');
    h2El.textContent = this.name;
    storeElement.appendChild(h2El);
    var ulEl = document.createElement('ul');
    for ( var i = 0; i < hours.length; i++ ) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay}`;
    ulEl.appendChild(liEl);
    storeElement.appendChild(ulEl);
  }
};
paris.render();


var lima = {
  name: 'Lima',
  minCostomersEachHour: 2,
  maxCustomersEachHour: 16,
  averageCookiesPerCustomer: 4.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  // loops through hours array and calculates random customers based on store min and max
  randomCustomers: function() {
    for (var i = 0; i < hours.length; i++) {
      var customers = randomNumber(this.minCostomersEachHour, this.maxCustomersEachHour);
      this.customersEachHour.push(customers);
    }
  },

  // loops through customerEachHour array and calculates cookies, populates cookiesEachHour array
  calculateCookies: function() {
    for (var i = 0; i < this.customersEachHour.length; i++) {
      var cookies = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      this.cookiesEachHour.push(cookies);
      this.totalCookiesForTheDay += cookies;
    }
  },

  // use arrays from above to get customers and cookies
  render: function() {
    this.randomCustomers();
    this.calculateCookies();
    var h2El = document.createElement('h2');
    h2El.textContent = this.name;
    storeElement.appendChild(h2El);
    var ulEl = document.createElement('ul');
    for ( var i = 0; i < hours.length; i++ ) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay}`;
    ulEl.appendChild(liEl);
    storeElement.appendChild(ulEl);
  }
};
lima.render();

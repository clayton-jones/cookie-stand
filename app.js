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

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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

// store seattle element location
var seattleElement = document.getElementById('seattle');

var seattle = {
  minCostomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  },

  randomCustomers: function() {
    var customers = this.randomNumber(this.minCostomersEachHour, this.maxCustomersEachHour);
    this.customersEachHour.push(customers);
    return customers;
  },

  calculateCookies: function(customers) {
    var cookies = Math.round(customers * this.averageCookiesPerCustomer);
    this.cookiesEachHour.push(cookies);
    this.totalCookiesForTheDay += cookies;
    return cookies;
  },

  render: function() {
    for ( var i = 0; i < hours.length; i++ ) {
      // create element
      var liEl = document.createElement('li');
      // calculate number of customers for the hour, then add to array
      var customers = this.randomCustomers();
      // calculate number of cookies for the hour, then add to array
      var cookies = this.calculateCookies(customers);
      // give element content
      liEl.textContent = `${hours[i]}: ${cookies} cookies`;
      // append to DOM
      seattleElement.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay}`;
    seattleElement.appendChild(liEl);
  }
};
seattle.render();

// store tokyo element location
var tokyoElement = document.getElementById('tokyo');

var tokyo = {
  minCostomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  },

  randomCustomers: function() {
    var customers = this.randomNumber(this.minCostomersEachHour, this.maxCustomersEachHour);
    this.customersEachHour.push(customers);
    return customers;
  },

  calculateCookies: function(customers) {
    var cookies = Math.round(customers * this.averageCookiesPerCustomer);
    this.cookiesEachHour.push(cookies);
    this.totalCookiesForTheDay += cookies;
    return cookies;
  },

  render: function() {
    for ( var i = 0; i < hours.length; i++ ) {
      // create element
      var liEl = document.createElement('li');
      // calculate number of customers for the hour, then add to array
      var customers = this.randomCustomers();
      // calculate number of cookies for the hour, then add to array
      var cookies = this.calculateCookies(customers);
      // give element content
      liEl.textContent = `${hours[i]}: ${cookies} cookies`;
      // append to DOM
      tokyoElement.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay}`;
    tokyoElement.appendChild(liEl);
  }
};
tokyo.render();

// save dubai element location
var dubaiElement = document.getElementById('dubai');

var dubai = {
  minCostomersEachHour: 11,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  },

  randomCustomers: function() {
    var customers = this.randomNumber(this.minCostomersEachHour, this.maxCustomersEachHour);
    this.customersEachHour.push(customers);
    return customers;
  },

  calculateCookies: function(customers) {
    var cookies = Math.round(customers * this.averageCookiesPerCustomer);
    this.cookiesEachHour.push(cookies);
    this.totalCookiesForTheDay += cookies;
    return cookies;
  },

  render: function() {
    for ( var i = 0; i < hours.length; i++ ) {
      // create element
      var liEl = document.createElement('li');
      // calculate number of customers for the hour, then add to array
      var customers = this.randomCustomers();
      // calculate number of cookies for the hour, then add to array
      var cookies = this.calculateCookies(customers);
      // give element content
      liEl.textContent = `${hours[i]}: ${cookies} cookies`;
      // append to DOM
      dubaiElement.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay}`;
    dubaiElement.appendChild(liEl);
  }
};
dubai.render();

// store paris element location
var parisElement = document.getElementById('paris');

var paris = {
  minCostomersEachHour: 20,
  maxCustomersEachHour: 38,
  averageCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  },

  randomCustomers: function() {
    var customers = this.randomNumber(this.minCostomersEachHour, this.maxCustomersEachHour);
    this.customersEachHour.push(customers);
    return customers;
  },

  calculateCookies: function(customers) {
    var cookies = Math.round(customers * this.averageCookiesPerCustomer);
    this.cookiesEachHour.push(cookies);
    this.totalCookiesForTheDay += cookies;
    return cookies;
  },

  render: function() {
    for ( var i = 0; i < hours.length; i++ ) {
      // create element
      var liEl = document.createElement('li');
      // calculate number of customers for the hour, then add to array
      var customers = this.randomCustomers();
      // calculate number of cookies for the hour, then add to array
      var cookies = this.calculateCookies(customers);
      // give element content
      liEl.textContent = `${hours[i]}: ${cookies} cookies`;
      // append to DOM
      parisElement.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay}`;
    parisElement.appendChild(liEl);
  }
};
paris.render();

var limaElement = document.getElementById('lima');

var lima = {
  minCostomersEachHour: 2,
  maxCustomersEachHour: 16,
  averageCookiesPerCustomer: 4.7,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  },

  randomCustomers: function() {
    var customers = this.randomNumber(this.minCostomersEachHour, this.maxCustomersEachHour);
    this.customersEachHour.push(customers);
    return customers;
  },

  calculateCookies: function(customers) {
    var cookies = Math.round(customers * this.averageCookiesPerCustomer);
    this.cookiesEachHour.push(cookies);
    this.totalCookiesForTheDay += cookies;
    return cookies;
  },

  render: function() {
    for ( var i = 0; i < hours.length; i++ ) {
      // create element
      var liEl = document.createElement('li');
      // calculate number of customers for the hour, then add to array
      var customers = this.randomCustomers();
      // calculate number of cookies for the hour, then add to array
      var cookies = this.calculateCookies(customers);
      // give element content
      liEl.textContent = `${hours[i]}: ${cookies} cookies`;
      // append to DOM
      limaElement.appendChild(liEl);
      // this.totalCookiesForTheDay += cookies;
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalCookiesForTheDay}`;
    limaElement.appendChild(liEl);
  }
};
lima.render();

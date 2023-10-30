/*
   filename: advanced_web_app.js
   content: This code demonstrates an advanced web application that includes different features such as authentication, database interaction, data manipulation, and event handling. It also showcases asynchronous programming using Promises and includes multiple modules for better organization and maintainability.
*/

// Module: Authentication
const Authentication = (function() {
  let isLoggedIn = false;
  
  function login(username, password) {
    return new Promise((resolve, reject) => {
      // Simulate authentication API call
      setTimeout(() => {
        isLoggedIn = true;
        resolve('User logged in successfully.');
      }, 2000);
    });
  }
  
  function logout() {
    return new Promise((resolve, reject) => {
      // Simulate logout API call
      setTimeout(() => {
        isLoggedIn = false;
        resolve('User logged out successfully.');
      }, 1000);
    });
  }
  
  function isAuthenticated() {
    return isLoggedIn;
  }
  
  return {
    login,
    logout,
    isAuthenticated
  };
})();

// Module: Database
const Database = (function() {
  let data = [];
  
  function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate fetching data from database
      setTimeout(() => {
        data = ['John', 'Jane', 'Bob', 'Alice'];
        resolve('Data fetched successfully.');
      }, 1500);
    });
  }
  
  function saveData(newData) {
    return new Promise((resolve, reject) => {
      // Simulate saving data to database
      setTimeout(() => {
        data = newData;
        resolve('Data saved successfully.');
      }, 2000);
    });
  }
  
  function getData() {
    return data;
  }
  
  return {
    fetchData,
    saveData,
    getData
  };
})();

// Module: UI
const UI = (function() {
  function showLoadingIndicator() {
    console.log('Loading...');
  }
  
  function hideLoadingIndicator() {
    console.log('Loading complete.');
  }
  
  function showErrorMessage(message) {
    console.error(message);
  }
  
  function showSuccessMessage(message) {
    console.log(message);
  }
  
  return {
    showLoadingIndicator,
    hideLoadingIndicator,
    showErrorMessage,
    showSuccessMessage
  };
})();

// Main Application
const App = (function() {
  function init() {
    UI.showLoadingIndicator();
    
    Database.fetchData()
      .then((message) => {
        UI.hideLoadingIndicator();
        UI.showSuccessMessage(message);
        
        if (Authentication.isAuthenticated()) {
          displayUsers(Database.getData());
        } else {
          login();
        }
      })
      .catch((error) => {
        UI.hideLoadingIndicator();
        UI.showErrorMessage('Error fetching data from database.');
      });
  }
  
  function login() {
    Authentication.login('admin', 'password')
      .then((message) => {
        UI.showSuccessMessage(message);
        displayUsers(Database.getData());
      })
      .catch((error) => {
        UI.showErrorMessage('Login failed.');
      });
  }
  
  function logout() {
    Authentication.logout()
      .then((message) => {
        UI.showSuccessMessage(message);
      })
      .catch((error) => {
        UI.showErrorMessage('Logout failed.');
      });
  }
  
  function displayUsers(users) {
    UI.showSuccessMessage('Users:');
    users.forEach((user) => {
      console.log(user);
    });
  }
  
  return {
    init,
    login,
    logout
  };
})();

App.init();

myStorage = window.localStorage;

const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const username = document.querySelector('#enterusername');
const password = document.querySelector('#enteruserpassword');
const submitBtn = document.querySelector('#submitdata');


const h1 = document.querySelector('h1');


/*function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
}
else {
  // Too bad, no localStorage for us
}
*/

// Stop the form from submitting when a button is pressed
form.addEventListener('submitdata', function(e) {
  e.preventDefault();
});

// run function when the 'Say hello' button is clicked
submitBtn.addEventListener('click', function() { 
	  // store the entered name in web storage
	localStorage.setItem( 'username', username.value);
	localStorage.setItem('password', password.value);
	  // run nameDisplayCheck() to sort out displaying the
	  // personalized greetings and updating the form display
	  nameDisplayCheck();
});


function nameDisplayCheck() {
  // check whether the 'name' data item is stored in web Storage
  if(localStorage.getItem('username')) {
    // If it is, display personalized greeting
    let name = localStorage.getItem('username');
    h1.textContent = 'Welcome, ' + username.value;
    
   
  } else {
    
    h1.textContent = 'Welcome to our website ';
    
  }
}

document.body.onload = nameDisplayCheck;



const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const username = document.querySelector('#enterusername');
const password = document.querySelector('#enteruserpassword');
const submitBtn = document.querySelector('#submitdata');

var savedData_username = localStorage.getItem('username');
var savedData_pass = localStorage.getItem('password');

const h1 = document.querySelector('h1');


// Stop the form from submitting when a button is pressed
form.addEventListener('submitdata', function(e) {
  e.preventDefault();
});

// run function when the 'submit' button is clicked
submitBtn.addEventListener('click', function() { 
	  // store the entered name in web storage
	localStorage.setItem('username', username.value);
	localStorage.setItem('password', password.value);
	  // run nameDisplayCheck() to sort out displaying the
	  // personalized greetings and updating the form display
	  nameDisplayCheck();

    alert ("registration successfull"); //alerts the user of the save
    setTimeout(() => { window.location = "login.html"; }, 2000); // Delays the Redirect
});


function nameDisplayCheck() {
  // check whether the user data item is stored in web Storage
  if(localStorage.getItem('username')) {
    let name = localStorage.getItem('username');
    let pass = localStorage.getItem('password');
    h1.textContent = 'Welcome, ' + name;
    
   
  } else {
    
    h1.textContent = 'Welcome to our website ';
    
  }
}

document.body.onload = nameDisplayCheck;
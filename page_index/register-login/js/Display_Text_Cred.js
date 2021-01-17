var User_text = document.getElementById('Username_Cred');
var Pass_text = document.getElementById('Password_Cred');


var savedData_username = localStorage.getItem('username');
var savedData_pass = localStorage.getItem('password');

 User_text.innerHTML = 'Username :' + savedData_username ;
 Pass_text.innerHTML = 'Password :' + savedData_pass ;




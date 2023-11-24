$(document).ready(function () {
	var url = window.location.href
	console.log(url);
	let id="Enter_ID"
	let pass="Enter_Pass"
	if( url == 'https://lms.iiitkottayam.ac.in/'){
		document.getElementsByClassName('btn-login').click();
		document.getElementsByClassName('btn btn-login-top dropdown-toggle').click();
		document.getElementById('username').value=id; //Enter your ID here
		document.getElementById('password').value=pass; //Enter your password here
		document.getElementsByClassName('btn btn-primary').click();}

	if(url == 'https://lms.iiitkottayam.ac.in/login/index.php' || url == 'https://lms.iiitkottayam.ac.in/login/index.php/#') {
		//replace your ID below
		document.getElementById('username').value = id;
		
		//replace your password below
		document.getElementById('password').value = pass;
		document.getElementById('loginbtn').click();
	}
})

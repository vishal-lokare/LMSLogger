$(document).ready(function () {
	var url = window.location.href
	console.log(url);

	if( url == 'https://lms.iiitkottayam.ac.in/'){
		document.getElementsByClassName('btn-login')[0].click();
		document.getElementsByClassName('btn btn-login-top dropdown-toggle')[0].click();
		document.getElementById('username').value="ID_HERE"; //Enter your ID here
		document.getElementById('password').value="PASS_HERE"; //Enter your password here
		document.getElementsByClassName('btn btn-primary')[0].click();}

	if(url == 'https://lms.iiitkottayam.ac.in/login/index.php' || url == 'https://lms.iiitkottayam.ac.in/login/index.php/#') {
		//replace your ID below
		document.getElementById('username').value = "replace_ID";
		
		//replace your password below
		document.getElementById('password').value = "replace_password";
		document.getElementsByClassName('btn btn-primary btn-block mt-3')[0].click();
	}
})

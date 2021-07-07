$(document).ready(function () {
	var url = window.location.href
	console.log(url);

	if( url == 'https://lms.iiitkottayam.ac.in/')
		document.getElementsByClassName('btn-login')[0].click();

	if(url == 'https://lms.iiitkottayam.ac.in/login/index.php' || url == 'https://lms.iiitkottayam.ac.in/login/index.php/#') {
		//replace your ID below
		document.getElementById('username').value = "replace_ID";
		
		//replace your password below
		document.getElementById('password').value = "replace_password";
		document.getElementsByClassName('btn btn-primary btn-block mt-3')[0].click();
	}
})

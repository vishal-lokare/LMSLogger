$(document).ready(function () {
	var url = window.location.href
	console.log(url);
	let id="ENTER_ID"
	let pass="ENTER_Password"
	if( url == 'https://lms.iiitkottayam.ac.in/'){
		document.getElementById('username').value=id; 
		document.getElementById('password').value=pass; 
		document.getElementsByClassName("btn btn-primary")[0].click();
	}

	if(url == 'https://lms.iiitkottayam.ac.in/login/index.php' || url == 'https://lms.iiitkottayam.ac.in/login/index.php/#') {
		document.getElementById('username').value = id;
		document.getElementById('password').value = pass;
		document.getElementById('loginbtn').click();
	}
})

$(document).ready(function () {
	var url = window.location.href
	console.log(url);
	let id="ID_HERE"
	let pass="PASS_HERE"
	if( url == 'https://lms.iiitkottayam.ac.in/'){
		document.getElementById('username').value=id; 
		document.getElementById('password').value=pass; 
		document.getElementsByClassName("btn btn-primary")[0].click();
	}
	if(url=='https://lmsug23.iiitkottayam.ac.in/'){
		document.getElementsByClassName("btn-login d-inline-block")[0].click();

	}

	if(url == 'https://lms.iiitkottayam.ac.in/login/index.php' || url == 'https://lms.iiitkottayam.ac.in/login/index.php/#'||url=='https://lmsug23.iiitkottayam.ac.in/login/index.php') {
		document.getElementById('username').value = id;
		document.getElementById('password').value = pass;
		document.getElementById('loginbtn').click();
	}
})


function func(){
	var email = document.getElementById('l1').value
	var pass = document.getElementById('l2').value
	if(email == 'shree@gmail.com' && pass == '123'){
		alert("successful")
		window.location = "./components/home.php"
	}
	else if(email == 'uttam@gmail.com'&& pass == '123'){
		alert("successful")
		window.location = "./components/home.php"
	}
	else if(email == 'admin@gmail.com'&& pass == 'admin@123'){
		alert("successful")
		window.location = "./components/home.php"
	}
	else{
		alert("invalid entry")
	}
}
	
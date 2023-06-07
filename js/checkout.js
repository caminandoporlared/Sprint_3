 // Exercise 6
	
	 

 function validate() {

	
	// Get the input fields
	
 	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fLastN = document.getElementById("fLastN");
	let fAddress = document.getElementById("fAddress");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");	
	let fSubmit = document.getElementById("form") 
		
	let error = 0;
	
	

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorLastN = document.getElementById("errorLastN");
	let errorAddress = document.getElementById("errorAddress");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");



	// Validate fields entered by the user: name, phone, password, and email
	

	if(fName.value == "" || !fName.value.match(/^[a-zA-Z]{3,}$/)){
		
		errorName.classList.add('is-invalid');
		errorName.style.display = 'block';				
		error++;

	}
	else {
		errorAddress.style.display = 'none';
	}
	
  
	if(fEmail.value == "" || !fEmail.value.match (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){	

		errorEmail.classList.add('is-invalid');
		errorEmail.style.display = 'block';
		error++;
	}
	else {
		errorEmail.style.display = 'none';
	}

	if(fAddress.value == "" || !fAddress.value.match(/^[a-zA-Z]{3,}$/)){
		
		errorAddress.classList.add('is-invalid');
		errorAddress.style.display = 'block';				
		error++;

	}
	else {
		errorAddress.style.display = 'none';
	}

	if(fLastN.value == "" || !fLastN.value.match(/^[a-zA-Z]{3,}$/)){
		
		errorLastN.classList.add('is-invalid');
		errorLastN.style.display = 'block'; 
		error++;
	}
	else {
		errorLastN.style.display = 'none';
	}

	if(fPassword.value == "" || !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{4,8}$/)) {
		
		errorPassword.classList.add('is-invalid');
		errorPassword.style.display = 'block';				
		error++;
	}
	else {
		errorPassword.style.display = 'none';
	}

	if(fPhone.value == "" || fPhone.value.length < 9 || !fPhone.value.match(/^[0-9]{0,15}$/)) {
		
		errorPhone.classList.add('is-invalid');
		errorPhone.style.display = 'block';
		error++;
	}
	else {
		errorPhone.style.display = 'none';
	}

	if(error>0){
		return false;
	}
	else{
		
		alert("OK");
		return true;
	}
	

	
	}

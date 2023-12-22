function validEmail(str) {
  //your JS code here.
	 // Regular expression pattern for validating email addresses
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Check if the string matches the pattern
  return pattern.test(str);
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));

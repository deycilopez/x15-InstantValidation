function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //Show message that there is an error with the username...
  if (userEntered.length < 6) {
  document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}
else if(userEntered.indexOf (' ')>0) {
  document.getElementById("usernameError").innerHTML="Username can not contain spaces.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
}
  if (userEntered.length >=6){
  document.getElementById("usernameGroup").classList.add("has-success");
}

  if (passEntered.math(/password/i)) {
  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Passsword can not be the word 'password'.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
  else if (passEntered == userEntered) {
    //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Passsword must be different from username.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
  else if (passEntered.length <6) {
  document.getElementById("passwordError").innerHTML="Password must be at least 6 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
  if (passEntered.length >20 {
  document.getElementById("passwordError").innerHTML="Password must be no more than 20 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
  else {
  document.getElementById("passwordGroup").classList.add("has-success");
}
}

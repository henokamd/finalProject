let myForm = document.forms["myForm"];
// console.log(myForm.Fname.value);
myForm.onsubmit = function(event) {
  event.preventDefault();
  console.log(myForm.Fname.value);
  console.log(myForm.Lname.value);
  console.log(myForm.email.value);
  console.log(myForm.pass.value);
  console.log(myForm.pass2.value);
  console.log(myForm.check1.checked);

}

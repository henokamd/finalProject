// const myForm = document.getElementById('myForm');

// onSub = function (event) {
//     event.preventDefault();
//     //console.log("Successfully submitted");
    
//     //Ajax request for the log in
//    const request = new XMLHttpRequest();
//    request.open("post", "login.php");
//    request.onload = function () {

//        console.log(request.responseText);

//    }
//   request.send(new FormData(myForm));
    
// }

// myForm.addEventListener('submit', onSub);
// // console.log(myFrm);


// function dsply(event){
// //let reset = document.getElementById('pwRes');
// let lbl = document.getElementById('pwLbl');
// let txt = document.getElementById('pwRst');
// let btR = document.getElementById('btnRst');

// if (event) {
//     lbl.style.display = block;
//     txt.style.display = block;
//     reset.style.display = none;
// }
// else {
//     lbl.style.display = none;
//     txt.style.display = none;
//     reset.style.display = block;
// }
//    event.addEventListener('click', dsply);
// }

// AJax request for the login 
let email = document.getElementById('email'); //User name
let pass = document.getElementById('pwd');  //Password
let eventTarget = document.getElementById('pwRes');
let lbl = document.getElementById('pwLbl');
let txt = document.getElementById('pwRst');
let btR = document.getElementById('btnRst');
let pTxt = document.getElementById('pTxt');
let reg = document.getElementById('reg');
const form = document.getElementById('frm2');
const chgLbl = document.getElementById('cfmP');
const chgTxt =  document.getElementById('pwCfm');
const subBtn = document.getElementById('subX');
const chgPw = document.getElementById('chgPw');
const pwdL = document.getElementById('passWd');
const newPL = document.getElementById('nwPd');
const newPt = document.getElementById('npwd');


eventTarget.addEventListener('click', function() {
  
//let reset = document.getElementById('pwRes');
if (lbl.style.display === 'none' || txt.style.display === 'none' ) {
    lbl.style.display = 'block';
    txt.style.display = 'block';
    btR.style.display = 'block';
   
    eventTarget.style.display = 'none';
    reg.style.display = 'none';
}


  // this block of code will run when click event happens on eventTarget element
});


  chgPw.addEventListener('click', function() {
  
    //let reset = document.getElementById('pwRes');
    if (chgLbl.style.display === 'none' || chgTxt.style.display === 'none' ) {
        chgLbl.style.display = 'block';
        chgTxt.style.display = 'block';
        subBtn.innerHTML = 'Change';
        chgPw.style.display= 'none';
        pwdL.innerHTML = 'Current Password';
        newPL.style.display ='block'
        newPt.style.display ='block'
    }
    
    
      // this block of code will run when click event happens on eventTarget element
    });
    
    
function logSubmit(event) {
    pTxt.textContent = `Request Submitted! Please check your email to reset the password.`;
    btR.style.display = 'none';
    eventTarget.style.display = 'none';
    lbl.style.display = 'none';
    txt.style.display = 'none';

    reg.style.display = 'block';

    event.preventDefault();


  }
  
  form.addEventListener('submit', logSubmit);
  
    
      // this block of code will run when click event happens on eventTarget element
    // });

   




    let userX='', pswd ='';
  
    let frmLogin = document.forms["myForm"];

    frmLogin.onsubmit = function(event) {
        event.preventDefault();
        // console.log(frmLogin.email.value);
        // console.log(frmLogin.password.value);
        // console.log(frmLogin.pwCfm.value);
         userX =  frmLogin.email.value;
         pswd =  document.getElementById("pwd").value;
        console.log("username is " + userX + " and  password is " +  pswd );
        getInfo(userX, pswd);
       
            }


        
          


function getInfo(user, pswd) {

    const objPeople = [
        {
        usr: "Henok@123.com",
        pass: "123"
    },
    {
        usr: "Ted@abc.org",
        pass: "1234"
    }
    ];
//    let userX =  frmLogin.email.value;
//    let pswd =  document.getElementById("pwd").value;
// let test = typeof objPeople.usr[0];

//   console.log(test);
   for (i= 0; i < objPeople.length; i++) {
    if ( user == objPeople.usr[i].toString() && pswd == objPeople.pass[i].toString()  ) {
        console.log(`${userX} logged in!!`);
        return;
    }
  }
  console.log('Incorrect password');
}
//getInfo();
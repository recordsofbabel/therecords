var corPas = 43223040000;

function checkpassword() {
  var passwordAttempt = document.getElementById("password").value;
   if(passwordAttempt == corPas){
       alert("Correct!");
       window.location.href = "../alpha/index.html";
   }else{
       location.reload();
   }
 }  
function login() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("log").style.backgroundColor="#568AF2";
    document.getElementById("sign").style.backgroundColor="gray";
}
function signup() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
    document.getElementById("sign").style.backgroundColor="#568AF2";
    document.getElementById("log").style.backgroundColor="gray"
}
function transform1(){
  document.getElementById("label1").style.transform = "translate(1px,50px)";
  document.getElementById("label1").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[0].style.display = "none";
}
function transform2() {
  document.getElementById("label2").style.transform = "translate(1px,50px)";
  document.getElementById("label2").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[1].style.display = "none";
}
function transform3(){
  document.getElementById("label3").style.transform = "translate(1px,50px)";
  document.getElementById("label3").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[2].style.display = "none";
}
function transform4() {
  document.getElementById("label4").style.transform = "translate(1px,50px)";
  document.getElementById("label4").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[3].style.display = "none";
}
function transform5(){
  document.getElementById("label5").style.transform = "translate(1px,50px)";
  document.getElementById("label5").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[4].style.display = "none";
}
function transform6() {
  document.getElementById("label6").style.transform = "translate(1px,50px)";
  document.getElementById("label6").style.fontSize = "14px";
    var x = document.getElementsByClassName("ast");
    x[5].style.display = "none";
}

//SignUp Button
function signUp(){
  var popup = document.getElementById("myPopup");
   popup.classList.toggle("show");
}

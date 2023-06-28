document.getElementById("login").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="flex"
})
document.querySelector(".cancel").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none"
})
document.getElementById("login1").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="flex"
})
document.querySelector(".cancel").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none"
})
document.getElementById("user-main").addEventListener("click",function(){
    document.querySelector(".user-popup").style.display ="flex"
})
document.querySelector(".cross").addEventListener("click",function(){
    document.querySelector(".user-popup").style.display="none"
})
document.getElementById("worker-main").addEventListener("click",function(){
    document.querySelector(".worker-popup").style.display ="flex"
})
document.querySelector(".cross2").addEventListener("click",function(){
    document.querySelector(".worker-popup").style.display="none"
})
var enter = document.querySelector("#name1");

enter.addEventListener("keypress",function (e){
    document.querySelector("#email1").style.display="block"
})
document.querySelector("#email1").addEventListener("keypress",function(d){
    document.querySelector("#password1").style.display="block"
})
document.querySelector("#password1").addEventListener("keypress",function(a){
    document.querySelector("#passwordcheck1").style.display="block"
})
document.querySelector("#passwordcheck1").addEventListener("keypress",function(b){
    document.querySelector("#date1").style.display="block"
})
document.querySelector("#date1").addEventListener("click",function(c){
    document.querySelector("#Gender1").style.display="block"
})
document.querySelector("#Gender1").addEventListener("click",function(f){
    document.querySelector("#address1").style.display="block"
})
document.querySelector("#address1").addEventListener("keypress",function(g){
    document.querySelector("#checkbox1").style.display="block"
    document.querySelector("#user-accept").style.display="block"    
    document.querySelector("#user-login").style.display="block"    

})
let bg = document.getElementById("bg")
window.addEventListener('scroll',function(){

    var k = window.setInterval(function() {
        var i=0
        if (i >= 10) {
          clearInterval(k);
        } else {
          bg.style.opacity = i / 10;
          i++;
        }
      }, 100);


});

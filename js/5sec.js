function sleep() {
    setTimeout("countdown()", 5000);
}
var ss = 6;
function countdown() {
ss = ss-1;
if (ss<0) {
window.location="http://www.google.com/";
}
else {
document.getElementById("myModal").innerHTML=ss;
window.setTimeout("countdown()", 1000);
}
}
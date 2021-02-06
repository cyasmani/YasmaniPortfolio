var i = 0;
var txt = 'Hi There! My name is Yasmani Castaneda and I am a Software Developer.'; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").style.fontFamily = "Gugi, cursive";
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
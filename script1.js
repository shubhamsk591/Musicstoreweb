var s1 =document.getElementById("s1");
var p1 = document.getElementById("play1");

p1.onclick = function() {
  if( s1.paused){
    s1.play();
    p1.src="images/pause.png";
  }
  else{
  s1.pause();
  p1.src="images/play.png";}
}

 s1 =document.getElementById("s2");
p1 = document.getElementById("play2");

p1.onclick = function1 () {
  if( s1.paused){
    s1.play();
    p1.src="images/pause.png";
  }
  else{
  s1.pause();
  p1.src="images/play.png";}
}

var s1 =document.getElementById("s3");
var p1 = document.getElementById("play3");

p1.onclick = function2() {
  if( s1.paused){
    s1.play();
    p1.src="images/pause.png";
  }
  else{
  s1.pause();
  p1.src="images/play.png";}
}

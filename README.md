<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Music Store</title>
    <link rel="stylesheet" href="style1.css">
  </head>

  <body>
    <div class="container1">
      <div class="nav">
        <div class="leftnav">
          <img alt="Logo" src="images/logo.webp">
        <span>Musicald</span>
        </div>
        <div class="rightnav">
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="Musiclibrary.html">Music Library</a></li>
          <li><a href="store.html">Store</a></li>
          <li><a href="Aboutus.html">About Us</a></li>
        </ul>
      </div>
      </div>
       <div class ="intro">
         <div class="inlef">
        <h1> Welcome <br> to<br> the<br> music store</h1>
      </div>
      <div class="inrig">
        <h1>Click here to here music</h1>
           <img src="images/play.png" alt="Play button" id="pint">

        <audio id="si1">
    <source src="Song/intro.mp3" type="audio/mp3">
  </audio>
  <script >
  var s1 =document.getElementById("si1");
  var p1 = document.getElementById("pint");

  p1.onclick = function() {
    if( s1.paused){
      s1.play();
      p1.src="images/pause.png";
    }
    else{
    s1.pause();
    p1.src="images/play.png";}
  }
  </script>
       </div>

    </div>
  </body>
</html>

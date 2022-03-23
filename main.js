var x = 0;
var y = 0;

var myVar=setInterval(function(){slides()},2000);

function slides() {
  document.getElementsByClassName("slide-img")[y].style.width="0px";
  document.getElementsByClassName("slide-img")[x].style.width="100%";
  y = x;
  x++;
  if (x == 6) {
     x = 0;
  }
}
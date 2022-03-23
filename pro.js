function flip() {
    $('.card').toggleClass('flipped');
}

function flop() {
$('.card').toggleClass('flipped');
}

function color(){
 var blue=document.getElementById("blue");
  var grey=document.getElementById("grey");
  var first=document.getElementById("first");
  var last=document.getElementById("last");
  var images=[];

  images[0] = "images/grey.png";
  images[1] = "images/blue.png";
  images[2] = "images/white.png";
  last.addEventListener("mouseover", function(event){

    if(event.target.id=="grey"){
      (first.src=images[0]);
	  	}

	else if(event.target.id=="blue"){
		(first.src=images[1]);
	}
  else if(event.target.id!="grey" || event.target.id!="blue"){
    (first.src=images[2])
  }
  },false)
}
window.addEventListener("load", color, false);

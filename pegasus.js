function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("wrapper").style.padding = "0px 5px";
        document.getElementById("logo").style.fontSize = "15px";
        } else {
            document.getElementById("wrapper").style.padding = "20px 5px";
            document.getElementById("logo").style.fontSize = "25px";
        }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
}

// Tabs code block for expansion once clicked

function openTab(evt, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
  }

// showroom code 

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 1500;	// Time Between Switch

// Image List
images[0] = "images/ko.jpg"
images[1] = "images/ko1.jpg"
images[2] = "images/ko2.jpg"
images[3] = "images/ko3.jpg"
images[4] = "images/av.png"
images[5] = "images/av1.png"
images[6] = "images/be.png"
images[7] = "images/benta.png"
images[8] = "images/benta1.png"
images[9] = "images/bu.jpg"
images[10] = "images/bu1.jpg"
images[11] = "images/cogt.png"
images[12] = "images/fo.jpg"
images[13] = "images/mu.jpg"
images[14] = "images/urus.png"
images[15] = "images/urus1.png"

var arr = images.splice(3,1);
// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

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

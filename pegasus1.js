function imgFunction(){
  var bigImage=document.getElementById("bigImage");
  var thumbnailsHolder=document.getElementById("thumbnailsHolder");

  thumbnailsHolder.addEventListener("click", function(event){
    if(event.target.tagName=="IMG"){
      bigImage.src=event.target.src;
    }
  },
  false)
}

window.addEventListener("load", imgFunction, false);

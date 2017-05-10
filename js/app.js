
var cabin = document.getElementById("cabin");
var modal1 = document.getElementById("modal1");
var cabinMod = document.getElementById("cabinModal");
var captionText = document.getElementById("caption");

cabin.onclick = function(){
    modal1.style.display = "block";
    cabinMod.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal1.style.display = "none";
}

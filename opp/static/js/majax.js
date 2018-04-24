
// Modal for video displaying
var modal = document.getElementById('modal-video');

// Get the button that opens the modal
var btn = document.getElementById("modal-video-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

//Mathquill function
 function quill(problem){
 var problemSpan = document.getElementById(problem);
 return MQ.StaticMath(problemSpan);
 }
 
//Mathjax
 MathJax.Hub.Config({
    extensions: ["tex2jax.js"],
    jax: ["input/TeX","output/HTML-CSS"],
    tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]}
  }); 
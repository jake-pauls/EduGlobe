// Get the modal
var modal = document.getElementById("CovidModal");

// Get the button that opens the modal
var btn;
var modal;
var span;

window.addEventListener("load", (event) => {
    //more info button
    displayCovid = document.getElementById("more_info");
    //modal buttons
    span = document.getElementsByClassName("close")[0];
    modal = document.getElementById("CovidModal");
    
    span.addEventListener('click', () => {
        modal.style.display = "none";
    });
   
    // Event Listeners for buttons
    displayCovid.addEventListener('click', () => {
      
      modal.style.display = "block";
    });
  });



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
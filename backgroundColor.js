var button = document.querySelector("#change-color");

// event listener uses function to generate a random color and set it as background
button.addEventListener("click", 
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
}); 



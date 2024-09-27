document.addEventListener("DOMContentLoaded", function() {
var sliderImages = [
    "Component-1.png",
    "Component-2.png",
    "Component-3.png"
  ];
  
  var currentIndex = 0;
  var sliderImage = document.getElementById("sliderImage");
  
  function changeImage() {
    currentIndex++;
    if (currentIndex >= sliderImages.length) {
      currentIndex = 0;
    }
    sliderImage.src = sliderImages[currentIndex];
  }
  
  setInterval(changeImage, 3000);
});
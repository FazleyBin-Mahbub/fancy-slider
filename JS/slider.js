const images = [
  "Images/image-1.jpg",
  "Images/image-2.jpg",
  "Images/image-3.jpg",
];

let imageIndex = 0;
const imageElement = document.getElementById("slider-image");
setInterval(() => {
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  const imageUrl = images[imageIndex];

  // changes the images url and change it
  imageElement.setAttribute("src", imageUrl);
// images changes 
  imageIndex++;
}, 2000);

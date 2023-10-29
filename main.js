let result = document.querySelector("#result");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let currentIndex = 0;
let images = ["pizza.jpg", "shrek.jpg", ]

function showImage(index) {
    result.src = "grafika/"+ images[index];
}
function previousImage() {
    if(currentIndex - 1 < 0){
        currentIndex = images.length;
    }
    else{
        currentIndex = currentIndex - 1;
    }
    showImage(currentIndex);
}
function nextImage() {
    if(currentIndex + 1 > images.length - 1){
        currentIndex = 0;
    }
    else{
        currentIndex = currentIndex + 1;
    }
    showImage(currentIndex);
}

//setInterval(nextImage, 5000);

next.addEventListener('click', nextImage);
prev.addEventListener('click', previousImage);

// let indeksObrazka = 0; // Zmienna do śledzenia aktualnego indeksu obrazka

// function zmienObraz() {
//   result.src = images[indeksObrazka];
//   indeksObrazka++;
//   if (indeksObrazka >= obrazy.length) {
//     indeksObrazka = 0;
//   }
// }
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const slider = document.querySelector("#slider");
const h2 = document.querySelector("h2");
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];
for (i = 0; i < images.length; i++) $('#slider').append($(`<img style="display: none" src="img${i+1}.jpg"/>`));
let currentNumber = 1;
window.addEventListener("load", myFunction);

function myFunction() {
    $(".loader").fadeOut(500);
    slider.style.display = 'flex';
}
h2.innerText = 1 + "/" + images.length;
leftArrow.addEventListener("click", () => {
    if (slider.dataset.img == 0) {
        leftArrow.style.opacity = .2;
        return
    } else slider.dataset.img -= 1; {
        slider.style.backgroundImage = `url(${images[slider.dataset.img]})`
        currentNumber--;
    }

    if (slider.dataset.img == 0) leftArrow.style.opacity = .2;
    rightArrow.style.opacity = 1;
    h2.innerText = currentNumber + "/" + images.length;
})

rightArrow.addEventListener("click", () => {
    if (slider.dataset.img == images.length - 1) {
        return
    } else {
        slider.dataset.img++;
        currentNumber++;
    }
    if (slider.dataset.img == images.length - 1) rightArrow.style.opacity = .2;
    slider.style.backgroundImage = `url(${images[slider.dataset.img]})`
    leftArrow.style.opacity = 1;
    h2.innerText = currentNumber + "/" + images.length;
})
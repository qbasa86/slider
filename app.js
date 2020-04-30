const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const slider = document.querySelector("#slider");
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];

leftArrow.addEventListener("click", () => {
    if (slider.dataset.img == 0) {
        leftArrow.style.opacity = .2;
        return
    } else slider.dataset.img -= 1;
    slider.style.backgroundImage = `url(${images[slider.dataset.img]})`
    if (slider.dataset.img == 0) leftArrow.style.opacity = .2;
    rightArrow.style.opacity = 1;

})

rightArrow.addEventListener("click", () => {
    if (slider.dataset.img == images.length - 1) {
        return
    } else slider.dataset.img++;
    if (slider.dataset.img == images.length - 1) rightArrow.style.opacity = .2;
    slider.style.backgroundImage = `url(${images[slider.dataset.img]})`
    leftArrow.style.opacity = 1;

})
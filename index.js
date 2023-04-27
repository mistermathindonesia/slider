const right = document.querySelector(".right");
const left = document.querySelector(".left");
const images = document.querySelectorAll(".image");
const slider = document.querySelector(".slider");
const bagBawah = document.querySelector(".bagBawah");

let length = images.length;
// console.log(length);

slideNumber = 1;

// FIXME:membuat 4 div html tag
for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "bulatan";
  bagBawah.appendChild(div);
}

// TODO:membuat
const bulatan = document.querySelectorAll(".bulatan");
bulatan[0].style.backgroundColor = "red";

const hapusBg = () => {
  bulatan.forEach((tombol) => {
    tombol.style.backgroundColor = "transparent";
  });
};

bulatan.forEach((tombol, i) => {
  tombol.addEventListener("click", () => {
    hapusBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    tombol.style.backgroundColor = "red";
  });
});

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};
const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};
const lastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
};

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : firstSlide();
  hapusBg();
  bulatan[slideNumber - 1].style.backgroundColor = "red";
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : lastSlide();
  hapusBg();
  bulatan[slideNumber - 1].style.backgroundColor = "red";
});

// NICE. GOOD JOB ^_^

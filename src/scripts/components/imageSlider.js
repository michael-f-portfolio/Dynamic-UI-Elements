import ArrowLeftSVG from "../../assets/svgs/arrow-left.svg";
import ArrowRightSVG from "../../assets/svgs/arrow-right.svg";
import CircleHollowSVG from "../../assets/svgs/circle-hollow.svg";
import CircleFullSVG from "../../assets/svgs/circle-full.svg";
import "styles/imageSlider.css";
import slide1 from "../../assets/imgs/imageSlider/slide1.jpg";
import slide2 from "../../assets/imgs/imageSlider/slide2.jpg";
import slide3 from "../../assets/imgs/imageSlider/slide3.jpg";
import slide4 from "../../assets/imgs/imageSlider/slide4.jpg";
import slide5 from "../../assets/imgs/imageSlider/slide5.jpg";

export default class ImageSlider {
  constructor(elementToAppendTo) {
    this.images = [
      { src: slide1, id: "slide-1", alt: "Slide 1" },
      { src: slide2, id: "slide-2", alt: "Slide 2" },
      { src: slide3, id: "slide-3", alt: "Slide 3" },
      { src: slide4, id: "slide-4", alt: "Slide 4" },
      { src: slide5, id: "slide-5", alt: "Slide 5" },
    ];

    this.mainContainer = document.createElement("div");
    this.mainContainer.classList.add("imageSlider");

    this.moveLeft = document.createElement("div");
    this.moveLeft.classList.add("moveImageLeft");
    this.moveLeftImage = document.createElement("img");
    this.moveLeftImage.src = ArrowLeftSVG;
    this.moveLeftImage.addEventListener("click", () => {
      this.previousSlide();
    });
    this.moveLeft.appendChild(this.moveLeftImage);

    this.imageContainer = document.createElement("div");
    this.imageContainer.classList.add("imageContainer");

    this.imageSlides = document.createElement("div");
    this.imageSlides.classList.add("imageSlides");

    this.imageNavigation = document.createElement("div");
    this.imageNavigation.classList.add("imageNavigator");

    this.images.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = image.src;
      img.id = image.id;
      img.alt = image.alt;

      const imgNavContainer = document.createElement("div");
      imgNavContainer.id = `${image.id}-nav`;
      const imgNavActive = document.createElement("img");
      imgNavActive.src = CircleFullSVG;
      const imgNavInactive = document.createElement("img");
      imgNavInactive.src = CircleHollowSVG;
      imgNavInactive.addEventListener("click", () => {
        this.showSlide(image.id);
      });

      if (index === 0) {
        imgNavContainer.classList.add("showSlide");
        img.classList.add("showSlide");
      } else {
        imgNavContainer.classList.add("hideSlide");
        img.classList.add("hideSlide");
      }

      imgNavContainer.append(imgNavActive, imgNavInactive);

      this.imageSlides.appendChild(img);
      this.imageNavigation.appendChild(imgNavContainer);
    });

    this.moveRight = document.createElement("div");
    this.moveRight.classList.add("moveImageRight");
    this.moveRightImage = document.createElement("img");
    this.moveRightImage.src = ArrowRightSVG;
    this.moveRightImage.addEventListener("click", () => {
      this.nextSlide();
    });
    this.moveRight.appendChild(this.moveRightImage);

    this.imageContainer.append(this.imageSlides, this.imageNavigation);
    this.mainContainer.append(
      this.moveLeft,
      this.imageContainer,
      this.moveRight
    );

    elementToAppendTo.appendChild(this.mainContainer);
  }

  nextSlide() {
    const currentSlide = this.imageSlides.querySelector("img.showSlide");
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide === null) {
      this.showSlide(this.imageSlides.firstChild.id);
    } else {
      this.showSlide(nextSlide.id);
    }
  }

  previousSlide() {
    const currentSlide = this.imageSlides.querySelector("img.showSlide");
    const previousSlide = currentSlide.previousElementSibling;
    if (previousSlide === null) {
      this.showSlide(this.imageSlides.lastChild.id);
    } else {
      this.showSlide(previousSlide.id);
    }
  }

  showSlide(slideId) {
    const images = this.imageSlides.querySelectorAll("img");
    images.forEach((image) => {
      if (image.id === slideId) {
        image.classList.replace("hideSlide", "showSlide");
      } else if (image.classList.contains("showSlide")) {
        image.classList.replace("showSlide", "hideSlide");
      }
    });

    const navigators = this.imageNavigation.querySelectorAll("div");
    navigators.forEach((navigator) => {
      if (navigator.id === `${slideId}-nav`) {
        navigator.classList.replace("hideSlide", "showSlide");
      } else if (navigator.classList.contains("showSlide")) {
        navigator.classList.replace("showSlide", "hideSlide");
      }
    });
  }
}

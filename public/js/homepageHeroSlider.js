import { arrayOfPuppies } from "./puppyPics.js"


//grab side images container

let sideImagesContainer = document.querySelector(".side-imgs-container");

//grab side images

let arrayOfExistingSideImages = document.querySelectorAll(".side-img");

//array of new side images

let arrayOfNewSideImages = [];

//index counter

let indexCounter = 0;

//change side images every 5 seconds

export const heroSlider = () => {

    let heroSliderInterval = setInterval(() => {

        indexCounter++;
        resetCounter();
        removeImageElements();
        createImageElements();
        appendImageElements();
        addImagesSource();

    }, 5000);

}

//reset counter

const resetCounter = ()=>{

    if(indexCounter + 2 > arrayOfPuppies.length - 1){
        indexCounter = 0;
    }

}

//remove image elements 

const removeImageElements = () => {

    document.querySelectorAll(".side-img").forEach(img => {
        img.remove();
    })

}

//create image elements

const createImageElements = () => {

    for (let i = 0; i < 3; i++) {

        let imageElement = document.createElement("img");
        imageElement.classList.add("side-img");
        arrayOfNewSideImages.push(imageElement);
    }

}

//append image elements to slider container

const appendImageElements = () => {

    arrayOfNewSideImages.forEach(img=>{
        sideImagesContainer.appendChild(img);
    })

}

//add source of images to side images

const addImagesSource = ()=>{

   for(let i = 0; i < 3; i++){

    arrayOfNewSideImages[i].src = arrayOfPuppies[indexCounter + i].src;

   }

   arrayOfNewSideImages = [];

}


import { displayProductCards } from "./productPlacer.js";
import { removeProductRows } from "./productPlacer.js";

//grab brand select element

let brandSelectElement = document.querySelector("#brandSelect");

//grab sort by select element

let sortBySelectElement = document.querySelector("#sortBySelect");

//on change event for brand select element

const sortAndFilterSelectOnchange = () => {
    removeProductRows();
    displayProductCards(toyProductsArray, brandSelectElement.value, sortBySelectElement.value);
}

//temporary images array

let toyProductsArray = [];

let brandCount = 0;

//assign brand value

const brandDesignator = () => {

    brandCount++;

    if (brandCount === 5) {
        brandCount = 1;
    }
}

//random range generator

const randomRangeGenerator = (min, max)=>{

    return Math.floor(Math.random() * (max - min) + min);
}


for (let i = 1; i < 11; i++) {

    brandDesignator();

    toyProductsArray.push(
        {
            name: `item${i}`,
            price: randomRangeGenerator(105, 300),
            src: `../images/toy${i}.jpg`,
            brand: brandCount,
            rating: randomRangeGenerator(1, 6)
        }
    )
}

//add on change listener to brand select element

brandSelectElement.addEventListener("change", ()=>{
    sortAndFilterSelectOnchange();
})

//add on change listener to sorting select element

sortBySelectElement.addEventListener("change", ()=>{
    sortAndFilterSelectOnchange();
})

displayProductCards(toyProductsArray, brandSelectElement.value, sortBySelectElement.value);

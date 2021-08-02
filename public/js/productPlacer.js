
//grab card container div

let cardContainerDiv = document.querySelector("#cards-container");

//return card 

export const displayProductCards = (arrayOfProducts, brandString, sortingString) => {

    let sortedArrayOfProducts = sortProductsArray(arrayOfProducts, sortingString);
    let filteredArrayOfProducts = filterProductsArrayByBrand(sortedArrayOfProducts, brandString);
    let rowsNeeded = getNumberOfRowsNeeded(filteredArrayOfProducts);

    let arrayOfColumns = createAllColumns(rowsNeeded);
   
    appendAllCardsToColumns(arrayOfColumns, filteredArrayOfProducts);
  
    //create the rows needed
    let arrayOfRows = createAllRowsNeeded(rowsNeeded);

    //append max 4 columns to a row

    appendFourColumnsToEachRow(arrayOfColumns, arrayOfRows);

}

//create all coloumns based on the number of rows of 4 needed

const createAllColumns = (rowsNeeded) =>{

    let arrayOfColumns = [];

    //create all the columns 
    for (let i = 0; i < (rowsNeeded * 4); i++) {

        arrayOfColumns.push(createColumnDivElement());
    }
    return arrayOfColumns;
}

//append all cards to columns, filling any product rows with blanks if neccessary

const appendAllCardsToColumns = (arrayOfColumns, filteredArrayOfProducts)=>{

    for (let i = 0; i < arrayOfColumns.length; i++) {

        if (i < filteredArrayOfProducts.length) {
            arrayOfColumns[i].appendChild(createCard(filteredArrayOfProducts[i]));
        }
        else {
            arrayOfColumns[i].appendChild(createBlankCard(filteredArrayOfProducts[0]));
        }

    }

}

//create the total amount of needed rows

const createAllRowsNeeded = (rowsNeeded) =>{

    let arrayOfRows = [];

    for (let i = 0; i < rowsNeeded; i++) {

        arrayOfRows.push(createRowDivElement());
    }
    return arrayOfRows;
}

//append max 4 columns to a row

const appendFourColumnsToEachRow = (arrayOfColumns, arrayOfRows)=>{

    let rowCounter = 0;
    for (let i = 0; i < arrayOfColumns.length; i++) {

        if (i != 0 && i % 4 == 0) {
            rowCounter++;
        }

        arrayOfRows[rowCounter].appendChild(arrayOfColumns[i]);

    }
}


//filter products in array based on selected brands

const filterProductsArrayByBrand = (arrayOfProducts, brandString) => {

    if (brandString == 1) {
        return arrayOfProducts.filter(productObject => productObject.brand == 1);
    }
    else if (brandString == 2) {
        return arrayOfProducts.filter(productObject => productObject.brand == 2);
    }
    else if (brandString == 3) {
        return arrayOfProducts.filter(productObject => productObject.brand == 3);
    }
    else if (brandString == 4) {
        return arrayOfProducts.filter(productObject => productObject.brand == 4);
    }
    else {
        return arrayOfProducts;
    }

}

//sort products in array based on selected sorting method eg. highest to lowest

const sortProductsArray = (arrayOfProducts, sortingString) => {

    if (sortingString == "LH") {
        return arrayOfProducts.sort((a,b)=>
            a.price - b.price
        )
    }
    else if (sortingString == "HL") {
        return arrayOfProducts.sort((a,b)=>
            b.price - a.price
        )
    }
    else {
        return arrayOfProducts.sort((a,b)=>
            a.rating - b.rating
        )
    }
}

//create blank card

const createBlankCard = (productObject) => {

    let cardDivElement = createCardDivElement();
    cardDivElement.classList.add("blank-card");
    let cardBodyDivElement = createCardBodyDivElement();
    appendElements(productObject, cardDivElement, cardBodyDivElement);
    return cardDivElement;
}

//create card

const createCard = (productObject) => {

    let cardDivElement = createCardDivElement();
    let cardBodyDivElement = createCardBodyDivElement();
    appendElements(productObject, cardDivElement, cardBodyDivElement);
    return cardDivElement;
}

//append elements

const appendElements = (productObject, cardDivElement, cardBodyDivElement) => {

    appendImageToCard(cardDivElement, createCardImageElement(productObject));
    appendCardBodyToCard(cardDivElement, cardBodyDivElement);
    appendCardTitleToCardBody(cardBodyDivElement, createCardTitleElement(productObject));
    appendCardTextToCardBody(cardBodyDivElement, createCardTextElement(productObject));
    appendAddToCartButtonToCardBody(cardBodyDivElement, createAddToCartButton());
    appendViewItemButtonToCardBody(cardBodyDivElement, createViewItemButton());
}

//get how many rows are needed based on amount of cards

const getNumberOfRowsNeeded = (arrayOfProducts) => {

    return Math.ceil(arrayOfProducts.length / 4);
}

//create row div element

const createRowDivElement = () => {

    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("product-rows");
    cardContainerDiv.appendChild(row);
    return row;
}

//create column div element

const createColumnDivElement = () => {

    let column = document.createElement("div");
    column.classList.add("col-sm");
    column.classList.add("d-flex");
    column.classList.add("justify-content-around");
    return column;
}


//append card body to card div

const appendCardBodyToCard = (cardDivElement, cardBodyDivElement) => {

    cardDivElement.appendChild(cardBodyDivElement);
}


//append image element to card div

const appendImageToCard = (cardDivElement, imageElement) => {

    cardDivElement.appendChild(imageElement);
}

//append card title to card body

const appendCardTitleToCardBody = (cardBodyDivElement, titleElement) => {

    cardBodyDivElement.appendChild(titleElement);
}

//append card text to card body

const appendCardTextToCardBody = (cardBodyDivElement, textElement) => {

    cardBodyDivElement.appendChild(textElement);
}

//append add to cart button to card body

const appendAddToCartButtonToCardBody = (cardBodyDivElement, addToCartButtonElement) => {

    cardBodyDivElement.appendChild(addToCartButtonElement);
}

//append view item button to card body

const appendViewItemButtonToCardBody = (cardBodyDivElement, viewItemButtonElement) => {

    cardBodyDivElement.appendChild(viewItemButtonElement);
}

//create card div element

const createCardDivElement = () => {

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    return cardDiv;
}

//create card image element

const createCardImageElement = (productObject) => {

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.classList.add("card-product-img");
    img.src = productObject.src;
    return img;
}

//create card body div

const createCardBodyDivElement = () => {

    let body = document.createElement("div");
    body.classList.add("card-body");
    return body;
}

//create card title

const createCardTitleElement = (productObject) => {

    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML = productObject.name;
    return title;
}

//create card text 

const createCardTextElement = (productObject) => {

    let text = document.createElement("p");
    text.classList.add("card-text");
    text.innerHTML = `R${productObject.price}.00`;
    return text;
}

//create add to cart button

const createAddToCartButton = () => {

    let addToCartButton = document.createElement("button");
    addToCartButton.classList.add("btn");
    addToCartButton.classList.add("btn-sm");
    addToCartButton.classList.add("bg-success");
    addToCartButton.innerHTML = "Add To Cart";
    return addToCartButton;
}

//create view item button

const createViewItemButton = () => {

    let viewItemButton = document.createElement("button");
    viewItemButton.classList.add("btn");
    viewItemButton.classList.add("btn-sm");
    viewItemButton.classList.add("bg-warning");
    viewItemButton.innerHTML = "View";
    return viewItemButton;
}

//remove all product rows

export const removeProductRows = () => {
    while (cardContainerDiv.firstChild) {
        cardContainerDiv.removeChild(cardContainerDiv.firstChild)
    }
}
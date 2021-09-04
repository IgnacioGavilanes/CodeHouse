/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE LOGIC FOR THE FLOW OF OUR WEB APP.
it consumes variables.js, data.js and functions.js.
----------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------
Dynamic products' grid
----------------------------------------------------------------------------------------------------------*/
for (let i = 0; i <storeItems.length; i++) {
    let container = document.createElement("div");
    container.innerHTML =  
      `<a href="#" class="card-hyperlink">
        <div class="card">
          <img src="${storeItems[i].imgsrc}" class="item-img" alt="">
          <h1 class="name">${storeItems[i].title}</h1>
          <h3 class="colorway">${storeItems[i].colorway}</h3>
          <input type="image" src="img/in-wishlist.svg" class="itemcontainer add-wishlist"/>
          <h2 class="price itemcontainer">$ ${storeItems[i].price}</h2>
          <input type="image" src="img/in-bag.svg" class="itemcontainer add-bag" id="11"/>
          <p class="reviews"> ${storeItems[i].reviews}🔥 </p>
        </div>
      </a>`;
    let parentNode = document.getElementById("product-grid");
    parentNode.appendChild(container);
  };


/*----------------------------------------------------------------------------------------------------------
Flow of web app
----------------------------------------------------------------------------------------------------------*/
do {
    itemId = mainMenu()
    if (itemId === (storeItems.length + 1)) break;

    quantity = parseInt(prompt(askQuantity));

    addToBag(quantity, itemId)

    answer = prompt("Desea agregar mas productos? S/N")
}

while (answer == "S")

if (bag > 0) {
    alert(`El total de su compra es de ${bag}`)
}

else {
    alert("Gracias por su visita")
}
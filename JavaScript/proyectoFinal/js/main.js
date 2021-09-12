/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE LOGIC FOR THE FLOW OF OUR WEB APP.
it consumes variables.js, data.js and functions.js.
----------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------
Dynamic products' grid 
----------------------------------------------------------------------------------------------------------*/
for (let i = 0; i <storeItems.length; i++) {
    let container = document.createElement("div");

    //Should I add an a tag wrapping mi product card??? <a href="" class="card-hyperlink">
    container.innerHTML =  
      `
        <div class="card">
          <img src="${storeItems[i].imgsrc}" class="item-img" alt="">
          <h1 class="name">${storeItems[i].title}</h1>
          <h3 class="colorway">${storeItems[i].colorway}</h3>
          <input type="image" src="img/in-wishlist.svg" class="itemcontainer add-wishlist" id="wishlistButton-card"/>
          <h2 class="price itemcontainer">$ ${storeItems[i].price}</h2>
          <input type="image" src="img/in-bag.svg" class="itemcontainer add-bag" id="bagButton-card"/>
          <p class="reviews"> ${storeItems[i].reviews}🔥 </p>
        </div>
      `;
    let parentNode = document.getElementById("product-grid");
    parentNode.appendChild(container);
  }

let bagButton = document.getElementsByClassName('add-bag');

for (let i = 0; i < bagButton.length; i++) {
  let addToBagButton = bagButton[i]
  addToBagButton.addEventListener('click', addToBagEvent);
  function addToBagEvent (event) {
    // if (checkStock()) {
    let bagButtonClicked = event.target
    let addItem = bagButtonClicked.parentElement
    let itemPrice = addItem.getElementsByClassName('price')[0].innerText
    let itemName = addItem.getElementsByClassName('name')[0].innerText

    itemBagArray.push({itemName, itemPrice})

    console.log(itemBagArray)

    localStorage.setItem(JSON.stringify(itemName), JSON.stringify(itemPrice))

    updateBag()
    console.log(`${itemName} was added to the bag (${itemPrice}). Your current total is: $${bag}`);
      //add tax
  // }
  }
}

function updateBag () {
  let bagButtonClicked = event.target
  let addItem = bagButtonClicked.parentElement
  let itemPrice = parseFloat(addItem.getElementsByClassName('price')[0].innerText.substring(2))
  bag = bag + itemPrice
  //console.log(bag);

}

//function checkStock () {

  // let bagButton = document.getElementsByClassName('add-bag');
  // for (let i = 0; i < bagButton.length; i++) {
  //   let addToBagButton = bagButton[i]
  //   addToBagButton.addEventListener('click', addToBagEvent);
  //   let bagButtonClicked = event.target
  //   let addItem = bagButtonClicked.parentElement
  //   let initialItemStock = storeItems[i].stock;
  // }
  // // let bagButtonClicked = event.target
  // // let addItem = bagButtonClicked.parentElement
  // let itemStock = initialItemStock - 1 ;
  // // let found = storeItems.find(item => item.id === itemId); 
  // if (0 >= itemStock) {
  //     console.log(`Stock insuficiente. El stock disponible es de ${itemStock}`);
  //     return false
  // }
  // else {
  //     return true
  // }
//}
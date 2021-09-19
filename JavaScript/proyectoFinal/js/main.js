/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE LOGIC FOR THE FLOW OF OUR WEB APP.
it consumes variables.js, data.js and functions.js.
----------------------------------------------------------------------------------------------------------*/
$(document).ready(function(){console.log('DOM loaded successfully')});
/*----------------------------------------------------------------------------------------------------------
Dynamic products' grid: Now utilizing JQuery
----------------------------------------------------------------------------------------------------------*/
for (let i = 0; i <storeItems.length; i++) {

  let parentNode = $("#product-grid");
  $(parentNode).append(`
  <div class="card">
                    <img src="${storeItems[i].imgsrc}" class="item-img" alt="">
                    <h1 class="name">${storeItems[i].title}</h1>
                    <h3 class="colorway">${storeItems[i].colorway}</h3>
                    <input type="image" src="img/in-wishlist.svg" class="itemcontainer add-wishlist" id="wishlistButton-card"/>
                    <h2 class="price itemcontainer">$ ${storeItems[i].price}</h2>
                    <input type="image" src="img/in-bag.svg" class="itemcontainer add-bag" id="bagButton-card"/>
                    <p class="reviews"> ${storeItems[i].reviews}</p> 
                  </div>
  `);
}

let bagButton = $(".add-bag"); 

for (let i = 0; i < bagButton.length; i++) {

  $(bagButton[i]).on('click', addToBagEvent);
  function addToBagEvent (event) {
    // if (checkStock()) {
    let bagButtonClicked = event.target
    let addItem = bagButtonClicked.parentElement

    //NO PUDE LOGRAR UTILIZAR SELECTORES JQUERY PARA RECREAR ESTA ACCION  
    let itemPrice = addItem.getElementsByClassName('price')[0].innerText
    let itemName = addItem.getElementsByClassName('name')[0].innerText

    itemBagArray.push({itemName, itemPrice})

    console.log(itemBagArray)

    localStorage.setItem(JSON.stringify(itemName), JSON.stringify(itemPrice))

    //Item added to card notification
    Swal.fire(
      {  position: 'top-end',
      toast:true,
      icon: 'success',
      background: 'white',
      html: `<b>${itemName}</b> is now in your bag!`,
      showConfirmButton: false,
      timer: 2000,
    }
    );

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
}

/*----------------------------------------------------------------------------------------------------------
Manipulates DOM depending on whether the review button is clicked (upvoted) or deselected
----------------------------------------------------------------------------------------------------------*/
$(".reviews").click(function () {
  let reviewNum = parseInt(this.innerText);

  if (this.style.color == "black") {
    this.style.color = "#FF8021";
    this.style.fontWeight = "bold";
    
    //TODAVIA NO SE COMO HACER QUE CAMBIE EL NUMERO DEL ELEMENTO QUE ESTOY CLICKEANDO Y NO TODOS LOS QUE TIENEN LA
    //CLASE REVIEW. TAMPOCO SE PORQUE EL PRIMER CLICK VA AL ELSE, CUANDO EL COLOR PREDETERMINADO DEL OBJETO QUE ESTOY CLICKEANDO
    //ES NEGRO...

    function addReview () {
      console.log(reviewNum);
      $(".reviews").html(reviewNum + 1);
    }

    addReview();
  }
  
  else {
    this.style.color = "black";
    this.style.fontWeight = "normal";

    function subtractReview() {
      console.log(reviewNum);
      $(".reviews").html(reviewNum - 1);
    }

    subtractReview();
  }
});


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
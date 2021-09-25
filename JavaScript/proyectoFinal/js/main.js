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

//Number of items in bag
let bagItems = 0

for (let i = 0; i < bagButton.length; i++) {
  
  $(bagButton[i]).on('click', addToBagEvent);
  function addToBagEvent (event) {
     
    // if (checkStock()) {
    // bagItems = bagItems + 1;
    let bagButtonClicked = event.target
    let addItem = bagButtonClicked.parentElement


    //NO PUDE LOGRAR UTILIZAR SELECTORES JQUERY PARA RECREAR ESTA ACCION  
    let itemPrice = addItem.getElementsByClassName('price')[0].innerText
    let itemName = addItem.getElementsByClassName('name')[0].innerText

    itemBagArray.push({itemName, itemPrice})

    console.log(itemBagArray)

    bagCounter = parseInt(itemBagArray.length);
    $("#counter").empty().append(bagCounter)
    // console.log(bagItems)
    console.log(bagCounter)



    localStorage.setItem(JSON.stringify(itemName), JSON.stringify(itemPrice))

    //Item added to  notification
    Swal.fire({
      position: 'top-end',
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
    //CLASE REVIEWS. TAMPOCO SE PORQUE EL PRIMER CLICK VA AL ELSE, CUANDO EL COLOR PREDETERMINADO DEL OBJETO QUE ESTOY CLICKEANDO
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



// $(".filters-title").click(() => {
//   $(".sidebar").toggle(500, function(){
//     $(".filters-title").css({
//         "width": "15rem",
//       });
//     $(".sidebar").css({
//       "display":"inline-block",

//     })
//     })
//   });


// $(document).ready(function(){
//     $(".filters-title").click(function(){
//         $(".sidebar").toggle(500, function(){
//           $(".filters").css({
//             "margin-top":"4rem",
//           })
//           $(".filters-title").css({
//             "display":"none",
//           })
//           $(".collapse-filters").css({
//             "display":"block",
//           })
//         });
//       })
// });

//FUNCIONA
// $(".filters-title").click(function(){
//   $(".sidebar").fadeIn(100, function(){
//     $(".filters").css({
//       "margin-top":"4rem",
//     })
//     $(".filters-title").css({
//       "display":"none",
//     })
//     $(".collapse-filters").css({
//       "display":"block",
//   })
// })})

$(".filterbtn-container").click(function(){
  $(".sidebar").slideToggle(500)
  $(".filterbtn-container").css({
    "width":"15rem"
  })
})



//BAG
//PARA PODER MOSTRAR LOS PRODUCTOS DEL CARRITO EN SWEETALERT VOY 
//A TENER QUE CREAR UNA VARIABLE VACIA 'HTMLBAG' EN LA CUAL TENGO 
//UN LOOP CON TODOS LOS ELEMENTOS DEL ARRAY QUE AGREGUE, Y AHI PASAR
//ESTO COMO UN PARAMETRO HMTL DENTRO DE SWAL.FIRE.
//DENTRO DEL HTMLBAG TENGO QUE AGREGAT CLASES PARA AGREGAR ESTILOS.
//TAMBIEN AGREGAR <BR>. ADEMAS VER QUE SI AGREGO EL MISMO PRODUCTO 2
//VECES NO SE DUPLIQUE TODO EL HTML PERO SE INCREMENTE LA CANTIDAD

$("#bag").click(function(){
  Swal.fire({
    title: 'Your Bag',
    text: 'Do you want to continue',
    width: 800,
    showLoaderOnConfirm: true,
    confirmButtonText: 'Go To Payment Method',
    showCloseButton: true,
    confirmButtonColor: '#3085d6',
    html: '<hr> <br>'+
      '<img src="img/yeezy350.svg" width=150rem><br>'+
      '<img src="img/nb990.svg" width=150rem><br>'+
      '<img src="img/nikebb.svg" width=150rem><br>'+
      '<img src="img/diorb23.svg" width=150rem><br>'+
      '<img src="img/yeezy350.svg" width=150rem><br>'+
      '<img src="img/nb990.svg" width=150rem><br>'+
      '<img src="img/nikebb.svg" width=150rem><br>',
    //Need to add item name, img, price, qtty, total
  }).then(function (result) {
    if (result.isConfirmed) {
      window.location = "checkout.html"
    }
  })
},)

//WISHLIST
$("#wishlist").click(function(){
  Swal.fire({
    html: '<hr>',
    title: 'Your Wishlist',
    width: 800,
    showLoaderOnConfirm: true,
    showCloseButton: true,
  })})



//FUNCIONA
// $(".arrow-left").click(function(){
//   $(".sidebar").fadeOut(100, function(){
//     $(".filters").css({
//       "margin-top":"4rem",
//     })
//     $(".filters-title").css({
//       "display":"block",
//     })
//     $(".collapse-filters").css({
//       "display":"none",
//   })
//   $(".arrow-left").css({
//     "transform":"rotate(180deg)",
//     "transition": "all 3s",
//     "transition-timing": "ease-in-out",
//     "width":"3rem",
//     "height":"auto",
//   })
// })})



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

function responseJSON (state) {
  if (state === "success"){
    console.log("success")
  }
}


$.ajax({url:"js/data.json", datatype:"json", success: responseJSON})
/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE LOGIC FOR THE FLOW OF OUR WEB APP.
it consumes variables.js, data.js and functions.js.
----------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------
Dynamic products' grid: Now utilizing AJAX & JQuery
----------------------------------------------------------------------------------------------------------*/

let itemStock = ''

$.getJSON(JSONurl, function (response, status) {
  if (status === "success"){
    let dataArray = response;
    let parentNode = $("#product-grid");

    //Type Filter
    let type = ''
    //Gets the user selection for type (on filters side-menu)
    $('#typeForm input').on('change', function() {
      type = $('input[name=type]:checked', '#typeForm').val()
    });

    for (const product of dataArray){
      function createCard () {
        $(parentNode).append(`<div class="card" id=${itemId}>
                                <img src="${itemImgSrc}" class="item-img" alt="">
                                <h1 class="name">${itemTitle}</h1>
                                <h3 class="colorway">${itemColorway}</h3>
                                <input type="image" src="img/in-wishlist.svg" class="itemcontainer add-wishlist" />
                                <h2 class="price itemcontainer">$ ${itemPrice}</h2>
                                <input type="image" src="img/in-bag.svg" class="itemcontainer add-bag"/>
                                <p class="reviews"> ${itemReviews} 🔥</p> 
                              </div>`)
          }

      //getting most properties into varibles for each object in dataArray
      let itemType = product.type
      let itemPrice = product.price
      let itemColorPrimary = product.colorPrimary
      let itemColorSecondary = product.colorSecondary

      let itemId = product.id
      let itemImgSrc = product.imgsrc
      let itemTitle = product.title
      let itemColorway = product.colorway
      let itemReviews = product.reviews
      let itemStock = product.stock

      //Shows all products by default. This changes once the user filters them.
      createCard ()
      
      /*----------------------------------------------------- STOCK -----------------------------------------------------*/
      // let bagButton = $(".add-bag"); 

      //   for (let i = 0; i < bagButton.length; i++) {
      //     $(bagButton[i]).on('click', checkStock());
      //     function checkStock () {
      //       if (product.stock >= 1) {
      //         product.stock = product.stock-1;
      //       }
      //       else {
      //         return $(`#${product.id}`).hide()
      //       }
      //       }
      //   }
      /*----------------------------------------------------------------------------------------------------------*/
      
      
      let dataArrayFiltered = []
      
      //Once the "APPLY FILTERS" button is clicked:
      $("#apply-filter").click(function (event) {

        //User-specified maximum price
        let max = parseInt($('#range').val());

        //Creates an array of colors selected by the user
        let colorArray = []
        colorArray = $("input:checkbox:checked").map(function(){
          return $(this).attr('name').toLowerCase();
        }).get();

        dataArrayFiltered = dataArray.filter((product)=>{return (
          (product.type == type || type == 'all') 
          && 
          (product.price <= max)
          && 
          (colorArray.includes(product.colorPrimary)) || (colorArray.includes(product.colorSecondary) || (colorArray.length == 0) || (colorArray.length == 12))
          )
        });
        $('#product-grid').empty()
        for (let filteredProduct of dataArrayFiltered) {

          $('#product-grid').append(`<div class="card" id=${filteredProduct.id}>
                                      <img src="${filteredProduct.imgsrc}" class="item-img" alt="">
                                      <h1 class="name">${filteredProduct.title}</h1>
                                      <h3 class="colorway">${filteredProduct.colorway}</h3>
                                      <input type="image" src="img/in-wishlist.svg" class="itemcontainer add-wishlist" />
                                      <h2 class="price itemcontainer">$ ${filteredProduct.price}</h2>
                                      <input type="image" src="img/in-bag.svg" class="itemcontainer add-bag"/>
                                      <p class="reviews"> ${filteredProduct.reviews} 🔥</p> 
                                    </div>`)
        }




      })                

      $("#reset-filter").click(function (event) { 
        $('#product-grid').empty()
        for (const initial of dataArray){
          $('#product-grid').append(`<div class="card" id=${initial.id}>
                                      <img src="${initial.imgsrc}" class="item-img" alt="">
                                      <h1 class="name">${initial.title}</h1>
                                      <h3 class="colorway">${initial.colorway}</h3>
                                      <input type="image" src="img/in-wishlist.svg" class="itemcontainer add-wishlist" />
                                      <h2 class="price itemcontainer">$ ${initial.price}</h2>
                                      <input type="image" src="img/in-bag.svg" class="itemcontainer add-bag"/>
                                      <p class="reviews"> ${initial.reviews} 🔥</p> 
                                    </div>`)
        }
        
        
      })


    }//cierra el for loop

    //------------------------- STOCK (no funciona) ------------------------
    // $(".add-bag").click(function productStock(){
    //   let id = $(".add-bag").parent('div').attr('id')
      
    //   console.log(this[id-1].stock);
      // if (dataArray[id - 1].stock >= 1) {
      //   dataArray[id - 1].stock = dataArray[id - 1].stock-1;
      //         }
      // else {
      //           return $(`#${id - 1}`).hide()
      //         }
            // })

      



  } 
})



// $(".reviews").click(function () {
//   let reviewNum = parseInt(this.innerText);
//   console.log(reviewNum)
  
//   if (this.style.color == "black") {
//     this.style.color = orange;
//     this.style.fontWeight = "bold";

//     function addReview () {
//       // console.log(reviewNum);
//       let reviewId = $(this.attr('id'))
//       console.log(reviewId)
//       $(".reviews").html(reviewNum + 1);
//     }

//     addReview();
//   }


/*----------------------------------------------------------------------------------------------------------
Executes the following once the DOM is loaded
----------------------------------------------------------------------------------------------------------*/
$(document).ready(function(){
  let bagButton = $(".add-bag"); 
  /*----------------------------------------------------------------------------------------------------------
  UTILIZING A JQUERY SELECTOR, THIS LOOP ITERATES OVER ALL PRODUCTS ADD TO BAG BUTTONS
  functionalities:
  -Obtain data form clicked elements
  -Creates an array with all items in customer's bag
  -Creates a item counter 
  -Creates alerts for when user adds item to bag
  -Shows customer all items in bag and a subtotal
  -Saves items from bag in local storage
  -
  ---To improve: Check stock at the beginning of the loop with a conditional statement and update stock at the end.
    Tax and shipping prices are going to be displayed on checkout page, which I haven't started yet.

    

  ----------------------------------------------------------------------------------------------------------*/

    
  for (let i = 0; i < bagButton.length; i++) {
  
    $(bagButton[i]).on('click', addToBagEvent);
    function addToBagEvent (event) {
      
      
      // if (checkStock()) {

      let bagButtonClicked = event.target
      let addItem = bagButtonClicked.parentElement

      // let itemPrice = addItem.getElementsByClassName('price')[0].innerText;
      let itemPrice = $(this).parent().find('h2').html()
      // let itemName = addItem.getElementsByClassName('name')[0].innerText;
      let itemName = $(this).parent().find('h1').html()

      let itemImgSrc = $(this).parent().find('img').attr('src');
      let itemColorway = $(this).parent().find('h3').html()

      //Once an product's bag icon is clicked, that items price, name, and imgsrc is pushed into the bagArray
      bagArray.push({itemName, itemColorway, itemPrice, itemImgSrc})    
      
      /*----------------------------------------------------------------------------------------------------------
      THIS SHORT SNIPPET IS UTILIZED FOR THE ITEMS COUNTER ON TOP OF THE BAG ICON INSIDE THE NAVBAR.
      Functionality:
      -Allows users to easily see how many items are inside their bag.
      ---To improve: Make it so that the green circle is not displayed when bagCounter < 1.
      ----------------------------------------------------------------------------------------------------------*/
      bagCounter = parseInt(bagArray.length);
      $("#counter").empty().append(bagCounter)

      /*----------------------------------------------------------------------------------------------------------
      TOAST TO SHOW ITEMS IN BAG, TOTAL, AND A BUTTON TO GO TO CHECKOUT
      Functionalities:
      - Creates Toast with all items in bagArray (array containing all elements in the cart)
      - Shows price for each item & total
      - Includes a button to go to checkout page
      ---To improve: styling, colorway, size, show only 1 shoe of each type and add a quantity number, etc
      ----------------------------------------------------------------------------------------------------------*/
      let htmlBagAlert = ``;
      $.each(bagArray, function()
      {
        htmlBagAlert += `<div class='bag-item'>
                          <img class='bagalert-img' src="${this.itemImgSrc}">
                          <h2>${this.itemName}</h2>
                          <h4>${this.itemColorway}</h4>
                          <h3>${this.itemPrice}</h3>
                          <input class='remove' type="image" src="img/trash.svg"/>
                          <br>
                        </div>` 
      });
      
      $("#bag, #counter").click(function(){
        Swal.fire({
          title: 'Your Bag',
          width: 800,
          showLoaderOnConfirm: false,
          confirmButtonText: 'Go To Payment Method',
          showCloseButton: true,
          confirmButtonColor: '#3085d6',
          
          html: `<hr> <br> ${htmlBagAlert}`+
          `<br>
          Your current total is: $${bag}`,
          //Need to add item name, img, price, qtty, total
        }).then(function (result) {
          if (result.isConfirmed) {
            //NUEVO, HASTA LINEA 118
            let num = 0
            // for (const identificator of bagArray) {
            //   num++
            //   localStorage.setItem(num, JSON.stringify({identificator}))
            //   }
            for (let i = 0; i <= bagArray.length; i++) {
              num++
              localStorage.setItem(num, JSON.stringify(bagArray[i]))
              }
            window.location = "checkout.html"
          }
        })
      },)

      
      /*----------------------------------------------------------------------------------------------------------
      TOAST NOTIFICATION TO ALERT USER THAT AN ITEM HAS BEEN ADDED TO THE SHOPPING BAG
      Functionalities:
      - Creates timed Toast notification displaying item name
      ----------------------------------------------------------------------------------------------------------*/
      Swal.fire({
        position: 'bottom-end',
        toast:true,
        icon: 'success',
        background: 'white',
        html: `<b>${itemName}</b> is now in your bag!`,
        showConfirmButton: false,
        timer: 2000,
      }
      );

      updateBag()
      localStorage.setItem('total', JSON.stringify(bag))

        //add tax
    // }
    
  }//End of for Loop
}

//Updates total 
function updateBag () {
  let bagButtonClicked = event.target
  let addItem = bagButtonClicked.parentElement
  let itemPrice = parseFloat(addItem.getElementsByClassName('price')[0].innerText.substring(2))
  bag = bag + itemPrice
}

  /*----------------------------------------------------------------------------------------------------------
  USE OF TOGGLE TO SHOW/HIDE PRODUCT FILTERS 
  ----------------------------------------------------------------------------------------------------------*/
  $(".filterbtn-container").click(function(){
    $(".sidebar").slideToggle(500)
    $(".filterbtn-container").css({
      "width":"15rem"
    })
  })
  
  ///THIS IS TESTING WISHLIST POPUP
  let wlArray = []
  let wishlistButton = $(".add-wishlist"); 
    for (let i = 0; i < wishlistButton.length; i++) {
      $(wishlistButton[i]).on('click', addToWishlistEvent);
      function addToWishlistEvent (event) {
        // let wishlistButtonClicked = event.target
        // let cardItem = wishlistButtonClicked.parentElement
        let wlItemPrice = $(this).parent().find('h2').html()
        let wlItemName = $(this).parent().find('h1').html()
        let wlItemImgSrc = $(this).parent().find('img').attr('src');
        let wlItemColorway = $(this).parent().find('h3').html()

        wlArray.push({wlItemName, wlItemColorway, wlItemPrice, wlItemImgSrc})    

        let htmlWLAlert = ``;
        $.each(wlArray, function()
        {
          htmlWLAlert += `</div class='wl-tiem'>
                            <img class='bagalert-img' src="${this.wlItemImgSrc}">
                            <h2>${this.wlItemName}</h2>
                            <h4>${this.wlItemColorway}</h4>
                            <h3>${this.wlItemPrice}</h3>
                            <button type='submit' class='fromwl-tobag' >Add To Bag</button>
                            <input class='remove' type="image" src="img/trash.svg"/>
                            <br>
                          </div>`
          $(".fromwl-tobag").click( () => {
            bagArray.push(this)
            wlArray.remove(this)

          })
        });


        



        $("#wishlist").click(function(){
        Swal.fire({
          title: 'Your Wishlist',
          showLoaderOnConfirm: false,
          html: `<hr> <br> ${htmlWLAlert}`,
          width: 800,
          showCloseButton: true,
        })})

        $(".add-wishlist").click(function(){
          Swal.fire({
            position: 'top-end',
            toast:true,
            icon: 'success',
            background: 'white',
            html: `<b>${wlItemName}</b> is now in your Wish List!`,
            showConfirmButton: false,
            timer: 2000,
          }
          )});

    }
  }
























  /*----------------------------------------------------------------------------------------------------------
  SAVING ITEMS IN BAG TO LOCAL STORAGE
  ----------------------------------------------------------------------------------------------------------*/
  // let num = 0
  // for (const identificator of bagArray) {
  //   num++
  //   if (identificator.itemName === itemName) {
  //     localStorage.setItem(itemName + num, JSON.stringify({identificator}))
  //   }
  // }

  //lo pase a cuando hago click en el boton de ir al checkout para pasarlo a checkout.html
  /*----------------------------------------------------------------------------------------------------------
  TOAST NOTIFICATION TO ALERT USER THAT AN ITEM HAS BEEN ADDED TO THE SHOPPING BAG
  Functionalities:
  - Creates timed Toast notification displaying item name
  ----------------------------------------------------------------------------------------------------------*/

  
  
  

/*----------------------------------------------------------------------------------------------------------
SMOOTH SCROLL JQUERY PLUGIN 
Functionalities:
- Smooth scroll to contact section from navbar
----------------------------------------------------------------------------------------------------------*/

  let contactLink = $('#scroll-contact');
  let contactForm = $("#contact-form")

  contactLink.on('click', function() {
    $.smoothScroll({
      scrollTarget: contactForm,
      speed: 800,
    });
    return false;
  });









    /*----------------------------------------------------------------------------------------------------------
  Manipulates DOM depending on whether the review button is clicked (upvoted) or deselected.
  Funcionaba antes pero tengo que actualizarla...
  ----------------------------------------------------------------------------------------------------------*/
 orange = "#FF8021"
    
  $(".reviews").click(function () {
    let reviewNum = parseInt(this.innerText);
    console.log(reviewNum)
    
    if (this.style.color == "black") {
      this.style.color = orange;
      this.style.fontWeight = "bold";

      function addReview () {
        // console.log(reviewNum);
        let reviewId = $(this.attr('id'))
        console.log(reviewId)
        $(".reviews").html(reviewNum + 1);
      }

      addReview();
    }
    
    // else {
    //   this.style.color = "black";
    //   this.style.fontWeight = "normal";

    //   function subtractReview() {
    //     // console.log(reviewNum);
    //     $(".reviews").html(reviewNum - 1);
    //   }
    //   subtractReview();
    // }
  });


  $("#send").click(function(){
    let userName = $("input[name=username]").val()
    Swal.fire({
      title: 'Your message has been sent!',
      showLoaderOnConfirm: false,
      html: `We will get back to you shortly, ${userName} 😉`,
      width: 800,
      showCloseButton: true,
    })})




//PARA QUE LA BARRA DE FILTROS NO VAYA HASTA ABAJO DEL TODO.
//SI ME SOBRA TIEMPO PUEDO INTENTAR AGREGAR ESTA FUNCIONALIDAD.

  //   $.fn.scrollTo = function (position) {  
  //     var $this = this,
  //       $window = $(window);
  //         $(window).scroll(function (e) {
  //         if ($(window).scrollTop() > position) {
  //           $this.css({
  //                 position: 'absolute',
  //                 top: position
  //             });
  //         } else {
  //           $this.css({
  //                 position: 'fixed',
  //                 top: 0
  //             });
  //         }
  //     });
  // };

  // $('.filterbtn-container').scrollTo(2300);
  
  // $('.sidebar').scrollTo(2300);


});//$(document).ready CLOSING TAG

function newProduct(id, title, colorway, brand, collab, type, reviews, colorPrimary, colorSecondary, stock, price, imgsrc){
  this.id = id;
  this.title = title;
  this.colorway = colorway;
  this.brand = brand;
  this.collab = collab;
  this.type = type;
  this.reviews = reviews;
  this.colorPrimary = colorPrimary;
  this.colorSecondary = colorSecondary;
  this.stock = stock;
  this.price = price;
  this.imgsrc = imgsrc;

  this.getId = function(){
      return this.id;
   }
  this.getTitle = function(){
     return this.title;
  }
  this.getColorway = function(){
      return this.colorway;
  }
  this.getBrand = function(){
      return this.brand;
  }
  this.getCollab = function(){
      return this.collab;
  }
  this.getType = function(){
      return this.type;
  }
  this.getReviews = function(){
      return this.reviews;
  }
  this.getColorPrimary = function(){
    return this.colorprimary;
  }
  this.getColorSecondary = function(){
      return this.colorsecondary;
  }
  this.getStock = function(){
      return this.stock;
  }
  this.getPrice = function(){
      return this.price;
  }
  this.getImgSrc = function(){
      return this.imgsrc;
  }
}

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

/// Filters ANDAN TODOS!!!

//Type Filter
// let filteredType
// $('#typeForm input').on('change', function() {
//   filteredType = $('input[name=type]:checked', '#typeForm').val()
//   console.log(filteredType); 
//  });


 //Price Filter
//Appends Price range (max)
function updateTextInput(max) {
  $('#textInput').value=max; 
  $('#textInput').empty().append("$0 - $" + max)
}
$("#range").change(function (e) {updateTextInput(this.value)})

//Color Filter

// let colorArray = []
// for (let i =0; i<= colorArray.length; i++) {
//   $(".colorFilter").change(function (e) { 
//     colorArray.push(e.target.name.toLowerCase())
//     console.log(colorArray)
//   })
// }







///SCROLL TO CONTACT SECTION



// function ScrollToContact() {
//   document.getElementsByTagName('h2')[3].scrollIntoView();
//   $('#scroll-contact')[3].scrollIntoView();
  // will scroll to 4th h3 element
// }

// <div id="my_element">
// </div>




// contactLink.scrollIntoView({
//   behavior: "smooth",
  // inline: "#contact-form",
// });


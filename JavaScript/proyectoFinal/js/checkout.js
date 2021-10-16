/*----------------------------------------------------------------------------------------------------------
THIS FILE CONTAINS ALL THE NECESSARY JS FOR CHECKOUT 
----------------------------------------------------------------------------------------------------------*/

$(document).ready(function(){
    localStorage.removeItem(localStorage.length)
})


//   console.log(localStorage.getItem(num))
let checkoutItems = []
for (let i = 0; i < localStorage.length; i++) {
    //Here key gives us the key for a specific item in localStorage and assigns it to a
    //variable num
    let num = localStorage.key(i); 
    //Now we get the entire object from localStorage but it is still in JSON format
    let retrievedObject = localStorage.getItem(num);
    // localStorage.removeItem();

    //We parse it in order to get a JS object
    let retrievedObjectParsed = JSON.parse(retrievedObject)
    
    //Finally we push into an empty array that will end up containing all objects
    //in localStorage
    checkoutItems.push(retrievedObjectParsed)
}console.log(checkoutItems)

//DON'T THINK I NEED THIS. WHEN I USE THIS I GET AN EXTRA UNDEFINED ELEMENT THAT
// //SHOWS UP AS AN ERROR ON CONSOLE
let checkoutItemsInfo = []
for (let iterator = 0; iterator <= checkoutItems.length; iterator++) {
    // console.log(checkoutItems[iterator].identificator)
    // console.log(Object.values(checkoutItems[iterator]))
    // console.log(checkoutItems[iterator])
    checkoutItemsInfo.push(checkoutItems[iterator])
    // let result = objArray.map(a => a.foo);
    // checkoutItemsInfo.push(someArray)
    // console.log(checkoutItemsInfo)
}

// let iterator
// for (iterator in checkoutItems[iterator].identificator) {
//     console.log(checkoutItems[iterator].identificator);
// }
    

//IF I DECIDE TO ERASE THE LAST LOOP THAT POPULATES CHECKOUTITEMSINFO 
//I NEED TO CHANGE CHECKOUTINTEMSINFO HERE TO CHECKOUTINTEMS
let itemQtty = 1

for (let i = 0; i < checkoutItems.length; i++) {
    let parentNode = $("#checkout-grid");

    //ACA TENGO QUE AGREGAR QTTY Y .HIDE SI EL ELEMENTO YA EXISTE


    $(parentNode).append(`
        <div class="checkout-item">
            <img src="${checkoutItemsInfo[i].itemImgSrc}" class="co-itemImg" alt="">
            <div class="item-section2"> 
                <h1 class="co-name">${checkoutItemsInfo[i].itemName}</h1>
                <h3 class="co-colorway">${checkoutItemsInfo[i].itemColorway}</h3>
            </div>
            <h3 class='qtty'>X qtty${itemQtty}</h3>
            <h2 class="co-price">${checkoutItemsInfo[i].itemPrice}</h2>
            <input id='co-remove' type="image" src="img/trash.svg"/>
        </div>
        <hr class="co-separator">
    `);
}

function generateId() {
    var orderId = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++)
        orderId += possible.charAt(Math.floor(Math.random() * possible.length));
    return orderId;
  }

$("#finalize").click(function(){
    window.localStorage.clear();
    Swal.fire({
      title: 'Thank you for your order!',
      width: 1200,
      height: 1200,
      allowOutsideClick: false,
      showLoaderOnConfirm: false,
      confirmButtonText: 'Take me to the homepage',
      confirmButtonColor: '#3085d6',
      html: `Here is your order ID: ${generateId()}`+
      `<br>
      We will get back to you as soon as we have more information
      regarging your order's shipping`,
    }).then(function (result) {
      if (result.isConfirmed) {
        window.location = "http://localhost:8000"}})})


let pretotalAmt = localStorage.getItem('total');
console.log(pretotalAmt)
pretotalAmt = JSON.parse(pretotalAmt)

$('#pretotal-amount').empty().append(`$${pretotalAmt}`)
$('.shipping').empty().append(`$${shipping}`)


$('#apply-coupon').click( function () {
    let coupon = $('input[name=coupon]').val()
    if (coupon.toLowerCase() === 'coderhouse') {
        shipping = 0
        $('.shipping').empty().append(`$${shipping}`)
        $('#total').empty().append(`$${(taxValue * pretotalAmt)+ pretotalAmt + shipping}`)
        Swal.fire({
            title: 'Your coupon has been applied!',
            toast:true,
            position: 'bottom-end',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            showLoaderOnConfirm: false,
          })
    }
    else {
        shipping = 20;
        $('.shipping').empty().append(`$${shipping}`);
        $('#total').empty().append(`$${(taxValue * pretotalAmt)+ pretotalAmt + shipping}`);
        Swal.fire({
        title: 'Invalid coupon...',
        toast:true,
        position: 'bottom-end',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
        allowOutsideClick: false,
        showLoaderOnConfirm: false,})}
})

$('.tax').empty().append(`$${taxValue * pretotalAmt}`)
$('#total').empty().append(`$${(taxValue * pretotalAmt)+ pretotalAmt + shipping}`)

// $(".co-remove").click(function (){
//     console.log("removed...")
//     $(".co-remove").parent().hide();
//     $(".wl-item").hide()
//   })

function mostrarProductos(){
    borrarElemento("#productos div");
    cate = $('input:radio[name=cat]:checked').val();//Se toma la categoria seleccionada
    data.forEach(item => {
        if(rd == false && cate === item.getCategoria() || rd && item.getDestacado()){//Si el producto coincide en la categoria seleccionada se renderiza
            crearTag("div", 'vista', "#productos");//Se crea un div para la tarjeta del producto
            crearElemento("h2", item.getNombre(), ".vista:last-child");//nombre
            agregarImagen(item.getId());//imagen
            crearElemento("h2", "$"+item.getPrecio(), ".vista:last-child");//precio
            crearTag("div", 'containerColor', ".vista:last-child");//se crea contenedor de area de seleccion de color
            crearElemento("p", "Color", "div.vista:last-child div.containerColor");//texto color
            crearTag("select", "form-control color"+item.getId(), "div.vista:last-child div.containerColor");//se crea un select para la seleccion de color
            item.getColor().forEach(element => {crearElementoSelect("option", element, ".vista:last-child select.color"+item.getId())});//colores
            crearTag("div", 'containerTalla', ".vista:last-child");//se crea contenedor de area de seleccion de talla
            crearElemento("p", "Talla", "div.vista:last-child div.containerTalla");//texto talla
            crearTag("select", "form-control talla"+item.getId(), "div.vista:last-child div.containerTalla");//se crea un select para la seleccion de talla
            item.getTalla().forEach(element => {crearElementoSelect("option", element, ".vista:last-child select.talla"+item.getId())});//tallas
            cantidad("cntd"+item.id);//Seleccion de cantidad
            $(".vista:last-child").append("<button onclick=agregarCarrito('"+item.getId()+"') type='button' class='btn btn-warning' id="+item.getId()+"'>Agregar al Carrito</button>" ); //agregar al carrito 
            $(".vista:last-child").hide();
            $(".vista:last-child").fadeIn(1000);
        }
    })
    }

function callbackJSON(resp, state){
    data =[];
    if(state === "success"){
        let c=0;
        for (const i of resp) {
            data[c] = new listProductos(i.id, i.nombre, i.precio, i.categoria, i.Color, i.Talla, i.destacado)
            c++;
        }//Se guarda en data todo el jason
        mostrarProductos();
        
}}


var articulos = [];

$.ajax({
  url: dataJSON,
  dataType: "json",
  success: (response) => {
    cargarDatos(response, articulos);
  },
});

function responseJSON(response, state){
  data =[];
  if(state === "success"){
      let c=0;
      for (let i of response) {
          data[c] = new newProduct(i.id, i.title, i.colorway, i.brand, i.collab, i.type, i.reviews, i.colorPrimary, i.colorSecondary, i.stock, i.price, i.imgsrc)
          c++;
        }//Se guarda en data.json
      renderItem();
    }
}

function cargarDatos(productos, articulos) {
  productos.forEach((producto, indice) => {
    var articulo = new Articulo(
      producto.id,
      producto.nombre,
      producto.precio,
      producto.destacado,
      producto.imagen
    );
    articulos.push(articulo);
    })}

renderItem()



const productCard = `<div class="card">
                      <img src="${storeItems[i].imgsrc}" class="item-img" alt="">
                      <h1 class="name">${storeItems[i].title}</h1>
                      <h3 class="colorway">${storeItems[i].colorway}</h3>
                      <input type="image" src="img/in-wishlist.svg" class="itemcontainer add-wishlist" id="wishlistButton-card"/>
                      <h2 class="price itemcontainer">$ ${storeItems[i].price}</h2>
                      <input type="image" src="img/in-bag.svg" class="itemcontainer add-bag" id="bagButton-card"/>
                      <p class="reviews"> ${storeItems[i].reviews}</p> 
                    </div>`

function renderItem(){
  let parentNode = $("#product-grid");
  $(parentNode).append();
  $.ajax({url:"js/data.json", datatype:"json", success: responseJSON})//Se toman los datos del Json para mostrar destacados
}


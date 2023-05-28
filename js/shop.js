
let products = [
    {
         id: 1,
         name: 'cooking oil',
         price: 10.5,
         type: 'grocery',
         offer: {
             number: 3,
             percent: 20
         }
     },
     {
         id: 2,
         name: 'Pasta',
         price: 6.25,
         type: 'grocery'
     },
     {
         id: 3,
         name: 'Instant cupcake mixture',
         price: 5,
         type: 'grocery',
         offer: {
             number: 10,
             percent: 30
         }
     },
     {
         id: 4,
         name: 'All-in-one',
         price: 260,
         type: 'beauty'
     },
     {
         id: 5,
         name: 'Zero Make-up Kit',
         price: 20.5,
         type: 'beauty'
     },
     {
         id: 6,
         name: 'Lip Tints',
         price: 12.75,
         type: 'beauty'
     },
     {
         id: 7,
         name: 'Lawn Dress',
         price: 15,
         type: 'clothes'
     },
     {
         id: 8,
         name: 'Lawn-Chiffon Combo',
         price: 19.99,
         type: 'clothes'
     },
     {
         id: 9,
         name: 'Toddler Frock',
         price: 9.99,
         type: 'clothes'
     }
]

let cartList = [];

let cart = [];

let total = 0;


// Exercise 1
function buy(id) {
                for (let i = 0; i <= products.length - 1; i++) {
                    if (i === (id - 1)) {
                        cartList.push(products[i])
                    }
                }                      
                document.getElementById("count_product").innerHTML = cartList.length;
                generateCart();

                //console.log(cartList)
                console.log("Hola Mundo Ejercicio 1")
}

// Exercise 2
function cleanCart() {
                cartList = [];   // vacia el cartList
                generateCart();   
                document.getElementById("count_product").innerHTML=cartList.length; 
                console.log("Hola Mundo Ejercicio 2")

}

// Exercise 3
function calculateTotal(cart) {
                total = 0;
                for (let i = 0; i < cart.length; i++) {           
                    total += cart[i].subtotalWithDiscount;
                    console.log("Hola Mundo Ejercicio 3")
                    }
                return total;
                
}


// Exercise 4
function generateCart() {
                var cart = cartList.map(function(item) { // crea array cart
                var newItem = {};
                newItem.name = item.name;
                newItem.type = item.type;
                newItem.price = item.price;
                newItem.offer = item.offer;
                newItem.quantity = 1;
                newItem.subtotal = item.price;
                newItem.subtotalWithDiscount = item.price;
                return newItem;
                });
            
                // Revisa cantidad y precios con descuentos por volumen
                for (let i = 0; i < cart.length; i++) {                    
                for (let j = i + 1; j < cart.length; j++) {
                    if (cart[i].name === cart[j].name) {                   
                    cart[i].quantity += 1;                               
                    cart[i].subtotal += cart[j].price;                   
                    cart[i].subtotalWithDiscount += cart[j].price;       
                    cart.splice(j, 1);                                   
                    j--;                                                
                    }                                                    
                }
                }
        
                applyPromotionsCart(cart);
                calculateTotal(cart);
                printCart(cart);
                
                console.log(total); 
                console.log("Hola Mundo Ejercicio 4")                                 
                console.log(cart);
  }
  

// Exercise 5
function applyPromotionsCart(cart){
                for (let i=0; i < cart.length; i++){
                if (cart[i].name === 'cooking oil' && cart[i].quantity >2){    
                    cart[i].subtotalWithDiscount = (cart[i].price= 10);    // descuento del cooking oil 
                }
                if(cart[i].name === 'Instant cupcake mixture' && cart[i].quantity >=10){       // descuento del Instant cupcake mixture 
                    //cart[i].subtotalWithDiscount = (cart[i].price*2/3)*cart[i].quantity;          
                    cart[i].subtotalWithDiscount = (cart[i].price * 2 * cart[i].quantity) /3;   
                    console.log("Hello World Ejercicio 5")                               
                }      
        }  
}

// Exercise 6

function printCart(cart) {

    document.getElementById('total_price').innerHTML = total;      // imprime precio total
    let table = document.getElementById('cart_list');              
    let listaCompra = [];                                          

    for(i=0; i<cart.length;i++){                                    // recorremos cart
        if (cart[i].subtotalWithDiscount){                          
        let fila = `<tr>                                            
            <td>${cart[i].name}</td>
            <td>${cart[i].price}</td>
            <td>${cart[i].quantity}</td>
            <td>${cart[i].subtotalWithDiscount}</td>
            </tr>`
        listaCompra.push(fila);
        }                                                                
    
    } 
    
    table.innerHTML = listaCompra.join('');  // añadimos '' a la tabla
}


function open_modal(){
	console.log("Open Modal");
    
}




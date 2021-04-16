let carts = document.querySelectorAll('.btn-shop');


let products = [
    {
        productName : "Sac à main couffin",
        price : 70,
        tag : "arnel-hasanovic-jJqd2mc-M9Q-unsplash.jpg",
        inCart : 0
    },
    {
        productName : "Sac Gucci",
        tag : "james-ree-ZmeFtu11Hpc-unsplash.jpg",
        price : 56,
        inCart : 0
    },
    {
        productName : "Lunettes optiques",
        price : 105,
        tag : "lensabl-0GfPlommtxM-unsplash.jpg",
        inCart : 0
    },
    {
        productName : "Bague",
        price : 99,
        tag : "sabrinna-ringquist-kuko1hX_kXw-unsplash.jpg",
        inCart : 0
    },
    {
        productName : "Lunettes Rayban",
        price : 99,
        tag : "sincerely-media-d05w6_7FaPM-unsplash.jpg",
        inCart : 0
    },
    {
        productName : "Casquette pour homme",
        price : 99,
        tag : "yang-deng-2loKxdi6Hmo-unsplash.jpg",
        inCart : 0
    },
    {
        productName : "Sac rouge",
        price : 99,
        tag : "artem-beliaikin-hg9da2n4QD8-unsplash.jpg",
        inCart : 0
    },
    {
        productName : "Sac pastel",
        price : 99,
        tag : "creative-headline-APNnyM36puU-unsplash.jpg",
        inCart : 0
    },
    {
        productName : "Bague de fiancialles",
        price : 99,
        tag : "sabrinna-ringquist-ZWwC_6VfdAU-unsplash.jpg",
        inCart : 0
    },
]



for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log('the product clicked is', product);
    let productNumbers = localStorage.getItem('cartNumbers');
  
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('span').textContent = 1;
    }

    setItems(product);
  
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined){
            cartItems =  {
                ...cartItems,
                [product.tag] : product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
        [product.tag] : product
    }
  
    }
   
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log('the product price is', product.price);

    let cartCost = localStorage.getItem('totalCost');
    
    console.log('My cartCost is', cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products-container');
    let cartCost = localStorage.getItem('totalCost');
    if (cartItems && productContainer) {
        
        productContainer.innerHTML = `
            <div class="container-fluid products-container my-5">
                <div class="row product-header">
                <div class="col-md-2"></div>
                <div class="col-md-3 product-title h3">Produit</div>
                <div class="col-md-2 product-price h3">Prix unitaire</div>
                <div class="col-md-2 quantity h3">Quantité</div>
                <div class="col-md-2 subtotal h3">Sous total</div>
                <div class="col-md-1 delete-item"></div>
            </div>
        `;
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `

            
                <div class="row py-2">
                    <div class="col-md-2"> <img class="product-image" src="/images/${item.tag}"></div>
                    <div class="col-md-3 h5"> ${item.productName} </div>
                    <div class="col-md-2 h5"> ${item.price},00 DT</div>
                    <div class="col-md-2 h5"> <i class="fas fa-minus-circle"></i>
                    ${item.inCart}
                    <i class="fas fa-plus-circle"></i></div>
                    <div class="col-md-2 h5">${item.inCart * item.price},00 DT</div>
                    <div class="col-md-1 delete"><i class="fas fa-trash-alt"></i></div>
                </div>
            </div> 
           
            `
        })

        productContainer.innerHTML += `
        <div class="container-fluid basketTotalContainer my-5">
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-3"></div>
                <div class="col-md-2"></div>
                <div class="col-md-2"></div>
                <div class="col-md-2 h2">Total</div>
                <div class="col-md-1"></div>
            </div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-3"></div>
                <div class="col-md-2"></div>
                <div class="col-md-2"></div>
                <div class="col-md-2 h3">${cartCost},00 DT</div>
                <div class="col-md-1"></div>
            </div>
         </div>
        `

    }
}

// let removedCarts = document.querySelectorAll('.delete')

// for (let i=0; i<removedCarts.length; i++) {
//     removedCarts[i].addEventListener('click', () => {
//         deleteItems(products[i]);
        
        
//     })
// }
// function deleteItems(product) {  
//     localStorage.removeItem(product);
// }

function deleteAll() {
    let clearCart = document.querySelector('.btn-delete-cart');
    let productContainer = document.querySelector('.products-container');
    console.log(clearCart);
    clearCart.addEventListener('click', () => {
        localStorage.clear();
        productContainer.innerHTML = '';
    })
}

onLoadCartNumbers(); 
displayCart();
deleteAll();
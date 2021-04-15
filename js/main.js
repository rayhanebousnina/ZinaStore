let carts = document.querySelectorAll('.btn-shop');

let products = [
    {
        productName : "Sac cuir",
        price : 70,
        tag : "tag1",
        inCart : 0
    },
    {
        productName : "Hoody",
        tag : "tag2",
        price : 56,
        inCart : 0
    },
    {
        productName : "Tshirt",
        price : 105,
        tag : "tag3",
        inCart : 0
    },
    {
        productName : "lunettes",
        price : 99,
        tag : "tag4",
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

onLoadCartNumbers(); 
let carts = document.querySelectorAll('.btn-shop');

let products = [
    {
        productName : "Sac cuir",
        price : 56,
        inCart : 0
    },
    {
        productName : "Sac cuir",
        price : 56,
        inCart : 0
    },
    {
        productName : "Sac cuir",
        price : 56,
        inCart : 0
    },
    {
        productName : "Sac cuir",
        price : 56,
        inCart : 0
    },
]



for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
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
    console.log("inside of setItems function");
    console.log("my product is ", product);
}

onLoadCartNumbers(); 
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('#list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [{
        id: 1,
        name: 'GeForce RTX 3050',
        image: 'item1.jpg',
        price: 18000,
        sold: '5.1k Sold',
        ratings: '4.2k Ratings'

    },
    {
        id: 2,
        name: 'GeForce RTX 3050Ti',
        image: 'item2.jpg',
        price: 20000,
        sold: '6k Sold',
        ratings: '4k Ratings'
    },
    {
        id: 3,
        name: 'GeForce RTX 4060',
        image: 'item3.jpg',
        price: 52000,
        sold: '5.8k Sold',
        ratings: '4.6k Ratings'
    },
    {
        id: 4,
        name: 'GeForce RTX 4070',
        image: 'item4.jpg',
        price: 55000,
        sold: '4.1k Sold',
        ratings: '3k Ratings'
    },
    {
        id: 5,
        name: 'BlackWidow V3 Pro',
        image: 'item5.jpg',
        price: 7999,
        sold: '8.2k Sold',
        ratings: '6.3k Ratings'
    },
    {
        id: 6,
        name: 'Razer Blackwidow',
        image: 'item6.jpg',
        price: 6500,
        sold: '9.1k Sold',
        ratings: '8.2k Ratings'
    },
    {
        id: 7,
        name: 'Razer Huntsman V2',
        image: 'item7.jpeg',
        price: 12995,
        sold: '2k Sold',
        ratings: '1.2k Ratings'
    },
    {
        id: 8,
        name: 'Razer PBT Keycap',
        image: 'item8.jpg',
        price: 2895,
        sold: '9k Sold',
        ratings: '7.2k Ratings'
    },
    {
        id: 9,
        name: 'XTRFY H1',
        image: 'item9.png',
        price: 6708,
        sold: '5.1k Sold',
        ratings: '4.8k Ratings'
    },
    {
        id: 10,
        name: 'XTRFY H2',
        image: 'item10.png',
        price: 7495,
        sold: '1k Sold',
        ratings: '555 Ratings'
    },
    {
        id: 11,
        name: 'Logitech G502',
        image: 'item11.png',
        price: 4160,
        sold: '7.6k Sold',
        ratings: '7k Ratings'
    },
    {
        id: 12,
        name: 'Logitech G402 Hyperion Fury',
        image: 'item12.png',
        price: 2182,
        sold: '8.8k Sold',
        ratings: '6k Ratings'
    },
];
let listCarts = [];

function showproducts() {
    let prods = "";
    let card_prod = document.getElementById("list")
    products.forEach((value, key) => {
        prods += `
        <div class="d-inline-flex mx-1 my-3 justify-content-center">
              <div class="card" style="width: 18rem;">
              <img src="./images/${value.image}" id="card-img" class="card-img-top" style="height: 150px">
              <div class="card-body bg-light">
                <p class="card-title" style="height:20px""><b>${value.name}</b></p>
                <p class="card-text"><b>Php ${value.price.toLocaleString()}</b></p>
                <p>${value.sold} <i class="fa-regular fa-square-check" style="color: #0d58d9;"></i> | ${value.ratings}</p>
                <button class="btn btn-primary" style="border-radius: 20px;" onclick="addToCard(${key})">Add To Cart</button>
              </div>
              </div>
              </div>`;
           
    });
    card_prod.innerHTML = prods;
}
showproducts();

function addToCard(key) {
    if (listCarts[key] == null) {
        listCarts[key] = products[key];
        listCarts[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>
                    <img src="./images/${value.image}" style="height: 50px">
                </div>
                <div>
                    <b>${value.name}</b>
                </div>
                <div style="width: 30px;">
                    ${value.price.toLocaleString()}
                </div>
                <div id="prod_quantity">
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div></li>`;
            listCart.appendChild(newDiv);
        }
    })
    total.innerText =(`₱ `)+totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    console.log(key, quantity);
    if (quantity == 0) {
        delete listCarts[key];
    } else {
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCard();
}
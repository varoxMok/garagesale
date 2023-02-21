const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuHamIcon = document.querySelector('.menu')
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleAsideCart)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleAsideCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}

const productList = []
productList.push({
    name: 'Bike 1',
    price: 80,
    image: 'https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1650034332160-CBURXWI9OWV3MRZ96DMM/Adam-Sklar-and-His-Super-Something-Gravel-Bike-1.jpeg?format=1000w'
})
productList.push({
    name: 'Bike 2',
    price: 100,
    image: 'https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1650034332160-CBURXWI9OWV3MRZ96DMM/Adam-Sklar-and-His-Super-Something-Gravel-Bike-1.jpeg?format=1000w'
})
productList.push({
    name: 'Bike 3',
    price: 70,
    image: 'https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1650034332160-CBURXWI9OWV3MRZ96DMM/Adam-Sklar-and-His-Super-Something-Gravel-Bike-1.jpeg?format=1000w'
})
productList.push({
    name: 'Bike 4',
    price: 90,
    image: 'https://images.squarespace-cdn.com/content/v1/535d346fe4b03ecd54f1fd25/1650034332160-CBURXWI9OWV3MRZ96DMM/Adam-Sklar-and-His-Super-Something-Gravel-Bike-1.jpeg?format=1000w'
})

function renderProducts (array) {
    for (product of array) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        const productInfoDiv = document.createElement('div')
        const productPrice = document.createElement('p')
        productPrice.innerText = '$ ' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
        const productFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg')
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        productFigure.appendChild(productImgCart)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productFigure)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard)
    }
}

renderProducts (productList)
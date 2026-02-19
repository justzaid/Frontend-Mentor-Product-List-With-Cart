// Cached elements
const addToCart = document.querySelectorAll('.addToCart')
const cartValue = document.querySelector('.cartValue')
const decrement = document.querySelectorAll('.decrement')
const increment = document.querySelectorAll('.increment')
const totalCartPriceEl = document.querySelector('.totalCartPrice')

// Variables
let numberOfItemsIncart = 0;
let totalCartPrice = 0;

// Functions



// Event listeners
addToCart.forEach((cart) => {
    cart.addEventListener('click', () => {
        const container = cart.closest('.imgButton')
        const selectedButton = container.querySelector('.addToCart')
        const revealButton = container.querySelector('.incDec')
        selectedButton.classList.add('hide')
        revealButton.classList.remove('hide')
    })
})

decrement.forEach((dec) => {
    dec.addEventListener('click', () => {
        const container = dec.closest('.incDec')
        const productCard = dec.closest('.productCard')
        const cardPrice = productCard.querySelector('.foodPrice')
        const buttonValue = container.querySelector('.buttonValue')
        // const quantity = document.querySelector('.quantity')

        if (buttonValue.textContent <= 0) {
            return
        } else {
            let incDecValue = Number(buttonValue.textContent)
            buttonValue.textContent = incDecValue - 1
            numberOfItemsIncart--
            cartValue.textContent = `Your Cart (${numberOfItemsIncart})`
            totalCartPrice = totalCartPrice - cardPrice.id
            totalCartPriceEl.textContent = `$${totalCartPrice}`

        }
    })
})

increment.forEach((inc) => {
    inc.addEventListener('click', () => {
        const container = inc.closest('.incDec')
        const productCard = inc.closest('.productCard')
        const cardPrice = productCard.querySelector('.foodPrice')
        const buttonValue = container.querySelector('.buttonValue')
        const addItemContainer = document.getElementById('cart-card')
        const foodTitle = productCard.querySelector('.foodTitle')
        
        let incDecValue = Number(buttonValue.textContent)
        incDecValue++
        buttonValue.textContent = incDecValue

        const blocker = addItemContainer.querySelector('.blocker')

        const cartCardSeperator = document.createElement('div')
        cartCardSeperator.classList.add('cartCardSeperator')
        blocker.appendChild(cartCardSeperator)

        const cartCardInfoContainer = document.createElement('div')
        cartCardInfoContainer.classList.add('cartCardInfoContainer')
        cartCardSeperator.appendChild(cartCardInfoContainer)

        const cartCardInfoTitle = document.createElement('p')
        cartCardInfoTitle.classList.add('cartCardInfoTitle')
        cartCardInfoTitle.textContent = foodTitle.textContent
        cartCardInfoContainer.appendChild(cartCardInfoTitle)

        const cartCardInfo = document.createElement('div')
        cartCardInfo.classList.add('cartCardInfo')
        cartCardInfoContainer.appendChild(cartCardInfo)

        const quantity = document.createElement('p')
        quantity.classList.add('quantity')
        quantity.textContent = incDecValue + 'x'
        cartCardInfo.appendChild(quantity)

        const originalItemPrice = document.createElement('p')
        originalItemPrice.classList.add('originalItemPrice')
        originalItemPrice.textContent = `@ ${cardPrice.textContent}`
        cartCardInfo.appendChild(originalItemPrice)

        const totalItemPrice = document.createElement('p')
        totalItemPrice.classList.add('totalItemPrice')
        let currentTotal = 0
        totalItemPrice.textContent = '$' + (currentTotal += Number(cardPrice.id))
        cartCardInfo.appendChild(totalItemPrice)

        const removeItem = document.createElement('div')
        removeItem.classList.add('removeItem', 'dot')
        cartCardSeperator.appendChild(removeItem)

        const removeIcon = document.createElement('img')
        removeIcon.src = "./assets/images/icon-remove-item.svg"
        removeIcon.alt = "remove item icon"
        removeItem.appendChild(removeIcon)

        const hr = document.createElement('hr')
        hr.classList.add('hr')
        blocker.appendChild(hr)

        numberOfItemsIncart++
        cartValue.textContent = `Your Cart (${numberOfItemsIncart})`
        totalCartPriceEl.textContent = `$${totalCartPrice += Number(cardPrice.id)}`
        
    })
})

document.addEventListener('scroll', () => {
    addToCart.forEach((cart) => {
        cart.classList.remove('hide')
    })
    const incDecButtons = document.querySelectorAll('.incDec')
    incDecButtons.forEach((button) => {
        button.classList.add('hide')
    })
})
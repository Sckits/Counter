'use strict'
import { createCounter } from "./create-counter";

const cart = document.getElementById("cart") as HTMLElement
const cartname = document.getElementById('cartname') as HTMLInputElement;

const submit = document.getElementById('submit') as HTMLButtonElement;
submit.addEventListener('click', addCart);

cartname.addEventListener('input', (event) => {
    if(event instanceof InputEvent && event.target instanceof HTMLInputElement) {
        submit.disabled = event.target.value.trim().length === 0;
    }
}, false);

cartname.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addCart();
        cartname.value = '';
    }
});


function addCart() {
    const name = cartname.value;
    if(name.trim().length > 0) {
        const newCart = createCounter(name);
        cart?.appendChild(newCart);
        cartname.value = '';
    }
}


// Initialization
const burger = createCounter("Burger");
cart.appendChild(burger);

const cocain = createCounter("Coca-Cola");
cart.appendChild(cocain);

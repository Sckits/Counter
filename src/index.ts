'use strict'
import { createCounter } from "./create-counter";

function ctrlButton() {
    submit.disabled = this.value.trim().length === 0;
}
cartname.addEventListener('input', ctrlButton, false);
ctrlButton.call(cartname);


var inputEl = document.getElementById('cartname');

document.querySelector('#cartname')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addCart('cartname');
        inputEl.value = '';
    }
});


const cart = document.getElementById("cart")

const burger = createCounter("Burger");
cart?.appendChild(burger);

const cocain = createCounter("Coca-Cola");
cart?.appendChild(cocain);

document.querySelector("#submit")?.addEventListener('click', addCart);

function addCart() {
    const nameInputElement = document.querySelector("#cartname");
    if(nameInputElement !== null && nameInputElement instanceof HTMLInputElement) {
        const name = nameInputElement.value;

        const newCart = createCounter(name);
        cart?.appendChild(newCart);
        inputEl.value = '';
    } else {
        console.error("Не найден инпут")
    }
}

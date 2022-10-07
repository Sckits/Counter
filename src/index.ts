'use strict'
import { createCounter } from "./create-counter";

function ctrlButton() {
    submit.disabled = this.value.trim().length === 0;
}
    cartname.addEventListener('input', ctrlButton, false);
    ctrlButton.call(cartname);


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
    } else {
        console.error("Не найден инпут")
    }
}

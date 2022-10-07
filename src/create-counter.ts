export function createCounter(name: string) {
    const rootElement = document.createElement("div");
    rootElement.className = "cart_box"

    const title = document.createElement("h2");
    title.innerText = name;
    rootElement.appendChild(title)

    const minus = document.createElement("button");
    minus.className = "minus"
    minus.innerText = "-"
    rootElement.appendChild(minus)

    const counterElement = document.createElement("p");
    counterElement.className = "counter";
    counterElement.innerText = "0"
    rootElement.appendChild(counterElement)

    const plus = document.createElement("button");
    plus.className = "plus"
    plus.innerText = "+"
    rootElement.appendChild(plus)

    const reset = document.createElement("button");
    reset.className = "reset"
    reset.innerText = "reset"
    rootElement.appendChild(reset)

    let counter = 0;

    plus.addEventListener("click", () => {
        counter = counter + 1;
        counterElement.innerHTML = String(counter);
    })

    minus.addEventListener("click", () => {
        counter = counter - 1;
        counterElement.innerHTML = String(counter);
    })

    reset.addEventListener("click", () => {
        counter = counter = 0
        counterElement.innerHTML = String(counter);
    })

    return rootElement;   
}
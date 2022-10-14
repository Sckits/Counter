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

    let counter = 0; // Модель, состояние

    const validateCounter = () => {
        if (counter < 1) {
            minus.disabled = true;
            minus.classList.add('disabled');
        } else {
            minus.disabled = false;
            minus.classList.remove('disabled');
        }
    }

    const updateView = () => {
        counterElement.innerHTML = String(counter) //view
    }

    const updateCounter = (newValue: number) => {
        counter = newValue;
        validateCounter();
        updateView();
    }

    updateCounter(0);

    plus.addEventListener("click", () => { // Измение состояния, акшэном, мутацией
        updateCounter(counter + 1);//  контроллер
    })

    minus.addEventListener("click", () => {
        updateCounter(counter - 1);
    })

    reset.addEventListener("click", () => {
        updateCounter(0);
    })

    return rootElement;   
}
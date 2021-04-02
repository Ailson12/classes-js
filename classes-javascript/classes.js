// // function Button(text, background) {
// //     this.text = text;
// //     this.background = background;
// // }

// // Button.prototype.element = function() {
// //     const buttonElement = document.createElement("button");
// //     buttonElement.innerText = this.text;
// //     buttonElement.style.background = this.background;
// //     return buttonElement;
// // }

// // const botaoAzul = new Button("Comprar", "blue");

// // console.log(botaoAzul.element());

class Button {
    constructor(text, background, color) {
        this.text = text;
        this.background = background;
        this.color = color;
    }
    element() {
        const buttonElement = document.createElement("button");
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    appendTo(target) {
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
    }
    static blueButton(text) {
        return new Button(text, blue, white);
    }
}

const botaoAzul = new Button("Compre", "blue", "white");
botaoAzul.appendTo("body");

// class Button {
//     constructor(opcoes) {
//         this.opcoes = opcoes;
//     }

//     static createButton(text, color) {
//         const buttonElement = document.createElement("button");
//         buttonElement.innerText = text;
//         buttonElement.style.color = color;
//         return buttonElement;
//     }
// }

// const botaoEstatico = Button.createButton("Ailson", "blue");


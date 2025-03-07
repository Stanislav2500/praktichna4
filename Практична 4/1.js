document.addEventListener("DOMContentLoaded", () => {
    loadStyles();

    // Перевизначення console.log для перенаправлення повідомлень у textarea
    console.log = function (message) {
        const consoleElem = document.getElementById("console");
        if (consoleElem) {
            consoleElem.value += message + "\n";
        } else {
     
        }
    };

    console.log("Сторінка завантажена");
});

function changeColor() {
    const textBlock = document.getElementById("text-block");
    const colorDisplay = document.getElementById("color-display"); // Елемент для відображення кольору
    if (textBlock) {
        const randomColor = getRandomColor();
        textBlock.style.color = randomColor;
        localStorage.setItem("color", randomColor);
        
        // Відображення кольору на інтерфейсі
        if (colorDisplay) {
            colorDisplay.textContent = `Колір тексту: ${randomColor}`;
            colorDisplay.style.backgroundColor = randomColor;
        }
        
        console.log("Змінено колір тексту на: " + randomColor);
    } else {
        console.error("Елемент 'text-block' не знайдено!");
    }
}

function changeFontSize() {
    const textBlock = document.getElementById("text-block");
    const fontSizeDisplay = document.getElementById("font-size-display"); // Елемент для відображення розміру шрифту
    if (textBlock) {
        const randomSize = Math.floor(Math.random() * 16) + 16; // Випадковий розмір від 16px до 32px
        textBlock.style.fontSize = `${randomSize}px`;
        localStorage.setItem("fontSize", randomSize);
        
        // Відображення розміру шрифту на інтерфейсі
        if (fontSizeDisplay) {
            fontSizeDisplay.textContent = `Розмір шрифту: ${randomSize}px`;
        }
        
        console.log("Змінено розмір шрифту на: " + randomSize + "px");
    } else {
        console.error("Елемент 'text-block' не знайдено!");
    }
}

function changeBackground() {
    const textBlock = document.getElementById("text-block");
    const backgroundDisplay = document.getElementById("background-display"); // Елемент для відображення кольору фону
    if (textBlock) {
        const randomBackgroundColor = getRandomColor();
        textBlock.style.backgroundColor = randomBackgroundColor;
        localStorage.setItem("backgroundColor", randomBackgroundColor);
        
        // Відображення кольору фону на інтерфейсі
        if (backgroundDisplay) {
            backgroundDisplay.textContent = `Колір фону: ${randomBackgroundColor}`;
            backgroundDisplay.style.backgroundColor = randomBackgroundColor;
        }
        
        console.log("Змінено фон на: " + randomBackgroundColor);
    } else {
        console.error("Елемент 'text-block' не знайдено!");
    }
}

function toggleText() {
    const textBlock = document.getElementById("text-block");
    if (textBlock) {
        textBlock.style.display = textBlock.style.display === "none" ? "block" : "none";
        localStorage.setItem("display", textBlock.style.display);
        console.log("Стан тексту: " + (textBlock.style.display === "none" ? "Сховано" : "Показано"));
    } else {
        console.error("Елемент 'text-block' не знайдено!");
    }
}

function resetStyles() {
    const textBlock = document.getElementById("text-block");
    const colorDisplay = document.getElementById("color-display");
    const fontSizeDisplay = document.getElementById("font-size-display");
    const backgroundDisplay = document.getElementById("background-display");
    if (textBlock) {
        textBlock.style.color = "black";
        textBlock.style.fontSize = "16px";
        textBlock.style.backgroundColor = "white";
        textBlock.style.display = "block";
        localStorage.removeItem("color");
        localStorage.removeItem("fontSize");
        localStorage.removeItem("backgroundColor");
        localStorage.removeItem("display");
        
        // Очищення відображених значень
        if (colorDisplay) colorDisplay.textContent = "Колір тексту: чорний";
        if (fontSizeDisplay) fontSizeDisplay.textContent = "Розмір шрифту: 16px";
        if (backgroundDisplay) backgroundDisplay.textContent = "Колір фону: білий";

        console.log("Всі стилі скинуто до значень за замовчуванням");
    } else {
        console.error("Елемент 'text-block' не знайдено!");
    }
}

function loadStyles() {
    const textBlock = document.getElementById("text-block");
    const colorDisplay = document.getElementById("color-display");
    const fontSizeDisplay = document.getElementById("font-size-display");
    const backgroundDisplay = document.getElementById("background-display");

    if (textBlock) {
        const color = localStorage.getItem("color");
        const fontSize = localStorage.getItem("fontSize");
        const backgroundColor = localStorage.getItem("backgroundColor");
        const display = localStorage.getItem("display");

        if (color) {
            textBlock.style.color = color;
            if (colorDisplay) {
                colorDisplay.textContent = `Колір тексту: ${color}`;
                colorDisplay.style.backgroundColor = color;
            }
        }
        if (fontSize) {
            textBlock.style.fontSize = `${fontSize}px`;
            if (fontSizeDisplay) fontSizeDisplay.textContent = `Розмір шрифту: ${fontSize}px`;
        }
        if (backgroundColor) {
            textBlock.style.backgroundColor = backgroundColor;
            if (backgroundDisplay) {
                backgroundDisplay.textContent = `Колір фону: ${backgroundColor}`;
                backgroundDisplay.style.backgroundColor = backgroundColor;
            }
        }
        if (display) textBlock.style.display = display;

        console.log("Завантажено збережені стилі");
    } else {
        console.error("Елемент 'text-block' не знайдено!");
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

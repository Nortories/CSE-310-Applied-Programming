
const button = document.getElementById('color-button');
const colorBox = document.getElementById('random-color-background');
button.addEventListener('click', changeBackgroundColor);

// Generate a random color.
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Change the background color of the h1 tag
function changeBackgroundColor() {
    const color = generateRandomColor();
    colorBox.style.backgroundColor = color;
    colorBox.textContent = "This color value is "+color
}

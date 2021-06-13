let warningText = document.getElementById("warningText");
let ImageElement = document.getElementById("webImage");
let imageWidth = document.getElementById("imageWidth");
let decreaseButton = document.getElementById("decreaseButton");
let incrementButton = document.getElementById("incrementButton");

let maxWidth = 300;
let MinWidth = 100;
let maxWidthText = "Too big. Decrease size of the image";
let minWidthText = "too Small. Increase the size of the image";
let defaultWidth = "200px";
ImageElement.style.width = defaultWidth;
imageWidth.textContent = defaultWidth;
decreaseButton.onclick = function() {
    let previousImageWidth = ImageElement.style.width;
    let previousImageWidthInteger = parseInt(previousImageWidth);
    if (previousImageWidthInteger <= MinWidth) {
        warningText.textContent = minWidthText;
    } else {
        warningText.textContent = "";
        let updatedImageWidth = previousImageWidthInteger - 5 + "px";
        ImageElement.style.width = updatedImageWidth;
        imageWidth.textContent = updatedImageWidth;
    }
}
incrementButton.onclick = function() {
    let previousImageWidth = ImageElement.style.width;
    let previousImageWidthInteger = parseInt(previousImageWidth);
    if (previousImageWidthInteger >= maxWidth) {
        warningText.textContent = maxWidthText;
    } else {
        warningText.textContent = "";
        let updatedImageWidth = previousImageWidthInteger + 5 + "px";
        ImageElement.style.width = updatedImageWidth;
        imageWidth.textContent = updatedImageWidth;
    }
}

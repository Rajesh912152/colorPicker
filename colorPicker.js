let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let selectedColorHexacodeElement = document.getElementById("selectedColorHexacode");

function changeBgAndTextGrey() {
    colorPickerContainerElement.style.backgroundColor = "#e0e0e0";
    selectedColorHexacodeElement.textContent = "#e0e0e0";

}

function changeBgAndTextGreen() {
    colorPickerContainerElement.style.backgroundColor = "#6fcf97";
    selectedColorHexacodeElement.textContent = "#6fcf97";

}

function changeBgAndTextBlue() {
    colorPickerContainerElement.style.backgroundColor = "#56ccf2";
    selectedColorHexacodeElement.textContent = "#56ccf2";

}

function changeBgAndTextPink() {
    colorPickerContainerElement.style.backgroundColor = "#bb6bd9";
    selectedColorHexacodeElement.textContent = "#bb6bd9";
}
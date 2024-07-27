function setStyle(element, property, value) {
    element.style[property] = value;
}

// Usage
var el = document.getElementById('example'); // Assuming 'el' refers to an HTML element
setStyle(el, 'image-rendering', 'pixelated');

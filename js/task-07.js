

const fontSizeControl = document.querySelector("input#font-size-control");

const textEl = document.querySelector('span#text');
textEl.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener('input', updateValue);

function updateValue(e) {
    
    textEl.style.fontSize = `${e.target.value}px`;
};





const textInput = document.querySelector("input");

const stringLength = textInput.attributes[2]

textInput.addEventListener("blur", () => {

    if (textInput.value.length === Number(stringLength.textContent)) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
        console.log(textInput.classList);
        
    } else {
        textInput.classList.remove("valid")
        textInput.classList.add("invalid");
        if (textInput.value.length === 0) {
            textInput.classList.remove("invalid", "valid")
        }
       
    }
    
}); 
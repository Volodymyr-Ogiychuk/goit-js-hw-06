

const button = document.querySelectorAll("button");

let counterValue = 0;
// console.log(`Начальное значение счетчика: ${counterValue}`);

button[0].addEventListener("click", () => {
    counterValue -= 1;
    // console.log(`Текущее значение счетчика: ${counterValue}`);
    document.querySelector("#value").textContent = counterValue; 
});
button[1].addEventListener("click", () => {
    counterValue += 1;
    // console.log(`Текущее значение счетчика: ${counterValue}`);
    document.querySelector("#value").textContent = counterValue;
});

  
  


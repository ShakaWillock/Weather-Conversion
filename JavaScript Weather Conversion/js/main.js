const form = document.querySelector('form');
const celsiusInput = document.querySelector('#celsius-input');
let fahrenheitOutput = document.querySelector('#fahrenheitOutput');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    let userInput = document.querySelector('#inputCels').value;

    fahrenheitOutput.innerHTML = (userInput * 9/5 + 32) + '&#8457';

    form.reset();
   
});
const inputAmount = document.querySelector("#input-amount");
const fromCurrency = document.querySelector("#currency-from-select");
const toCurrency = document.querySelector("#currency-to-select");

const btnSwap = document.querySelector("#btn-swap");
const btnConvert = document.querySelector("#btn-convert");
const divOutput = document.querySelector("#div-output");

let rate;
fetch("https://open.exchangerate-api.com/v6/latest")
    .then(response => response.json())
    .then(result => {
        rate = result.rates[toCurrency.value]/result.rates[fromCurrency.value];
    })

function swapCurrency() {

let temp = fromCurrency.value;
fromCurrency.value = toCurrency.value;
toCurrency.value = temp;
rate = 1/rate;
divOutput.innerText = `${inputAmount.value} ${fromCurrency.value} = ${inputAmount.value * rate} ${toCurrency.value}`
}
function calculateConvertedCurrency(rate) {
    
    divOutput.innerText = `${inputAmount.value} ${fromCurrency.value} = ${inputAmount.value * rate} ${toCurrency.value}`
}




function convertCurrency() {
        calculateConvertedCurrency(rate);
    }
   

btnConvert.addEventListener("click", convertCurrency);
btnSwap.addEventListener("click", swapCurrency);
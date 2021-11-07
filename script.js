const inputAmount = document.querySelector("#input-amount");
const fromCurrency = document.querySelector("#currency-from-select");
const toCurrency = document.querySelector("#currency-to-select");
const btnSwap = document.querySelector("#btn-swap");
const divOutput = document.querySelector("#div-output");

let rate;

function serverCall() {
    fetch("https://open.exchangerate-api.com/v6/latest")
    .then(response => response.json())
    .then(result => {
        rate = result.rates[toCurrency.value]/result.rates[fromCurrency.value];
        divOutput.innerText = `${inputAmount.value} ${fromCurrency.value} = ${inputAmount.value * rate} ${toCurrency.value}`
    })
}

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
        if(Number(inputAmount.value)<=0 || isNaN(inputAmount.value) === true) {
            divOutput.innerText = "Please enter an appropriate input."
        }

        else {
        calculateConvertedCurrency(rate);
    }
}
   
serverCall();
btnSwap.addEventListener("click", swapCurrency);
inputAmount.addEventListener("input", convertCurrency);
fromCurrency.addEventListener("change", () => {
    serverCall();
    convertCurrency()});
toCurrency.addEventListener("change", () => {
    serverCall();
    convertCurrency()});
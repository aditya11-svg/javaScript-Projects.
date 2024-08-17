const fromAmountElement = document.querySelector(".amount");
const convertedAmountElement = document.querySelector(".convertedAmount");
const fromCurrencyElement = document.querySelector(".fromCurrency");
const toCurrencyElement = document.querySelector(".toCurrency");
const resultElement = document.querySelector(".result");
const converterContainer = document.querySelector(".converter-container");

const countries = [
  { code: "USD", Name: "United State Dollar" },
  { code: "INR", Name: "Indian Rupee" },
  { code: "KRW", Name: "South Korean Won" },
  { code: "MXN", Name: "Mexican Peso" },
  { code: "MYR", Name: "Malaysian Ringgit" },
  { code: "NOK", Name: "Norwegian krone" },
  { code: "NZD", Name: "Newzealand Dollar" },
  { code: "PEN", Name: "Peruvian sol" },
  { code: "PHP", Name: "Phillipine peso" },
  { code: "PLN", Name: "Polish zloty" },
  { code: "RON", Name: "Romanian leu" },
  { code: "RUB", Name: "Russian Rumble" },
  { code: "SEK", Name: "Swedish krona" },
  { code: "SGD", Name: "Singapore Dollar" },
  { code: "THB", Name: "Thai Baht" },
  { code: "TRY", Name: "Turkish Lira" },
  { code: "TWD", Name: "Taiwan New Dollar" },
  { code: "UAH", Name: "Ukrainian Hryvnia" },
  { code: "UYU", Name: "Uruguayan Peso" },
  { code: "VND", Name: "Veitnamese Dong" },
  { code: "ZAR", Name: "South African Rand" },
  { code: "PKR", Name: "Pakistani Rupee" },
];

countries.forEach((country) => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");

  option1.value = option2.value = country.code;
  option1.textContent =
    option2.textContent = `${country.code} (${country.Name})`;
  fromCurrencyElement.appendChild(option1);
  toCurrencyElement.appendChild(option2);

  fromCurrencyElement.value = "USD";
  toCurrencyElement.value = "INR";
});

const getExchangeRate = async () => {
  const amount = parseFloat(fromAmountElement.value);
  const fromCurrency = fromCurrencyElement.value;
  const toCurrency = toCurrencyElement.value;
  resultElement.textContent = "fetching exchange rates....";

  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();

    const conversionRate = data.rates[toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);

    if (typeof conversionRate === "undefined") {
      resultElement.textContent =
        "Exchange rate data is not available for selected country!";
      convertedAmountElement = "";
    } else {
      convertedAmountElement.value = convertedAmount;
      resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    }
  } catch (error) {
    converterContainer.innerHTML = `<h2>Error while fetching exchange rates!</h2>`;
  }
};

fromAmountElement.addEventListener("input", getExchangeRate);
fromCurrencyElement.addEventListener("change", getExchangeRate);
toCurrencyElement.addEventListener("change", getExchangeRate);
window.addEventListener("load", getExchangeRate);

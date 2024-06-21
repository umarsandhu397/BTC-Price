const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const priceTag = document.querySelector("h1");
const spanTag = document.querySelector("span");
let currency = "USD";

const checkPrice = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      priceTag.innerHTML = data.bpi[currency].rate_float.toFixed(1);
    });
};

checkPrice();
setInterval(() => checkPrice(), 60000);

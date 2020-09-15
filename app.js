const btn = document.getElementById("btn");
const price = document.getElementById("price");
const url = `https://api.coindesk.com/v1/bpi/currentprice.json`;
const urlRub = `https://api.coindesk.com/v1/bpi/currentprice/RUB.json`;

price.textContent = (function () {

  const XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      const data = JSON.parse(this.responseText);
      const dataDisplay = data.bpi;
      
      price.innerHTML = `${dataDisplay.RUB.rate} RUB`;
    }
  }

  XHR.open("GET", urlRub);
  XHR.send()
})()
import { setCardType } from "../main.js"
import {
  securityCode,
  expirationDate,
  cardNumber,
  securityCodeMasked,
  cardNumberMasked,
  expirationDateMasked
} from "./cardMask.js"

// SELECTORS INPUTS
const addButton = document.getElementById("add-card");
const cardHolder = document.getElementById("card-holder");

// SELECTORS CREDIT CARD IMAGE
const ccHolder = document.querySelector(".cc-holder .value");
const ccSecurity = document.querySelector(".cc-security .value");
const ccNumber = document.querySelector(".cc-number");
const ccExpiration = document.querySelector(".cc-expiration .value");

addButton.addEventListener("click", () => {
  if (cardHolder.value === "" || cardNumber.value === ""
    || expirationDate === "" || securityCode === "") {
    alert("Nenhum cartão adicionado. Por favor preencha os campos corretamente!")
  } else {
    alert("Cartão adicionado!")
  }
})

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault()
})

cardHolder.addEventListener("input", () => {
  ccHolder.innerText = cardHolder.value.length === 0 ? "FULANO DA SILVA" : cardHolder.value;
})

securityCodeMasked.on("accept", () => {
  updateSecurityCode(securityCodeMasked.value)
})

function updateSecurityCode(code) {
  ccSecurity.innerText = code.length === 0 ? "123" : code;
}

cardNumberMasked.on("accept", () => {
  const cardType = cardNumberMasked.masked.currentMask.cardtype
  setCardType(cardType)
  updateCardNumber(cardNumberMasked.value)
})

function updateCardNumber(number) {
  ccNumber.innerText = number.length === 0 ? "1234 5678 9012 3456" : number;
}

expirationDateMasked.on("accept", () => {
  updateExpirationDate(expirationDateMasked.value)
})

function updateExpirationDate(date) {
  ccExpiration.innerText = date.length === 0 ? "02/32" : date
}
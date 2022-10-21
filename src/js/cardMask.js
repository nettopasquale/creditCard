import IMask from "imask";

export const securityCode = document.getElementById('security-code');
const securityCodePattern = {
  mask: '0000'
};
export const securityCodeMasked = IMask(securityCode, securityCodePattern);

export const expirationDate = document.getElementById('expiration-date');
export const expirationDatePattern = {
  mask: 'MM{/}YY',
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2)
    }
  }
};
export const expirationDateMasked = IMask(expirationDate, expirationDatePattern);

export const cardNumber = document.getElementById('card-number');
export const cardNumberPattern = {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardtype: "visa"
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
      cardtype: "mastercard"
    },
    {
      mask: "0000 0000 0000 0000",
      cardtype: "default"
    },
  ],
  dispatch: function (appended, dynamicMasked) {
    const number = (dynamicMasked.value + appended).replace(/\D/g, "");
    const foundMask = dynamicMasked.compiledMasks.find(
      item => number.match(item.regex));
    console.log(foundMask)
    return foundMask;
  }
}

export const cardNumberMasked = IMask(cardNumber, cardNumberPattern);
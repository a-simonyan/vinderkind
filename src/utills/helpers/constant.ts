const cardLogo = [
  {
    name: 'Visa',
    logo: '/cards/visa.svg',
    re: '^4'
  },
  {
    name: 'Hipercard',
    logo: '/cards/hipercard.svg',
    re: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/
  },
  {
    name: 'MasterCard',
    logo: '/cards/mastercard.svg',
    re: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/
  },
  {
    name: 'Discover',
    logo: '/cards/discover.svg',
    re: /^(6011|65|64[4-9]|622)/
  },
  {
    name: 'Elo',
    logo: '/cards/elo.svg',
    re: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/
  },
  {
    name: 'American Express',
    logo: '/cards/american.svg',
    re: /^3[47]\d{13,14}$/
  },
  {
    name: 'Diners Club',
    logo: '/cards/diners.svg',
    re: /^(305|36)/
  },
  {
    name: 'JCB',
    logo: '/cards/jcb.svg',
    re: /^35/
  },
  {
    name: 'UnionPay',
    logo: '/cards/unionpay.svg',
    re: /^62/
  }
]
export default cardLogo

export const extractDigit = (stringData) => {
  const digits = stringData.match(/\d/g)
  for (var i = 0; i < digits.length; i++) {
    digits[i] = Number(digits[i])
  }
  return digits.length == 1 ? digits[0] : digits
}

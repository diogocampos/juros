const DECIMAL_SEPARATOR = ','
const THOUSANDS_SEPARATOR = '.'

export function formatNumber(
  number,
  { prefix = '', decimals = 2, suffix = '' },
  annotated = false
) {
  const [integer, fraction] = number.toFixed(decimals).split('.')
  const modulo = integer.length % 3
  const thousands = modulo ? [integer.slice(0, modulo)] : []
  for (let i = modulo; i < integer.length; i += 3) {
    thousands.push(integer.slice(i, i + 3))
  }
  return [
    annotated ? prefix : '',
    thousands.join(THOUSANDS_SEPARATOR),
    fraction ? DECIMAL_SEPARATOR + fraction : '',
    annotated ? suffix : '',
  ].join('')
}

export function parseDigits(textValue, decimals = 2) {
  let digits = textValue.replace(/[^\d]/g, '')
  if (digits.length < decimals) digits = padStart(digits, decimals, '0')

  const cut = digits.length - decimals
  return +(digits.slice(0, cut) + '.' + digits.slice(cut))
}

function padStart(string, targetLength, padString) {
  while (string.length < targetLength) {
    string = padString + string
  }
  return string.slice(string.length - targetLength)
}

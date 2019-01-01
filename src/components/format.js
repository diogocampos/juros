const DECIMAL_SEPARATOR = ','
const THOUSANDS_SEPARATOR = '.'

/**
 * Formats a number as a string with thousands and decimal separators.
 * @param {number} number The number
 * @param {number} decimals The amount of decimal digits to include
 * @returns {string} The resulting string
 */
export function formatNumber(number, decimals = 2) {
  const [integer, fraction] = number.toFixed(decimals).split('.')
  const modulo = integer.length % 3
  const thousands = modulo ? [integer.slice(0, modulo)] : []
  for (let i = modulo; i < integer.length; i += 3) {
    thousands.push(integer.slice(i, i + 3))
  }
  return (
    thousands.join(THOUSANDS_SEPARATOR) +
    (fraction ? DECIMAL_SEPARATOR + fraction : '')
  )
}

/**
 * Parses a string of digits into a number.
 * @param {string} textValue The string
 * @param {number} decimals The amount of decimal digits to consider
 * @returns {number} The corresponding number
 */
export function parseDigits(textValue, decimals = 2) {
  let digits = textValue.replace(/[^\d]/g, '')
  if (digits.length < decimals) digits = padStart(digits, decimals, '0')

  const cut = digits.length - decimals
  return +(digits.slice(0, cut) + '.' + digits.slice(cut))
}

function padStart(string, targetLength, padString = ' ') {
  for (var padding = ''; padding.length + string.length < targetLength; ) {
    padding += padString
  }
  return padding.slice(0, targetLength - string.length) + string
}

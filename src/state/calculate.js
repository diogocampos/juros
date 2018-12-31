import * as k from '../constants'

export default function calculate(mode, values) {
  let deposit = values[k.DEPOSIT]
  let installment = values[k.INSTALLMENT]
  let interest = values[k.INTEREST]
  let length = values[k.LENGTH]
  let price = values[k.PRICE]

  switch (mode) {
    case k.INSTALLMENT:
      installment = calculateInstallment(price, deposit, length, interest)
      return !isNaN(installment)
        ? {
            [k.INSTALLMENT]: installment,
            [k.TOTAL]: calculateTotal(deposit, length, installment),
          }
        : { error: true }

    case k.INTEREST:
      try {
        return {
          [k.INTEREST]: calculateInterest(price, deposit, length, installment),
          [k.TOTAL]: calculateTotal(deposit, length, installment),
        }
      } catch {
        return { error: true }
      }

    default:
      throw new Error(`Invalid mode: '${mode}'`)
  }
}

function calculateInstallment(price, deposit, length, interest) {
  const owed = price - deposit
  return _installment(owed, interest / 100, length)
}

function calculateInterest(price, deposit, length, installment) {
  const owed = price - deposit
  let iterations = 0
  let [lowerBound, upperBound] = [0, 1e6]

  while (++iterations <= 1000) {
    const interestRate = (lowerBound + upperBound) / 2
    const error = _installment(owed, interestRate, length) - installment

    if (Math.abs(error) < 1e-6) {
      return interestRate * 100
    }
    if (error > 0) {
      upperBound = interestRate
    } else {
      lowerBound = interestRate
    }
  }

  throw new Error('Interest calculation did not converge')
}

function calculateTotal(deposit, length, installment) {
  return deposit + length * installment
}

function _installment(owed, interestRate, length) {
  if (interestRate > 0) {
    return (owed * interestRate) / (1 - 1 / Math.pow(1 + interestRate, length))
  } else {
    return owed / length
  }
}

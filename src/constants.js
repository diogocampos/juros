export const DEPOSIT = 'deposit'
export const INSTALLMENT = 'installment'
export const INTEREST = 'interest'
export const LENGTH = 'length'
export const PRICE = 'price'
export const TOTAL = 'total'

export const fieldNamesByMode = {
  [INSTALLMENT]: [PRICE, DEPOSIT, LENGTH, INTEREST],
  [INTEREST]: [PRICE, DEPOSIT, LENGTH, INSTALLMENT],
}

export const fieldProps = {
  [DEPOSIT]: { label: 'Entrada', prefix: '$' },
  [INSTALLMENT]: { label: 'Valor da parcela', prefix: '$' },
  [INTEREST]: { label: 'Taxa de juros', suffix: '%' },
  [LENGTH]: { label: 'Número de parcelas', decimals: 0 },
  [PRICE]: { label: 'Valor à vista', prefix: '$' },
  [TOTAL]: { label: 'Total a prazo', prefix: '$' },
}

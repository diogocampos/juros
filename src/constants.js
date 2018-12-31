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
  [DEPOSIT]: { label: 'Entrada' },
  [INSTALLMENT]: { label: 'Valor da parcela' },
  [INTEREST]: { label: 'Taxa de juros' },
  [LENGTH]: { label: 'Número de parcelas' },
  [PRICE]: { label: 'Valor à vista' },
  [TOTAL]: { label: 'Total a prazo' },
}

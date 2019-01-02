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
  [DEPOSIT]: {
    label: 'Entrada',
    prefix: '$',
    icon: 'DollarSignIcon',
  },
  [INSTALLMENT]: {
    label: 'Valor da parcela',
    prefix: '$',
    icon: 'DollarSignIcon',
  },
  [INTEREST]: {
    label: 'Taxa de juros',
    suffix: '%',
    icon: 'PercentageIcon',
  },
  [LENGTH]: {
    label: 'Número de parcelas',
    decimals: 0,
    icon: 'CalendarAltIcon',
  },
  [PRICE]: {
    label: 'Valor à vista',
    prefix: '$',
    icon: 'DollarSignIcon',
  },
  [TOTAL]: {
    label: 'Total a prazo',
    prefix: '$',
    icon: 'DollarSignIcon',
  },
}

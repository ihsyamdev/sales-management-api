import { randomId } from 'src/shared/entity'

export interface AccountCreateArgs {
  name: string
  billingPostalCode: string
  billingState: string
  billingCity: string
  billingStreet: string
  shippingPostalCode: string
  shippingState: string
  shippingCity: string
  shippingStreet: string
  phone: string
  website: string
  corporateNumber: string
  representativeName: string
  representativeTitle: string
}

export interface AccountReconstructArgs extends AccountCreateArgs {
  id: string
}

export class Account {
  id: string
  name: string
  billingPostalCode: string
  billingState: string
  billingCity: string
  billingStreet: string
  shippingPostalCode: string
  shippingState: string
  shippingCity: string
  shippingStreet: string
  phone: string
  website: string
  corporateNumber: string
  representativeName: string
  representativeTitle: string

  private constructor(
    id: string,
    name: string,
    billingPostalCode: string,
    billingState: string,
    billingCity: string,
    billingStreet: string,
    shippingPostalCode: string,
    shippingState: string,
    shippingCity: string,
    shippingStreet: string,
    phone: string,
    website: string,
    corporateNumber: string,
    representativeName: string,
    representativeTitle: string,
  ) {
    this.id = id
    this.name = name
    this.billingPostalCode = billingPostalCode
    this.billingState = billingState
    this.billingCity = billingCity
    this.billingStreet = billingStreet
    this.shippingPostalCode = shippingPostalCode
    this.shippingState = shippingState
    this.shippingCity = shippingCity
    this.shippingStreet = shippingStreet
    this.phone = phone
    this.website = website
    this.corporateNumber = corporateNumber
    this.representativeName = representativeName
    this.representativeTitle = representativeTitle
  }

  static create(args: AccountCreateArgs) {
    const billingPostalCode = checkPostalCodeFormat(args.billingPostalCode)
    const shippingPotalCode = checkPostalCodeFormat(args.shippingPostalCode)
    const corporateNumber = checkCorporateNumberFormat(args.corporateNumber)
    return new Account(
      randomId(),
      args.name,
      billingPostalCode,
      args.billingState,
      args.billingCity,
      args.billingStreet,
      shippingPotalCode,
      args.shippingState,
      args.shippingCity,
      args.shippingStreet,
      args.phone,
      args.website,
      corporateNumber,
      args.representativeName,
      args.representativeTitle,
    )
  }

  static reconstruct(args: AccountReconstructArgs) {
    const billingPostalCode = checkPostalCodeFormat(args.billingPostalCode)
    const shippingPotalCode = checkPostalCodeFormat(args.shippingPostalCode)
    const corporateNumber = checkCorporateNumberFormat(args.corporateNumber)
    return new Account(
      args.id,
      args.name,
      billingPostalCode,
      args.billingState,
      args.billingCity,
      args.billingStreet,
      shippingPotalCode,
      args.shippingState,
      args.shippingCity,
      args.shippingStreet,
      args.phone,
      args.website,
      corporateNumber,
      args.representativeName,
      args.representativeTitle,
    )
  }
}

// 郵便番号フォーマットチェック(不適合なら空白に)
const checkPostalCodeFormat = (postalCode: string) => {
  const regexp = new RegExp('^[0-9]{3}-[0-9]{4}$')
  if (postalCode !== '' && !regexp.test(postalCode)) {
    return ''
  }
  return postalCode
}

// 法人番号フォーマットチェック(不適合なら空白に)
const checkCorporateNumberFormat = (corporateNumber: string) => {
  const regexp = new RegExp('^[0-9]{13}')
  if (corporateNumber !== '' && !regexp.test(corporateNumber)) {
    return ''
  }
  return corporateNumber
}

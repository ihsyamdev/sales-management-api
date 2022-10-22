import { randomId } from 'src/shared/entity'

export interface AccountCreateArgs {
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
    this.representativeName = representativeName
    this.representativeTitle = representativeTitle
  }

  static create(args: AccountCreateArgs) {
    return new Account(
      randomId(),
      args.name,
      args.billingPostalCode,
      args.billingState,
      args.billingCity,
      args.billingStreet,
      args.shippingPostalCode,
      args.shippingState,
      args.shippingCity,
      args.shippingStreet,
      args.phone,
      args.website,
      args.corporateNumber,
      args.representativeName,
      args.representativeTitle,
    )
  }

  // update(name: string) {
  //   return new Account(this.id, name ?? this.name)
  // }
}

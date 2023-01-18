export default class Item {
  constructor(
    readonly externalId: string,
    readonly name: string,
    readonly photoUrl: string,
    readonly price: number,
    readonly oldPrice: number,
    readonly offerPrice: number,
    readonly offerPercentage: number
  ) {}
}

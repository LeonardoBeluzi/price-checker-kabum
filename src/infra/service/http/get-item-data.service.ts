import Item from "../../../domain/entity/item.entity";
import HttpClient from "../../http-request/http-client";

export default class GetItemDataService {
  constructor(
    readonly httpClient: HttpClient,
    readonly baseUrl: string,
    readonly id: string
  ) {}

  async execute(): Promise<Item> {
    const itemData = await this.httpClient.get(`${this.baseUrl}/${this.id}`);

    return new Item(
      itemData.codigo,
      itemData.nome,
      itemData.fotos[0],
      itemData.preco,
      itemData.preco_antigo === 0 ? itemData.preco : itemData.preco_antigo,
      itemData.preco_desconto,
      itemData.desconto
    );
  }
}

import CardData from "./CardData";

export default class StorageData {

  version: number;
  cards: Array<CardData> = [];

  constructor(data: { [key: string]: any }) {
    this.version = Number.isInteger(data?.version) ? data.version : 1;
    if (Array.isArray(data?.cards)) {
      data.cards.forEach((card: { [key: string]: any }) => {
        this.cards.push(new CardData(card));
      });
    }
  }

  serialize(): string {
    return JSON.stringify(this);
  }

}
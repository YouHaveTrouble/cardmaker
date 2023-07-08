export default class CardData {

  id: string;
  name: string;
  description: string;
  image: string;
  props: { [key: string]: string };
  notes: string;

  constructor(data: { [key: string]: any }) {
    this.id = data.id ?? crypto.randomUUID();
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
    this.props = data.props;
    this.notes = data.notes;
  }

}
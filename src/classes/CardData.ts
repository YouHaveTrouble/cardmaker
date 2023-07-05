export default class CardData {

  name: string;
  description: string;
  image: string;
  props: { [key: string]: string };
  notes: string;

  constructor(data: { [key: string]: any }) {
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
    this.props = data.props;
    this.notes = data.notes;
  }

}
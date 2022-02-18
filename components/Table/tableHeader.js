export default class TableHeader {
  constructor(name, slug, span) {
    this.name = name;
    this.slug = slug;

    // NOTE Defines the span of the column; 
    // Value must be less than or equal to 9 if `hasActions` prop of table is defined as false
    this.span = span || 1;
  }
}
export default class WorldEntry {
  constructor(options) {
    
    this.id = Math.random();
    this.keys = null;
    this.entry = null;
    this.isNotHidden = true;

    if(options) {
      this.init(options);
    }
  }

  init(options) {

    this.id = parseFloat(options.id) || this.id;
    this.keys = options.keys || this.keys;
    this.entry = options.entry || this.entry;
    this.isNotHidden = options.isNotHidden || this.isNotHidden;

  }
}
/* eslint-disable class-methods-use-this */
export class View {
  #root;

  constructor(root) {
    this.#root = root;
    this.handleFavoriteButtonClick = null;
  }

  getRoot() {
    return this.#root;
  }

  update() {}

  render() {}
}

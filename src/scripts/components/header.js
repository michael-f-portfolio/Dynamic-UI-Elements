import "styles/header.css";

export default class Header {
  constructor(elementToAppendTo, headerTitleContent) {
    this.header = document.createElement("header");

    this.headerTitle = document.createElement("h1");
    this.headerTitle.textContent = headerTitleContent;

    this.header.appendChild(this.headerTitle);
    elementToAppendTo.appendChild(this.header);
  }
}

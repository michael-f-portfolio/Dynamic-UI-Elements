import Header from "components/header";
import Footer from "components/footer";
import NavBar from "../../components/navbar";

export default class MyController {
  constructor() {
    this.body = document.querySelector("body");
    this.copyrightInfo = "Copyright © 2024 Michael F.";
    this.copyrightSource = "https://github.com/michael-f-portfolio";
  }

  initialize() {
    this.header = new Header(this.body, "My Template Header Title");
    this.navBar = new NavBar(this.header.header, "Navigation", [
      { src: "#", textContent: "Link 1" },
      { src: "#", textContent: "Link 2" },
      { src: "#", textContent: "Link 3" },
    ]);
    this.footer = new Footer(
      this.body,
      this.copyrightInfo,
      this.copyrightSource
    );
  }
}

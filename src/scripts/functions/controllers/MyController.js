import Header from "components/header";
import Footer from "components/footer";
import DesktopNavBar from "../../components/desktopNavBar";
import MobileNavBar from "../../components/mobileNavBar";
import ImageSlider from "../../components/imageSlider";

export default class MyController {
  constructor() {
    this.body = document.querySelector("body");
    this.copyrightInfo = "Copyright © 2024 Michael F.";
    this.copyrightSource = "https://github.com/michael-f-portfolio";
  }

  initialize() {
    this.header = new Header(this.body, "Dynamic UI");
    this.desktopNavBar = new DesktopNavBar(
      this.header.header,
      "Desktop Navigation",
      [
        { src: "#", textContent: "Link 1" },
        { src: "#", textContent: "Link 2" },
        { src: "#", textContent: "Link 3" },
      ]
    );
    this.mobileNavBar = new MobileNavBar(
      this.header.header,
      "Mobile Navigation",
      [
        { src: "#", textContent: "Link 1" },
        { src: "#", textContent: "Link 2" },
        { src: "#", textContent: "Link 3" },
      ]
    );

    this.imageSlider = new ImageSlider(this.body);
    this.footer = new Footer(
      this.body,
      this.copyrightInfo,
      this.copyrightSource
    );
  }
}

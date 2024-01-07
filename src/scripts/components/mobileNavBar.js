import "styles/mobileNavBar.css";

export default class MobileNavBar {
  constructor(elementToAppendTo, navTitle, links = []) {
    this.navBar = document.createElement("nav");
    this.navBar.classList.add("mobileNav");

    this.navTitleContainer = document.createElement("div");
    this.navTitleContainer.textContent = navTitle;
    this.navTitleContainer.classList.add("navTitle");
    this.navBar.appendChild(this.navTitleContainer);

    this.navBarUnorderedList = document.createElement("ul");
    this.navBarUnorderedList.classList.add("navHide");
    this.navBarUnorderedList.classList.add("navList");
    links.forEach((link) => {
      const navListItem = document.createElement("li");
      const navLink = document.createElement("a");
      navLink.href = link.src;
      navLink.textContent = link.textContent;
      navListItem.appendChild(navLink);
      this.navBarUnorderedList.appendChild(navListItem);
    });
    this.navBar.appendChild(this.navBarUnorderedList);

    elementToAppendTo.appendChild(this.navBar);

    this.navBar.addEventListener("touchstart", () => {
      if (this.navTitleContainer.classList.contains("navActive")) {
        this.navBarUnorderedList.classList.replace("navShow", "navHide");
        this.navTitleContainer.classList.remove("navActive");
      } else {
        this.navBarUnorderedList.classList.replace("navHide", "navShow");
        this.navTitleContainer.classList.add("navActive");
      }
    });

    // this.navBar.addEventListener("mouseleave", () => {
    //   this.navBarUnorderedList.classList.replace("navShow", "navHide");
    //   this.navTitleContainer.classList.remove("navActive");
    // });

    window.addEventListener("mouseleave", () => {
      this.navBarUnorderedList.classList.replace("navShow", "navHide");
      this.navTitleContainer.classList.remove("navActive");
    });
  }
}

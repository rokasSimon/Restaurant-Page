//#region IMPORTS

import Tab from './Tab'
import { TabLink, hideContent } from './UI'
import homeContent from './Home'
import menuContent from './Menu'
import contactContent from './Contact'

const tabLinks = [
    TabLink("Home"),
    TabLink("Menu"),
    TabLink("Contact")
];

const tabs = [
    new Tab("Home", homeContent(), tabLinks[0]),
    new Tab("Menu", menuContent(), tabLinks[1]),
    new Tab("Contact", contactContent(), tabLinks[2])
];

//#endregion IMPORTS

//#region PAGE LOAD

let content = document.getElementById("content");
let nav = document.createElement("nav");

content.append(nav);

for (const tab of tabs) {
    tab.buttonLink.addEventListener("click", () => {
        hideContent(tab.name, tabs);
    });
    nav.append(tab.buttonLink);
    content.append(tab.section);
}

tabs[0].buttonLink.click();

//#endregion PAGE LOAD
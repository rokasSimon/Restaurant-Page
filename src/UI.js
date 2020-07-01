function TabLink(name) {
    let button = document.createElement("button");

    button.classList.add("tab-link");
    button.textContent = name;

    return button;
}

function MenuSection(name, menuSections) {
    let sectionDiv = document.createElement("div");
    let sectionHeader = document.createElement("h2");
    sectionHeader.textContent = name;

    sectionDiv.append(sectionHeader);

    for (const item of menuSections) {
        let itemHeader = document.createElement("h3");
        itemHeader.textContent = item[0];

        let itemText = document.createElement("p");
        itemText.textContent = item[1];

        sectionDiv.append(itemHeader, itemText);
    }

    return sectionDiv;
};

/** @param {string} except
 *  @param {Array.<Tab>} tabs
 */
function hideContent(except, tabs) {
    for (const tab of tabs) {
        if (tab.name == except) {
            tab.putOnTop();
        }
        else {
            tab.putBelow();
        }
    }
}

export { TabLink, MenuSection, hideContent };
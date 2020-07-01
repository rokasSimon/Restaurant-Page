export default class Tab {
    /** @param {string} name
     *  @param {HTMLElement} asocSection
     *  @param {HTMLButtonElement} asocLink
     */
    constructor(name, asocSection, asocLink) {
        this.name = name;
        this.section = asocSection;
        this.buttonLink = asocLink;
    }

    putOnTop() {
        this.section.style.zIndex = 2;
        this.buttonLink.style.backgroundColor = "var(--main-background)";
        this.buttonLink.style.color = "var(--hover-text)";
    }

    putBelow() {
        this.section.style.zIndex = 1;
        this.buttonLink.style.backgroundColor = "var(--navbar-color)";
        this.buttonLink.style.color = "var(--text-color)";
    }


}
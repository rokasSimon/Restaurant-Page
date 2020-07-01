import { MenuSection } from './UI'

export default function menuContent() {
    let main = document.createElement("section");
    main.classList.add("content-tab");

    let header = document.createElement("h1");
    header.textContent = "Menu";

    let container = document.createElement("div");
    container.classList.add("content-column");

    let basics = MenuSection("Basics", [
        ["HTML", "Good ol' Hypertext Markup Language"],
        ["CSS", "CSS makes everything beautiful, nothing Less and no Sass"]
    ]);

    let javascript = MenuSection("JavaScript", [
        ["Fundamentals", "Programming fundementals in JavaScript"],
        ["Objects and Functions", "Functional programming with JavaScript"]
    ]);

    container.append(basics, javascript);

    main.append(header, container);

    return main;
};
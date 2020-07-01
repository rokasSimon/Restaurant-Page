export default function homeContent() {
    let main = document.createElement("section");
    main.classList.add("content-tab");

    let header = document.createElement("h1");
    header.textContent = "Welcome to The Odin Restaurant!";

    let mainParagraph = document.createElement("p");
    mainParagraph.classList.add("large-text");
    mainParagraph.classList.add("content-column");
    mainParagraph.textContent = "There restaurant where we serve the freshest and spiciest JavaScript features. In addition to our main dish - JavaScript, we have side dishes like Ruby on Rails, SQL, Node.js and the basics like HTML and CSS.";

    main.append(header, mainParagraph);

    return main;
};
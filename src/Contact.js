export default function contactContent() {
    let main = document.createElement("section");
    main.classList.add("content-tab");

    let header = document.createElement("h1");
    header.textContent = "Contact us";

    let container = document.createElement("div");
    container.classList.add("content-column");
    container.classList.add("input-column");

    let nameLabel = document.createElement("label");
    let emailLabel = document.createElement("label");
    let messageLabel = document.createElement("label");

    nameLabel.textContent = "Your name:";
    emailLabel.textContent = "Your email:";
    messageLabel.textContent = "Your message:";

    let nameText = document.createElement("input");
    let emailText = document.createElement("input");
    let messageText = document.createElement("textarea");
    let submitButton = document.createElement("button");

    submitButton.textContent = "Submit";
    submitButton.classList.add("submit");

    container.append(nameLabel, nameText, emailLabel, emailText, messageLabel, messageText, submitButton);

    main.append(header, container);

    return main;
};
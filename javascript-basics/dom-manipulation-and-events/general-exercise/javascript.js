const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

const heading = document.createElement("h3");
heading.textContent = "I'm a blue h3!";
heading.style.color = "blue";

const specialDiv = document.createElement("div");
specialDiv.style.cssText = "border-color: black; background-color: pink;";

const headingOne = document.createElement("h1");
const paragraphTwo = document.createElement("p");

headingOne.textContent = "I'm in a div";
paragraphTwo.textContent = "ME TOO!";

const container = document.querySelector("#container");

specialDiv.appendChild(headingOne);
specialDiv.appendChild(paragraphTwo);

container.appendChild(paragraph)
container.appendChild(heading);
container.appendChild(specialDiv);
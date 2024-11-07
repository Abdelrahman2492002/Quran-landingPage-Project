import { labelClickEvent, oberverElement } from "./util.js";

const labelElements = document.querySelectorAll("label");
const sectionElements = document.querySelectorAll("section");

labelElements.forEach(labelClickEvent);

oberverElement(sectionElements);

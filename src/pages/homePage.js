import "./homePage.scss";
import { appContainer } from "../vars";
import { renderHeader } from "../common/header.js";

export function renderHome(element) {
	element.innerHTML = "";
	renderHeader();
	element.insertAdjacentHTML(
		"beforeend",
		`
        <h1>Home</h1>
        `
	);
}

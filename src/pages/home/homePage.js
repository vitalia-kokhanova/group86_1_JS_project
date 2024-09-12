import "./homePage.scss";
import { appContainer } from "../../vars.js";
import { renderHeader } from "../../common/header.js";
import { renderWhyUs } from "./whyUs.js";
import { renderCatalogPreview } from "./catalogPreview.js";

export function renderHome(element) {
	element.innerHTML = "";
	renderHeader();

	element.insertAdjacentHTML(
		"beforeend",
		`
        <h1>Home</h1>
		<div><a href="/auth">Авторизация</a></div>
        `
	);

	renderWhyUs();
	renderCatalogPreview();
}

import "./homePage.scss";
import { appContainer } from "../../vars.js";
import { renderHeader } from "../../common/header.js";
import { renderMainContainer } from "../../common/common.js";
import { renderFirstScreen } from "../../common/firstScreen.js";
import { renderSalesBlock } from "./salesBlock.js";
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
	renderMainContainer();

	const mainContainer = document.querySelector(".main");

	renderFirstScreen(mainContainer);
	renderSalesBlock(mainContainer);
	renderWhyUs(mainContainer);
	renderCatalogPreview(mainContainer);
}

import "./card.scss";
import { appContainer } from "../../vars.js";
import { renderHeader } from "../../common/header.js";
import { renderMainCard } from "./mainCard.js"
import { renderMainContainer } from "../../common/common.js";
import { renderFooter } from "../../common/footer.js";
import "./functionCard.js"

export function renderCard(element) {
	element.innerHTML = "";
	renderHeader();
	renderMainContainer();

	const mainContainer = document.querySelector(".main");

	renderMainCard(bouquet);
	renderFooter();
}

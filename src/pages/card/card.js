//import "./card.scss";
import { appContainer } from "../../vars.js";
import { renderHeader } from "../../common/header.js";
//import { renderMainCard } from "./mainCard.js";
import { renderMainContainer } from "../../common/common.js";
import { renderFooter } from "../../common/footer.js";
import "./functionCard.js";

export function renderCard(element, bouquet) {
	element.innerHTML = "";
	renderHeader();
	renderMainContainer();

	const mainContainer = document.querySelector(".main");

	// Передаем букет и контейнер в функцию renderMainCard
	renderMainCard(bouquet, mainContainer);
	renderFooter();
}

// Пример использования
//import catalogData from "../../../catalog.json";

const catalogContainer = document.getElementById('catalog-container');

/*catalogData.forEach(bouquet => {
    renderCard(catalogContainer, bouquet);
});*/
import "./_basketPage.scss";
import { renderHeader } from "../../common/header";
import { renderMainContainer } from "../../common/common";
import { renderFooter } from "../../common/footer";

export function renderBasket(element) {
	element.innerHTML = "";
	renderHeader();
	renderMainContainer();
	const mainContainer = document.querySelector(".main");
	mainContainer.innerHTML = "Корзина";

	renderFooter();
}

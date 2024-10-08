import "./_homePage.scss";
import { renderHeader } from "../../common/header.js";
import { renderMainContainer } from "../../common/common.js";
import { renderFirstScreen } from "../../common/firstScreen.js";
import { renderSalesBlock } from "./salesBlock.js";
import { renderWhyUs } from "./whyUs.js";
import { renderCatalogPreview } from "./catalogPreview.js";
import { renderDelivery } from "./deliveryBlock.js";
import { renderIdeaForm } from "./ideaForm.js";
import { renderFooter } from "../../common/footer.js";

export function renderHome(element) {
	element.innerHTML = "";
	renderHeader();
	renderMainContainer();

	const mainContainer = document.querySelector(".main");

	renderFirstScreen(mainContainer);
	const innerWrapper = document.querySelector(".first-screen__inner-wraper");
	innerWrapper.classList.remove(
		"basket-page__inner-wrapper_position",
		"contacts-page__inner-wrapper_position"
	);

	renderSalesBlock();
	renderWhyUs(mainContainer);
	renderCatalogPreview(mainContainer);
	renderDelivery(mainContainer);
	renderIdeaForm(mainContainer);
	renderFooter();
}

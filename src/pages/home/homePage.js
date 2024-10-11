import "./_homePage.scss";

import { spinner } from "../../common/spinner.js";
import { Services } from "../../services/services.js";
import { appContainer } from "../../vars.js";

import { renderHeader } from "../../common/header.js";
import { renderMainContainer } from "../../common/common.js";
import { renderFirstScreen } from "../../common/firstScreen.js";
import { renderSalesBlock } from "./salesBlock.js";
import { renderWhyUs } from "./whyUs.js";
import { renderCatalogPreview } from "./catalogPreview.js";
import { renderDelivery } from "./deliveryBlock.js";
import { renderIdeaForm } from "./ideaForm.js";
import { renderFooter } from "../../common/footer.js";

export function loadHomePage() {
	spinner();
	Services.getProducts().then((data) => {
		setTimeout(() => {
			renderHomePage(data);
		}, 3000);
	});
}

function renderHomePage(data) {
	appContainer.innerHTML = "";

	renderHeader();
	renderMainContainer();

	const mainContainer = document.querySelector(".main");
	renderFirstScreen(mainContainer);
	const innerWrapper = document.querySelector(".first-screen__inner-wraper");
	innerWrapper.classList.remove(
		"basket-page__inner-wrapper_position",
		"contacts-page__inner-wrapper_position",
		"specific-card__inner-wrapper_position"
	);

	renderSalesBlock(data);
	renderWhyUs(mainContainer);
	renderCatalogPreview(mainContainer);
	renderDelivery(mainContainer);
	renderIdeaForm(mainContainer);
	renderFooter();
}

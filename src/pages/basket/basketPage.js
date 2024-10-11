import "./_basketPage.scss";

import { appContainer } from "../../vars";
import { spinner } from "../../common/spinner";
import { Services } from "../../services/services";
import { renderHeader } from "../../common/header";
import { renderMainContainer } from "../../common/common";
import { renderFirstScreen } from "../../common/firstScreen";
import { renderFooter } from "../../common/footer";

export function loadBasketPage() {
	spinner();
	Services.getProducts().then((data) => {
		setTimeout(() => {
			renderBasket(data);
		}, 3000);
	});
}

function renderBasket(data) {
	appContainer.innerHTML = "";
	renderHeader();
	renderMainContainer();
	const mainContainer = document.querySelector(".main");
	renderFirstScreen(mainContainer);

	const innerWrapper = document.querySelector(".first-screen__inner-wraper");

	innerWrapper.classList.add("basket-page__inner-wrapper_position");
	innerWrapper.classList.remove("first-screen__inner-wraper");

	innerWrapper.innerHTML = `
		<h2 class="secondary-main-title">Корзина</h2>
		<p
			class="small-grey-title pagename-path-text basket-page__pagename-path-text"
		>
			<span class="pagename-path-span"
				><a href="/" class="pagename-path-link">Главная</a></span
			>
			/
			<span class="pagename-path-span">Корзина</span>
		</p>
    `;
	renderTotalSumBlock(mainContainer);
	renderCheckoutForm(mainContainer);
	renderFooter();
}

function renderTotalSumBlock(element) {
	const template = `
        <section class="totalsum-block">
			<div class="container totalsum-block__container">
				<h3> Сумма заказов </h3>
			</div>
		</section>
    `;
	element.insertAdjacentHTML("beforeend", template);
}

function renderCheckoutForm(element) {
	const template = `
        <section class="totalsum-block">
			<div class="container totalsum-block__container">
				<h3>Оформление заказа</h3>
			</div>
		</section>
    `;
	element.insertAdjacentHTML("beforeend", template);
}

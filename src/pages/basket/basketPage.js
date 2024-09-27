import "./_basketPage.scss";

import { renderHeader } from "../../common/header";
import { renderMainContainer } from "../../common/common";
import { renderFirstScreen } from "../../common/firstScreen";
import { renderFooter } from "../../common/footer";

export function renderBasket(element) {
	element.innerHTML = "";
	renderHeader();
	renderMainContainer();
	const mainContainer = document.querySelector(".main");
	renderFirstScreen(mainContainer);

	const innerWrapper = document.querySelector(".first-screen__inner-wraper");
	innerWrapper.innerHTML = `
    <h2 class="secondary-main-title">Корзина</h2>
    `;
	innerWrapper.classList.add("basket-page__inner-wrapper_position");
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

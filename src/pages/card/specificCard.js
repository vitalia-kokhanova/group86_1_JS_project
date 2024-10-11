import "./_specificCard.scss";

import { appContainer } from "../../vars.js";
import { renderHeader } from "../../common/header.js";
import { renderMainContainer } from "../../common/common.js";
import { renderFirstScreen } from "../../common/firstScreen.js";
import { renderFooter } from "../../common/footer.js";
import { spinner } from "../../common/spinner.js";
import { cartArray } from "../../vars.js";

export function loadSpecificCardPage(product) {
	spinner();
	setTimeout(() => {
		renderSpecificCard(product);
	}, 3000);
}

function renderSpecificCard(product) {
	const {
		id,
		category,
		name,
		compound,
		image1,
		image2,
		colors,
		flowers,
		gender,
		packing,
		occasion,
		price,
		discount,
	} = product;

	let joinedOccasion;

	function processData(data) {
		if (Array.isArray(data)) {
			const result = data.join(", ");
			joinedOccasion = result;
		} else {
			joinedOccasion = data;
		}
	}

	processData(occasion);

	appContainer.innerHTML = "";
	renderHeader();
	renderMainContainer();
	const mainContainer = document.querySelector(".main");
	renderFirstScreen(mainContainer);

	const innerWrapper = document.querySelector(".first-screen__inner-wraper");
	innerWrapper.classList.add("specific-card__inner-wrapper_position");
	innerWrapper.innerHTML = `
		<h2 class="secondary-main-title specific-card__main-title">${name}</h2>
		<p class="small-grey-title pagename-path-text specific-card__pagename-path-text">
			<span class="pagename-path-span"
				><a href="/" class="pagename-path-link">Главная</a></span
			>
			/
			<span class="pagename-path-span">${name}</span>
		</p>
    `;

	const template = `
		<section class="specific-card">
			<div class="container specific-card__container">
				<div class="specific-card__data-container">
					<div class="specific-card__image-wrapper">
						<img src="${image1}" class="specific-card__image" />
					</div>
					<div class="specific-card__data-wrapper">
						<div class="specific-card__info-wrapper">
							<div class="specific-card__badges-box">
								<div class="badge-box_big white-text-badge_big hit-badge specific-card__hit-badge">
									Хит продаж
								</div>
								<div class="badge-box_big sale-badge_big specific-card__sale-badge">
									Скидка
									<span
										class="specific-card__sale-badge-amount"
										>50%</span
									>
								</div>
								<div class="badge-box_big white-text-badge_big new-badge specific-card__new-badge">
									Новинка
								</div>
								<div class="badge-box_big white-text-badge_big today-bouquet specific-card__today-bouquet">
									Букет дня
								</div>
								<p class="small-grey-title specific-card__badges-box-feedback">
									Отзывов
									<span
										class="specific-card__badges-box-feedback-amount"
										>(1)</span
									>
								</p>
								<p class="small-green-title specific-card__badges-box-availability">Есть в наличии</p>
							</div>
							<div class="specific-card__occasion-box">
								<p class="occasion__small-title">Повод:</p>
								<p class="small-text">${joinedOccasion}</p>
							</div>
							<div class="specific-card__compound-box">
								<p class="occasion__small-title">Состав:</p>
								<p class="small-text">${compound}</p>
							</div>
						</div>
						<div class="specific-card__buttons-wrapper">
							<div class="specific-card__quantity-wrapper">
								<div class="specific-card__quantity-box">
									<button
										class="specific-card__quantity-box-btn specific-card__subtract-btn"
									>
										<img
											src="./assets/icons/subtract-icon-card-page.svg"
										/>
									</button>
									<p class="add-item_number-text">1</p>
									<button
										class="specific-card__quantity-box-btn specific-card__plus-btn"
									>
										<img
											src="./assets/icons/plus-icon-card-page.svg"
										/>
									</button>
								</div>
							</div>
							<div class="specific-card__prices-wrapper">
								<p class="price-text_middle_crossed">
									${price} &#8381;
								</p>
								<p class="price-text_m_medium_green">
									${(price - price * (discount / 100)).toFixed(0)} &#8381;
								</p>
							</div>
							<div class="specific-card__cart-btn-wrapper">
								<button
									class="pink-button big-pink-button basket__button"
								>
									В корзину
								</button>
							</div>
						</div>
						<div class="specific-card__description-wrapper">
							<p class="m-semibold_middle-small-text">
								Описание:
							</p>
							<p class="small-text">
								Веб-дизайн — непростая сфера, провоцирующая
								постоянные споры. Кто-то скажет, что для
								привлечения внимания вашему лендингу просто
								необходим современный дизайн, включающий
								последние тенденции. Другие считают, что
								работающая посадочная страница, на которой
								посетители получают то, зачем пришли, гораздо
								важнее.
							</p>
						</div>
					</div>
				</div>
				<div class="specific-card__feedback-container">
					<p class="m-semibold_middle-small-text">
						Отзывы
						<span class="specific-card__feedback-quantity-number"
							>(1)</span
						>:
					</p>
					<div class="specific-card__feedback-box">
						<p
							class="card-page__pink-subtitle specific-card__feedback-title"
						>
							Отзыв от
							<span class="specific-card__feedback-name"
								>Лена Ленина</span
							>
						</p>
						<p class="small-text specific-card__feedback-text">
							Веб-дизайн — непростая сфера, провоцирующая
							постоянные споры. Кто-то скажет, что для привлечения
							внимания вашему лендингу просто необходим
							современный дизайн, включающий последние тенденции.
							Другие считают, что работающая посадочная страница,
							на которой посетители получают то, зачем пришли,
							гораздо важнее.
						</p>
					</div>
				</div>
			</div>
		</section>
    `;

	mainContainer.insertAdjacentHTML("beforeend", template);

	renderFooter();

	/* Кнопки "Плюс" и "Минус" товар */
	const basketBtn = document.querySelector(".basket__button");
	const plusBtn = document.querySelector(".specific-card__plus-btn");
	const subtractBtn = document.querySelector(".specific-card__subtract-btn");
	const productQuantityTag = document.querySelector(".add-item_number-text");
	const productQuantity = productQuantityTag.textContent;
	let finalProductQuantity = Number(productQuantity);

	function updateButtonStates() {
		subtractBtn.disabled = finalProductQuantity === 0;
		basketBtn.disabled = finalProductQuantity === 0;

		subtractBtn.classList.toggle(
			"disabled-subtract-btn",
			subtractBtn.disabled
		);
		basketBtn.classList.toggle("disabled-basket-btn", basketBtn.disabled);
	}

	updateButtonStates();

	plusBtn.addEventListener("click", () => {
		basketBtn.innerHTML = "В корзину";
		finalProductQuantity++;
		productQuantityTag.textContent = finalProductQuantity;
		updateButtonStates();
	});

	subtractBtn.addEventListener("click", () => {
		basketBtn.innerHTML = "В корзину";
		if (finalProductQuantity > 0) {
			finalProductQuantity--;
			productQuantityTag.textContent = finalProductQuantity;
			updateButtonStates();
		}
	});

	/* Кнопка "В корзину" */

	basketBtn.addEventListener("click", function () {
		fetch("http://localhost:3001/basket_items", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				cart_id: 1,
				product_id: id,
				product_name: name,
				quantity: finalProductQuantity,
				product_category: category,
				product_compound: compound,
				product_image1: image1,
				product_image2: image2,
				product_colors: colors,
				product_flowers: flowers,
				product_gender: gender,
				product_packing: packing,
				product_occasion: occasion,
				product_price: price,
				product_discount: discount,
			}),
		})
			.then((resp) => resp.json())
			.then((newCartItem) => {
				cartArray.push(newCartItem);
				console.log(cartArray);
			});
		alert("Ваш товар добавлен в корзину.");
		basketBtn.innerHTML = `Товар добавлен<br/>в корзину`;
		finalProductQuantity = 0;
		productQuantityTag.textContent = finalProductQuantity;
		updateButtonStates();
	});
}

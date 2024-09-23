import "./_salesBlock.scss";
import { Services } from "../../services/services";
import { salesProductCard } from "./salesProductCard";

export function renderSalesBlock() {
	Services.getProducts().then((data) => {
		setTimeout(() => {
			renderSales(data);
		}, 1000);
	});
}

function renderSales(data) {
	console.log(data);
	const salesArray = data.slice(0, 4);
	console.log(salesArray);
	const template = `
				<section class="sales">
					<div class="sales__container container">
						<h2 class="middle-title sales__title">Скидки</h2>
						<h4 class="test-button-Vika"><a href="/card">Карточка товара - кнопка для Вики</a></h4>
						<div class="sales__inner-wrapper">
							${salesArray.map((item) => salesProductCard(item)).join("")}
						</div>
					</div>
				</section>
			`;
	const firstScreen = document.querySelector(".first-screen");
	firstScreen.insertAdjacentHTML("afterend", template);
}

/* Старая версия, которую создала Карина и которую я чуть-чуть только в начале исправила */
/*
export function renderSalesBlock(element) {
	const template = `
    <section class="sales">
			<div class="sales__container container">
				<h1 class="main__title">Скидки</h1>
				<div class="main__card">
					<button id="mainBtn">ХИТ ПРОДАЖ</button>
					<button id="newBtn">НОВИНКА</button>
					<button id="buketBtn">БУКЕТ ДНЯ</button>
					<img
						src="./assets/images/example_pic.png"
						alt="Фото товара"
					/>
					<div class="main__discount">
						<div class="main__first__discount">Скидка 50%</div>
					</div>
					<h3 class="main__title">№225 “Ромашки для Наташки”</h3>
					<h3 class="main__second__title">
						№225 “Ромашки для Наташки”
					</h3>
					<div class="main__card-price">
						<div class="main__first__price">5 400 руб</div>
						<div class="main__second__price">3 700 руб</div>
						<button id="addBtn">Заказать</button>
					</div>
				</div>
				<div class="main__second__card">
					<div class="second__card">
						<button id="secondBuyBtn">ХИТ ПРОДАЖ</button>
						<button id="newsBtn">НОВИНКА</button>
						<button id="secondbucketBtn">БУКЕТ ДНЯ</button>
						<img
							src="./assets/images/example_pic.png"
							alt="Фото товара"
						/>
						<div class="main__second__discount">Скидка 50%</div>
						<div class="main__card__title">
							<div class="main__first__title">
								№225 “Ромашки для Наташки”
							</div>
							<div class="main__sec__title">
								№225 “Ромашки для Наташки”
							</div>
						</div>
						<div class="main__second__prices">
							<div class="main__secondcard__firstprice">
								5 400 руб
							</div>
							<div class="main__secondcard__secondprice">
								3 700 руб
							</div>
							<button id="secondCardBtn">Заказать</button>
						</div>
					</div>
				</div>
				<div class="main__third__card">
					<button id="thirdCardBtn">ХИТ ПРОДАЖ</button>
					<button id="thirdCardNewBtn">НОВИНКА</button>
					<button id="thirdCardbuketBtn">БУКЕТ ДНЯ</button>
					<img
						src="./assets/images/example_pic.png"
						alt="Фото товара"
					/>
					<div class="main__thirdCard-discount">Скидка 50%</div>
					<div class="main__third__card__titles">
						<div class="main__third__first__title">
							№225 “Ромашки для Наташки”
						</div>
						<div class="main__third__sec__title">
							№225 “Ромашки для Наташки”
						</div>
					</div>
					<div class="main__third__prices">
						<div class="third__first__price">5 400 руб</div>
						<div class="third__second__price">3 700 руб</div>
						<button id="thirdAddBtn">Заказать</button>
					</div>
				</div>
				<div class="main__fourth__card">
					<button id="fourthHitBtn">ХИТ ПРОДАЖ</button>
					<button id="fourthNewsBtn">НОВИНКА</button>
					<button id="fourthbucketBtn">БУКЕТ ДНЯ</button>
					<img
						src="./assets/images/example_pic.png"
						alt="Фото товара"
					/>
					<div class="main__fourth__discount">Скидка 50%</div>
					<div class="main__fourth__titles">
						<div class="fourth__card__first__title">
							№225 “Ромашки для Наташки”
						</div>
						<div class="fourth__card__subtitle">
							№225 “Ромашки для Наташки”
						</div>
					</div>
					<div class="main__fourth__card-prices">
						<div class="main__fourth__first__price">5 400 руб</div>
						<div class="main__fourth__second__price">3 700 руб</div>
						<button id="fourthCardBtn">Заказать</button>
					</div>
				</div>
			</div>
		</section>
        `;
	`
		
		`;
	element.insertAdjacentHTML("beforeend", template);
}
*/

/* Структура для блока Скидки, которую сделала Карина, переделала */
/* `<div class="sales__block__content">
			<div class="sales__block__container">
			<h2 class="sales__block__title">Подарите ощущение праздника</h2>
			<h1 class="sales_block__subtitle">Собираем букеты, <div> созданные для Вас</h1>
			<button type="submit" id="salesBtn">Выбрать букет</button>
			</div>
		</div>
		</div>
		<div class="sales__block__second__container">
			<h1 class="sales__block__title">Скидки</h1>
			<div class="sales__container--cards">
				<div class="sales__block__card">
					<div class="sales__btn">ХИТ ПРОДАЖ</div>
					<div class="sales__news__btn">НОВИНКА</div>
					<div class="sales__bucket__btn">БУКЕТ ДНЯ</div>
					<img src="./assets/images/Ромашки для наташки.png" alt="flowerImg" class="sales__sec__img">
					<div class="sales__block__discount">
						<div class="sales__block__first__price">Скидка 50%</div>
					</div>
					<h3 class="sales__block__title">№225 “Ромашки для Наташки”</h3>
					<h3 class="sales__second__title">№225 “Ромашки для Наташки” </h3>
					<div class="sales__block__card--price">
						<div class="sales__first__price">5 400 руб</div>
						<div class="sales__second__price">3 700 руб</div>
						<button class="sales__add__btn">Заказать</button>
					</div>
				</div>
				<div class="sales__second__card">
					<div class="sales__second__card">
						<div class="sales__sec__btn">ХИТ ПРОДАЖ</div>
						<div class="sales__sec__news__button">НОВИНКА</div>
						<div class="sales__sec__bucket__btn">БУКЕТ ДНЯ</div>
						<img src="./assets/images/Ромашки для наташки.png" alt="secondFlower" class="sales__sec__img">
							<div class="sales__second__discount">Скидка 50%</div>
						<div class="sales__card__title">
							<div class="sales__first__title">№225 “Ромашки для Наташки” </div>
							<div class="sales__sec__title">№225 “Ромашки для Наташки” </div>
						</div>
						<div class="sales__second__prices">
							<div class="sales__secondcard__firstprice">5 400 руб</div>
							<div class="sales__secondcard__secondprice">3 700 руб </div>
							<button class="sales__sec__add__btn">Заказать</button>
						</div>
					</div>
				</div>
				<div class="sales__third__card">
					<div class="sales__third__btn">ХИТ ПРОДАЖ</div>
					<div class="sales__news__button">НОВИНКА</div>
					<div class="sales__third__bucket__btn">БУКЕТ ДНЯ</div>
					<img src="./assets/images/Ромашки для наташки.png" alt="flowerThirdImg">
					<div class="sales__block__thirdCard-discount">Скидка 50%</div>
					<div class="sales__third__card__titles">
						<div class="sales__third__first__title">№225 “Ромашки для Наташки” </div>
						<div class="sales__third__sec__title">№225 “Ромашки для Наташки” </div>
					</div>
					<div class="sales__third__prices">
						<div class="sales__first__price">5 400 руб</div>
						<div class="sales__second__price">3 700 руб</div>
						<button class="sales__third__add__btn">Заказать</button>
					</div>
				</div>
				<div class="sales__block__fourth__card">
					<div class="sales__fourth__btn">ХИТ ПРОДАЖ</div>
					<div class="sales__fourth__news__btn">НОВИНКА</div>
					<div class="sales__fourth__bucket__btn">БУКЕТ ДНЯ</div>
<img src="./assets/images/Ромашки для наташки.png" alt="flowerImg">
<div class="sales__fourth__discount">Скидка 50%</div>
<div class="sales__fourth__titles">
<div class="sales__fourth__card__first__title">№225 “Ромашки для Наташки” </div>
<div class="sales__fourth__card__subtitle">№225 “Ромашки для Наташки” </div>
</div>
<div class="sales__fourth__card-prices">
<div class="sales__fourth__first__price">5 400 руб</div>
<div class="sales__fourth__second__price">3 700 руб</div>
<button class="sales__third__add__btn">Заказать</button>
</div>
				</div>
			</div>
		</div>*/

/* Мои закомментированные структуры и функции */
/*
export function renderTestSalesBlock(element) {
	const template = `
				<section class="sales">
					<div class="sales__container container">
						<h2 class="middle-title sales__title">Скидки</h2>
						<h4 class="test-button-Vika"><a href="/card">Карточка товара - кнопка для Вики</a></h4>
						<div class="sales__inner-wrapper">
							{data.items.map((item) => testSalesProductCard(item))}
						</div>
					</div>
				</section>
			`;
	element.insertAdjacentHTML("beforeend", template);
}

//Services.getProducts().then((data) => {
//setTimeout(function (data) {
// 	console.log(data.items);

function testSalesBlock() {
	const template = `
    <section class="sales">
			<div class="sales__container container">
				<h2 class="middle-title sales__title">Скидки</h2>
				<h4 class="test-button-Vika"><a href="/card">Карточка товара - кнопка для Вики</a></h4>
				<div class="sales__inner-wrapper">
					<div class="card-box_small sales__card-box">
						<div
							class="card-box__image-wrapper_small sales__image-wrapper"
						>
							<div
								class="badge-box_small white-text-badge_small hit-badge"
							>
								ХИТ ПРОДАЖ
							</div>
							<div
								class="badge-box_small white-text-badge_small new-badge"
							>
								НОВИНКА
							</div>
							<div
								class="badge-box_small white-text-badge_small today-bouquet"
							>
								БУКЕТ ДНЯ
							</div>
							<div class="badge-box_small sale-badge_small">
								Скидка 50%
							</div>
							<img
								src="./assets/images/example_pic.png"
								alt="Фото товара"
								class="card-box__image_small"
							/>
						</div>
						<div class="card-box__title-wrapper_small sales__title-wrapper">
							<p class="card-box__title_small small-title_medium">
								№225 “Ромашки для Наташки” №225 “Ромашки для
								Наташки”
							</p>
						</div>
						<div class="card-box__price-button-wrapper_small">
							<div class="card-box__prices-wrapper_small">
								<p class="price-text_small_crossed card-box__old-price_small">
									5 400 руб
								</p>
								<p class="price-text_small_green card-box__relevant-price_small">
									3 700 руб
								</p>
							</div>
							<div class="card-box__button-wrapper_small">
								<button
									class="pink-button small-pink-button order__button card-box__button_small"
								>
									Заказать
								</button>
							</div>
						</div>
					</div>
                    <div class="card-box_small sales__card-box">
						<div
							class="card-box__image-wrapper_small sales__image-wrapper"
						>
							<div
								class="badge-box_small white-text-badge_small hit-badge"
							>
								ХИТ ПРОДАЖ
							</div>
							<div
								class="badge-box_small white-text-badge_small new-badge"
							>
								НОВИНКА
							</div>
							<div
								class="badge-box_small white-text-badge_small today-bouquet"
							>
								БУКЕТ ДНЯ
							</div>
							<div class="badge-box_small sale-badge_small">
								Скидка 50%
							</div>
							<img
								src="./assets/images/example_pic.png"
								alt="Фото товара"
								class="card-box__image_small"
							/>
						</div>
						<div class="card-box__title-wrapper_small sales__title-wrapper">
							<p class="card-box__title_small small-title_medium">
								№225 “Ромашки для Наташки” №225 “Ромашки для
								Наташки”
							</p>
						</div>
						<div class="card-box__price-button-wrapper_small">
							<div class="card-box__prices-wrapper_small">
								<p class="price-text_small_crossed card-box__old-price_small">
									5 400 руб
								</p>
								<p class="price-text_small_green card-box__relevant-price_small">
									3 700 руб
								</p>
							</div>
							<div class="card-box__button-wrapper_small">
								<button
									class="pink-button small-pink-button order__button card-box__button_small"
								>
									Заказать
								</button>
							</div>
						</div>
					</div>
                    <div class="card-box_small sales__card-box">
						<div
							class="card-box__image-wrapper_small sales__image-wrapper"
						>
							<div
								class="badge-box_small white-text-badge_small hit-badge"
							>
								ХИТ ПРОДАЖ
							</div>
							<div
								class="badge-box_small white-text-badge_small new-badge"
							>
								НОВИНКА
							</div>
							<div
								class="badge-box_small white-text-badge_small today-bouquet"
							>
								БУКЕТ ДНЯ
							</div>
							<div class="badge-box_small sale-badge_small">
								Скидка 50%
							</div>
							<img
								src="./assets/images/example_pic.png"
								alt="Фото товара"
								class="card-box__image_small"
							/>
						</div>
						<div class="card-box__title-wrapper_small sales__title-wrapper">
							<p class="card-box__title_small small-title_medium">
								№225 “Ромашки для Наташки” №225 “Ромашки для
								Наташки”
							</p>
						</div>
						<div class="card-box__price-button-wrapper_small">
							<div class="card-box__prices-wrapper_small">
								<p class="price-text_small_crossed card-box__old-price_small">
									5 400 руб
								</p>
								<p class="price-text_small_green card-box__relevant-price_small">
									3 700 руб
								</p>
							</div>
							<div class="card-box__button-wrapper_small">
								<button
									class="pink-button small-pink-button order__button card-box__button_small"
								>
									Заказать
								</button>
							</div>
						</div>
					</div>
                    <div class="card-box_small sales__card-box">
						<div
							class="card-box__image-wrapper_small sales__image-wrapper"
						>
							<div
								class="badge-box_small white-text-badge_small hit-badge"
							>
								ХИТ ПРОДАЖ
							</div>
							<div
								class="badge-box_small white-text-badge_small new-badge"
							>
								НОВИНКА
							</div>
							<div
								class="badge-box_small white-text-badge_small today-bouquet"
							>
								БУКЕТ ДНЯ
							</div>
							<div class="badge-box_small sale-badge_small">
								Скидка 50%
							</div>
							<img
								src="./assets/images/example_pic.png"
								alt="Фото товара"
								class="card-box__image_small"
							/>
						</div>
						<div class="card-box__title-wrapper_small sales__title-wrapper">
							<p class="card-box__title_small small-title_medium">
								№225 “Ромашки для Наташки” №225 “Ромашки для
								Наташки”
							</p>
						</div>
						<div class="card-box__price-button-wrapper_small">
							<div class="card-box__prices-wrapper_small">
								<p class="price-text_small_crossed card-box__old-price_small">
									5 400 руб
								</p>
								<p class="price-text_small_green card-box__relevant-price_small">
									3 700 руб
								</p>
							</div>
							<div class="card-box__button-wrapper_small">
								<button
									class="pink-button small-pink-button order__button card-box__button_small"
								>
									Заказать
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        `;
}
*/

import "./_testSalesBlock.scss";

export function renderTestSalesBlock(element) {
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
	element.insertAdjacentHTML("beforeend", template);
}

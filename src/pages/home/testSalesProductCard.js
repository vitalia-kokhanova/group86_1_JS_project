export function testSalesProductCard(product) {
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
	console.log(product);

	function redirectToCardPage(path, data) {
		let pathName = window.location.pathname;
		pathName = path;
		window.location.pathname = "/specificCard";
	}

	return `
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
								src="${image1}"
								alt="Фото товара"
								class="card-box__image_small"
							/>
						</div>
						<div class="card-box__title-wrapper_small sales__title-wrapper">
							<p class="card-box__title_small small-title_medium">
								${name}
							</p>
						</div>
						<div class="card-box__price-button-wrapper_small">
							<div class="card-box__prices-wrapper_small">
								<p class="price-text_small_crossed card-box__old-price_small">
									${price} &#8381
								</p>
								<p class="price-text_small_green card-box__relevant-price_small">
									${(price - price * (discount / 100)).toFixed(0)} &#8381;
								</p>
							</div>
							<div class="card-box__button-wrapper_small">
								<button
									class="pink-button small-pink-button order__button card-box__button_small" onclick="redirectToCardPage()"
								>
									Заказать
								</button>
							</div>
						</div>
					</div>
        `;
}

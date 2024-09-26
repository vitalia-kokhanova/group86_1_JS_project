export function salesProductCard(product) {
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
    <div class="card-box-small sales__card-box">
						<div
							class="card-box-small__image-wrapper sales__image-wrapper"
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
								class="card-box-small__image"
							/>
						</div>
						<div class="card-box-small__title-wrapper sales__title-wrapper">
							<p class="card-box-small__title small-title_medium">
								${name}
							</p>
						</div>
						<div class="card-box-small__lower-wrapper">
							<div class="card-box-small__prices-wrapper">
								<p class="price-text_small_crossed card-box-small__old-price">
									${price} &#8381
								</p>
								<p class="price-text_small_green card-box-small__relevant-price">
									${(price - price * (discount / 100)).toFixed(0)} &#8381;
								</p>
							</div>
							<div class="card-box-small__button-wrapper">
								<button
									class="pink-button small-pink-button order__button card-box-small__button" onclick="redirectToCardPage()"
								>
									Заказать
								</button>
							</div>
						</div>
					</div>
        `;
}

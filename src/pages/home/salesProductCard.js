export function salesProductCard(product, element) {
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
	console.log(product.id);

	function redirectToCardPage(path, data) {
		let pathName = window.location.pathname;
		pathName = path;
		window.location.pathname = "/specificCard";
	}

	let card = document.createElement("div");
	card.classList.add("card-box-small", "sales__card-box", "sales__slide");
	card.value = id;
	console.log(card.value);

	let cardImageWrapper = document.createElement("div");
	cardImageWrapper.classList.add(
		"card-box-small__image-wrapper",
		"sales__image-wrapper"
	);

	let cardTitleWrapper = document.createElement("div");
	cardTitleWrapper.classList.add(
		"card-box-small__title-wrapper",
		"sales__title-wrapper"
	);

	let cardLowerWrapper = document.createElement("div");
	cardLowerWrapper.classList.add("card-box-small__lower-wrapper");

	card.append(cardImageWrapper, cardTitleWrapper, cardLowerWrapper);

	let cardImage = document.createElement("img");
	cardImage.classList.add("card-box-small__image");
	cardImage.src = image1;
	cardImageWrapper.append(cardImage);

	let cardTitle = document.createElement("p");
	cardTitle.classList.add("card-box-small__title", "small-title_medium");
	cardTitle.textContent = name;
	cardTitleWrapper.append(cardTitle);

	let pricesWrapper = document.createElement("div");
	pricesWrapper.classList.add("card-box-small__prices-wrapper");
	let buttonWrapper = document.createElement("div");
	buttonWrapper.classList.add("card-box-small__button-wrapper");
	cardLowerWrapper.append(pricesWrapper, buttonWrapper);

	let oldPrice = document.createElement("p");
	oldPrice.classList.add(
		"price-text_small_crossed",
		"card-box-small__old-price"
	);
	oldPrice.innerHTML = `${price} &#8381`;

	let newPrice = document.createElement("p");
	newPrice.classList.add(
		"price-text_small_green",
		"card-box-small__relevant-price"
	);
	newPrice.innerHTML = `${(price - price * (discount / 100)).toFixed(
		0
	)} &#8381;`;

	pricesWrapper.append(oldPrice, newPrice);

	let button = document.createElement("button");
	button.classList.add(
		"pink-button",
		"small-pink-button",
		"order__button",
		"card-box-small__button"
	);
	button.textContent = "Заказать";
	buttonWrapper.append(button);

	element.insertAdjacentElement("afterbegin", card);
}

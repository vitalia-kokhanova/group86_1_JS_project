import "./_deliveryBlock.scss";

export function renderDelivery(element) {
	const template = `
		<section class="delivery-block">
			<div class="delivery-block__image-container">
				<img
					src="./assets/images/home_page_img/delivery_back.png"
					alt="Фоновая картинка с цветами"
				/>
			</div>
			<div class="delivery-block__content-container container">
				<div class="delivery-block__inner-wrapper">
					<h2 class="delivery-block__container-title middle-title">
						Доставка
					</h2>
					<p class="middle-small-title delivery-block__text">
						Возьмём на себя все заботы по созданию, оформлению и
						доставке корпоративных букетов в обычные и праздничные
						дни за разумные деньги
					</p>
				</div>
			</div>
		</section>
    `;
	element.insertAdjacentHTML("beforeend", template);
}

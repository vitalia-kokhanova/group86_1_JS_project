import "./deliveryBlock.scss";

export function renderDelivery(element) {
	const template = `
    <section class="delivery-block">
			<div class="delivery-block__container container">
				<div class="delivery-block__inner-wrapper">
					<h2 class="delivery-block__container-title middle-title">
						Доставка
					</h2>
					<p class="delivery-block__text">
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

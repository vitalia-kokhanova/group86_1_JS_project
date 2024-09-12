import "./salesBlock.scss";

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
	element.insertAdjacentHTML("beforeend", template);
}

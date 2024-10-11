import "./_salesBlock.scss";
import { salesProductCard } from "./salesProductCard";

let salesArray;

export function renderSalesBlock(data) {
	salesArray = createSalesArray(data);

	const firstSliderBoxArray = salesArray.slice(0, 4);
	const secondSliderBoxArray = salesArray.slice(4, 8);
	const thirdSliderBoxArray = salesArray.slice(8, 12);

	const template = `
	<section class="sales">
			<div class="container sales__container">
				<h2 class="middle-title sales__title">Скидки</h2>
				<div class="sales__slider-container">
					<div class="sales__slider-track">
						<div class="sales__slider-box sales__slider-box-1"></div>
						<div class="sales__slider-box sales__slider-box-2"></div>
						<div class="sales__slider-box sales__slider-box-3"></div>
					</div>
					<div class="sales__slider-dots">
						<div class="slider-dot"></div>
						<div class="slider-dot"></div>
						<div class="slider-dot"></div>
					</div>
				</div>
			</div>
			<div class="petals-wrapper petals-wrapper-1">
				<div class="petal-wrapper petal-wrapper-1">
					<img
						src="./assets/images/bg_petals/petal1.png"
						alt="Фоновый лепесток"
						class="petal petal-1"
					/>
				</div>
				<div class="petal-wrapper petal-wrapper-2">
					<img
						src="./assets/images/bg_petals/petal2.png"
						alt="Фоновый лепесток"
						class="petal petal-2"
					/>
				</div>
			</div>
		</section>
			`;
	const firstScreen = document.querySelector(".first-screen");
	firstScreen.insertAdjacentHTML("afterend", template);

	let sliderBoxOne = document.querySelector(".sales__slider-box-1");
	firstSliderBoxArray.forEach((item) => {
		salesProductCard(item, sliderBoxOne);
	});

	let sliderBoxTwo = document.querySelector(".sales__slider-box-2");
	secondSliderBoxArray.forEach((item) => {
		salesProductCard(item, sliderBoxTwo);
	});

	let sliderBoxThree = document.querySelector(".sales__slider-box-3");
	thirdSliderBoxArray.forEach((item) => {
		salesProductCard(item, sliderBoxThree);
	});

	const sliderTrack = document.querySelector(".sales__slider-track");
	const sliderBoxes = document.querySelectorAll(".sales__slider-box");
	const dots = document.querySelectorAll(".slider-dot");

	let currentSlide = 0;
	let autoplayInterval;
	let isPausedByClick = false; // Флаг для отслеживания паузы после клика
	let sliderWidth = sliderBoxes[0].offsetWidth;

	function switchToSlide(index) {
		sliderBoxes.forEach((box) => box.classList.remove("current-slide"));

		currentSlide = index;
		const currentSlideElement = sliderBoxes[currentSlide];
		currentSlideElement.classList.add("current-slide");

		if (!sliderWidth) {
			sliderWidth = sliderBoxes[currentSlide].offsetWidth;
		}

		sliderTrack.style.transform = `translateX(-${
			currentSlide * sliderWidth
		}px)`;

		dots.forEach((dot, i) =>
			dot.classList.toggle("active", i === currentSlide)
		);
	}

	// Запуск автоматической прокрутки
	autoplayInterval = setInterval(nextSlide, 4000);

	// Пауза при наведении
	sliderTrack.addEventListener("mouseenter", () => {
		clearInterval(autoplayInterval);
	});

	// Возобновление при убирании
	sliderTrack.addEventListener("mouseleave", () => {
		if (!isPausedByClick) {
			autoplayInterval = setInterval(nextSlide, 4000);
		}
	});

	// Обработчик клика на точку навигации
	dots.forEach((dot, index) => {
		dot.addEventListener("click", () => {
			switchToSlide(index);
			isPausedByClick = true; // Устанавливаем флаг, что пауза вызвана кликом
			clearInterval(autoplayInterval);
			autoplayInterval = setTimeout(() => {
				isPausedByClick = false; // Сбрасываем флаг после 10 секунд
				if (!sliderTrack.matches(":hover")) {
					autoplayInterval = setInterval(nextSlide, 4000);
				}
			}, 10000);
		});
	});

	// Переход к следующему слайду
	function nextSlide() {
		switchToSlide((currentSlide + 1) % sliderBoxes.length);
	}

	redirectToCardPage();
}

/****************************************  Функция создания массива с товарами со скидками ******************************************/

function createSalesArray(data) {
	const discountedProducts = data.filter((product) => product.discount > 0);

	const normalizedProducts = discountedProducts.map((product) => {
		return {
			...product,
			category: Array.isArray(product.category)
				? product.category.join(", ")
				: product.category,
		};
	});

	const productsByCategory = normalizedProducts.reduce((grouped, product) => {
		grouped[product.category] = grouped[product.category] || [];
		grouped[product.category].push(product);
		return grouped;
	}, {});

	const sortedCategories = Object.keys(productsByCategory).sort();

	const categoryQueues = sortedCategories.reduce((queues, category) => {
		queues[category] = [...productsByCategory[category]];
		return queues;
	}, {});

	const organizedProducts = [];

	while (Object.values(categoryQueues).some((queue) => queue.length)) {
		for (const category of sortedCategories) {
			const queue = categoryQueues[category];
			if (queue.length) {
				organizedProducts.push(queue.shift());
			}
		}
	}
	return organizedProducts;
}

/****************************************  Функция для клика по карточке товара ******************************************/

let oneItemArticle;
let oneProduct;

function redirectToCardPage() {
	let cards = document.querySelectorAll(".card-box-small");
	cards.forEach((card) => {
		card.addEventListener("click", function () {
			oneItemArticle = this.value;
			console.log(oneItemArticle);

			oneProduct = salesArray.find(({ id }) => id === oneItemArticle);
			console.log(oneProduct);
			window.location.pathname = `/${this.value}`;
		});
	});
}

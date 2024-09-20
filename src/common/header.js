import { appContainer } from "../vars";
import "./_header.scss";

export function renderHeader() {
	const template = `
    <header class="header">
			<div class="header__container container">
				<div class="header__burger-container">
					<img
						src="./assets/icons/header_icons/burger_icon.svg"
						alt="Значок бургера"
						id="burgerImg"
					/>
				</div>
				<div class="header__logo-container">
					<div class="header__logo-box">
						<img
						src="./assets/icons/header_icons/logo_image.png"
						alt="Логотип"
						class="header__logo-img"
					/>
					</div>
					<div class="header__logo-title">FLORISTMAN</div>
					<div class="header__logo-subtitle">
						Широкий выбор на любой вкус
					</div>
				</div>
				<div class="header__nav-icons">
					<nav class="header__nav-box">
					<a href=""
						><img
							src="./assets/icons/header_icons/search_icon.png"
							alt="Значок поиска"
							id="searchImg"
					/></a>
					<a href="/basket"
						><img
							src="./assets/icons/header_icons/basket_icon.png"
							alt="Значок корзины"
							id="baksetImg"
					/></a>
					<a href="/auth"
						><img
							src="./assets/icons/header_icons/profile_icon.png"
							alt="Значок профиля"
							id="profileImg"
					/></a>
					</nav>
				</div>
			</div>
		</header>
    `;
	appContainer.insertAdjacentHTML("afterbegin", template);
}
 /*
 <!-- <header>
			<div class="header__content">
			<div class="header__burger-container">
				<img src="./assets/images/Гамбургер (1).png" alt="header__burger" id="burgerImg">
			<div class="header__logo__container">
<img src="./assets/images/Слой 0.png" alt="header__logo" class="header__img">
<div class="header__logo__title">FLORISTMAN <div class="header__subtitle">Широкий выбор на любой вкус</div></div>
</div>
			</div>
			<div class="header__icon__images">
				<a href=""><img src="./assets/images/Поиск.png" alt="search__img" id="searchImg"></a>
				<a href=""><img src="./assets/images/4d5f2b4c-e340-4db0-9f51-898dc7034432.png" alt="basket__img" id="baksetImg"></a>
				<a href=""><img src="./assets/images/Пользователь.png" alt="profile__img" id="profileImg"></a>
			</div>
		</header> -->
  */
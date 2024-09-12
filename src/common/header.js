import { appContainer } from "../vars";
import "./header.scss";

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

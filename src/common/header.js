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
				<div class="logo-container header__logo-container">
					<div class="logo-box header__logo-box">
						<img
							src="./assets/icons/header_icons/logo_image.png"
							alt="Логотип"
							class="logo-img header__logo-img"
						/>
					</div>
					<div class="logo-titles-box">
						<div class="logo-title header__logo-title">
							FLORISTMAN
						</div>
						<div class="logo-subtitle header__logo-subtitle">
							Широкий выбор на любой вкус
						</div>
					</div>
				</div>
				<div class="header__nav-icons">
					<nav class="header__nav-box">
						<ul class="header__nav-list">
							<li class="header__nav-list-item">
								<a
									href=""
									class="list-item-link search-icon-link"
								>
									<svg
										width="38"
										height="38"
										viewBox="0 0 38 38"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											id="searchIconPath"
											d="M15.9334 0.599365C7.48323 0.599365 0.600098 7.48249 0.600098 15.9327C0.600098 24.3829 7.48323 31.266 15.9334 31.266C19.6081 31.266 22.9828 29.9611 25.6276 27.7951L34.7826 36.9501C34.9239 37.0973 35.0932 37.2148 35.2804 37.2957C35.4677 37.3767 35.6692 37.4194 35.8732 37.4215C36.0772 37.4236 36.2796 37.3849 36.4685 37.3078C36.6573 37.2307 36.8289 37.1167 36.9732 36.9724C37.1174 36.8282 37.2314 36.6566 37.3086 36.4677C37.3857 36.2788 37.4243 36.0765 37.4222 35.8725C37.4202 35.6685 37.3774 35.467 37.2965 35.2797C37.2155 35.0924 37.098 34.9232 36.9509 34.7819L27.7958 25.6268C29.9619 22.982 31.2668 19.6073 31.2668 15.9327C31.2668 7.48249 24.3836 0.599365 15.9334 0.599365ZM15.9334 3.66603C22.7263 3.66603 28.2001 9.13984 28.2001 15.9327C28.2001 22.7256 22.7263 28.1994 15.9334 28.1994C9.14058 28.1994 3.66676 22.7256 3.66676 15.9327C3.66676 9.13984 9.14058 3.66603 15.9334 3.66603Z"
											fill="#EB8671"
										/>
									</svg>
								</a>
							</li>
							<li class="header__nav-list-item">
								<a
									href="/basket"
									class="list-item-link basket-icon-link"
								>
									<div class="basket-icon-wrapper">
										<svg
											width="46"
											height="33"
											viewBox="0 0 46 33"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											class="cart-icon"
										>
											<path
												id="cartIconPath"
												d="M44.5519 7.00546C44.0539 6.441 43.3145 6.11446 42.5345 6.11446H13.0228L12.7365 4.7156C12.5538 3.82233 11.8628 3.09657 10.939 2.82711L3.39851 0.627567C2.01594 0.224512 0.547194 0.951451 0.118354 2.25172C-0.310486 3.55188 0.462684 4.9328 1.84546 5.33615L7.88528 7.09784L12.4887 26.0901C12.6491 26.8935 13.2133 27.544 13.9612 27.8709C13.939 28.0397 13.9263 28.2113 13.9263 28.3857C13.9263 30.6877 15.9179 32.5604 18.3659 32.5604C20.8138 32.5604 22.8055 30.6876 22.8055 28.3857C22.8055 28.2896 22.8007 28.1946 22.7939 28.1002H29.8027C29.7959 28.1946 29.7911 28.2897 29.7911 28.3857C29.7911 30.6877 31.7828 32.5604 34.2307 32.5604C36.6788 32.5604 38.6704 30.6876 38.6704 28.3857C38.6704 28.2828 38.665 28.181 38.6573 28.08C39.7789 27.9522 40.704 27.1566 40.917 26.09L45.111 9.03424C45.2547 8.31351 45.0499 7.56991 44.5519 7.00546ZM18.3659 30.4187C17.1736 30.4187 16.2036 29.5066 16.2036 28.3855C16.2036 27.2644 17.1736 26.3523 18.3659 26.3523C19.5581 26.3523 20.5281 27.2644 20.5281 28.3855C20.5281 29.5066 19.5581 30.4187 18.3659 30.4187ZM34.2306 30.4187C33.0384 30.4187 32.0684 29.5066 32.0684 28.3855C32.0684 27.2644 33.0384 26.3523 34.2306 26.3523C35.4229 26.3523 36.3929 27.2644 36.3929 28.3855C36.3929 29.5066 35.4228 30.4187 34.2306 30.4187ZM35.7542 21.961H17.7897C16.9211 21.961 16.2169 21.2988 16.2169 20.4821C16.2169 19.6653 16.9211 19.0031 17.7897 19.0031H35.7542C36.6228 19.0031 37.327 19.6653 37.327 20.4821C37.327 21.2988 36.6228 21.961 35.7542 21.961ZM35.7542 14.0734H17.7897C16.9211 14.0734 16.2169 13.4112 16.2169 12.5945C16.2169 11.7777 16.9211 11.1156 17.7897 11.1156H35.7542C36.6228 11.1156 37.327 11.7777 37.327 12.5945C37.327 13.4112 36.6228 14.0734 35.7542 14.0734Z"
												fill="#EB8671"
											/>
										</svg>

										<div class="round-icon-wrapper">
											<svg
												width="18"
												height="18"
												viewBox="0 0 19 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												class="round-icon"
											>
												<ellipse
													id="roundIconPath"
													cx="9.59229"
													cy="8.90304"
													rx="9.40748"
													ry="8.84616"
													fill="#EB8671"
												/>
											</svg>
											<p class="basket-icon-number">0</p>
										</div>
									</div>
								</a>
							</li>
							<li class="header__nav-list-item">
								<a
									href="/auth"
									class="list-item-link profile-icon__link"
								>
									<svg
										width="38"
										height="38"
										viewBox="0 0 38 38"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											id="profileIconPath"
											d="M23.6001 25.1334V22.0667C24.2901 21.7248 26.2635 19.3757 26.4705 17.5403C27.0133 17.4989 27.8658 17.0006 28.1173 15.0333C28.2522 13.9768 27.7156 13.3834 27.3905 13.1964C27.3905 13.1964 28.2001 11.6584 28.2001 9.80156C28.2001 6.07863 26.7388 2.90156 23.6001 2.90156C23.6001 2.90156 22.5099 0.601562 19.0001 0.601562C12.4957 0.601562 9.8001 4.77376 9.8001 9.80156C9.8001 11.4944 10.6097 13.1964 10.6097 13.1964C10.2846 13.3834 9.74796 13.9784 9.8829 15.0333C10.1344 17.0006 10.9869 17.4989 11.5297 17.5403C11.7367 19.3757 13.7101 21.7248 14.4001 22.0667V25.1334C12.8668 29.7334 0.600098 26.6667 0.600098 37.4H37.4001C37.4001 26.6667 25.1334 29.7334 23.6001 25.1334Z"
											fill="#EB8671"
										/>
									</svg>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
    `;
	appContainer.insertAdjacentHTML("afterbegin", template);

	const headerLogo = document.querySelector(".header__logo-container");
	headerLogo.addEventListener("click", () => {
		window.location.pathname = "/";
	});
}

/* Структура хедера, которую делала Карина */
/*
<header>
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
		</header>
  */

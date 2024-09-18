import "./card.scss";
import catalogData from "../../../catalog.json";
import { quantity } from "./functionCard.js";

export function renderMainCard(bouquet, element) {
const mainCard = `
    <div class="card-container">
        <div class="card">
            <div class="card-img"><img src="${bouquet.image1.replace(/^require\(['"](.*)['"]\)$/, '$1')}" alt="${bouquet.name}"></div>
            <div class="card-choice">
                <button id="left"></button>
                <div class="photo"><a href=""></a></div>
                <div class="photo"><a href=""></a></div>
                <div class="photo"><a href=""></a></div>
                <div class="photo"><a href=""></a></div>
                <button id="right"></button>
            </div>
            <div class="card-marking">
                <div class="hit">ХИТ ПРОДАЖ</div>
                <div class="new">НОВИНКА</div>
                <div class="discount">Скидка 50%</div>
                <div class="bouquet">БУКЕТ ДНЯ</div>
                <p class="review">Отзывов (1)</p>
                <p class="presence">Есть в наличии</p>
                <div class="tags">
                    <h3>Повод:</h3>
                    <p>${bouquet.occasion.join(', ')}</p>
                    <h3>Кому:</h3>
                    <p>Маме. Девушке. Женщине. Учителю. Тёще. Друзьям</p>
                </div>
            </div>
            <div class="card-quantity">
                <div class="btn-quantity">
                    <button id="btnDecrease">-</button>
                    <span id="quantity">${quantity}</span>
                    <button id="btnIncrease">+</button>
                </div>
                <div class="card-price">
                    <span id="total-price">${bouquet.price}</span>
                    <button id="btnCart" data-name="${bouquet.name}" data-price="${bouquet.price}">В корзину</button>
                </div>
            </div>
            <div class="card-description">
                <h3>Описание:</h3>
                <p>${Array.isArray(bouquet.flowers) ? bouquet.flowers.join(', ') : bouquet.flowers}</p>
            </div>
        </div>
    </div>
  `;

  element.insertAdjacentHTML("beforeend", mainCard);
}

// Пример использования
const catalogContainer = document.getElementById('catalog-container');

catalogData.forEach(bouquet => {
    renderMainCard(bouquet, catalogContainer);
});
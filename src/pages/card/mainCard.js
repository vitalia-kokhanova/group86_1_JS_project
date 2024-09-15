import "./catalogPreview.scss";
import "./card.scss";

export function renderMainCard(element) {
const mainCard = `
    <div class="card-container">
        <div class="card">
            <div class="card-img"><a href=""></a></div>
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
                    <p>8 марта. 9 мая. Любовь</p>
                    <h3>Кому:</h3>
                    <p>Маме. Девушке. Женщине. Учителю. Тёще. Друзьям</p>
                </div>
            </div>
            <div class="card-quantity">
                <button id="btnQuantity"></button>
                <div class="card-price"></div>
                <button id="inBasket">В корзину</button>
            </div>
            <div class="card-description">
                <h3>Описание:</h3>
                <p> вставлю когда фигма откроется с компа</p>
            </div>
        </div>
    </div>
    `;
element.insertAdjacentHTML("beforeend", mainCard);
}
export function renderCatalogContainer(element) {
  const catalogContainer = `
        <section class="catalog-container">
			<aside class="catalog-filters">
            <h3>Фильтры</h3>
            <div class="filters-wrapper">
            
    <div class="filter__item">
      <div class="filter__item_subtitle">
        <h4>Категории:</h4>
        <span class="filter__item_spoiler"></span>
      </div>
      <div class="filter__item_content filter__category">
        <div class="filter__category_inputs">
          <label><input type="checkbox" id="" class="" />Букет из цветов</label>
          <label><input type="checkbox" id="" class="" />Мягкая игрушка</label>
          <label><input type="checkbox" id="" class="" />Воздушные шары</label>
          <label><input type="checkbox" id="" class="" />Сладости</label>
          <label><input type="checkbox" id="" class="" />Фрукты</label>
        </div>
      </div>
    </div>

<div class="filter__item">
      <div class="filter__item_subtitle">
        <h4>Повод:</h4>
        <span class="filter__item_spoiler"></span>
      </div>
      <div class="filter__item_content filter__occasion">
        <div class="filter__occasion_inputs">
          <label><input type="checkbox" id="" class="" />8 марта</label>
          <label><input type="checkbox" id="" class="" />День рождения</label>
          <label><input type="checkbox" id="" class="" />Юбилей</label>
          <label><input type="checkbox" id="" class="" />1 сентября</label>
          <label
            ><input type="checkbox" id="" class="" />Рождение ребенка</label
          >
          <label><input type="checkbox" id="" class="" />Свадьба</label>
          <label><input type="checkbox" id="" class="" />14 февраля</label>
        </div>
      </div>
    </div>
            
    <div class="filter__item">
      <div class="filter__item_subtitle">
        <h4>Кому:</h4>
        <span class="filter__item_spoiler"></span>
      </div>
      <div class="filter__item_content filter__gender">
        <div class="filter__gender_inputs">
          <label><input type="checkbox" id="" class="" />Женщине</label>
          <label><input type="checkbox" id="" class="" />Мужчине</label>
        </div>
      </div>
    </div>
            
    <div class="filter__item">
      <div class="filter__item_subtitle">
        <h4>Цветы:</h4>
        <span class="filter__item_spoiler"></span>
      </div>
      <div class="filter__item_content filter__flowers">
        <div class="filter__flowers_inputs">
          <label><input type="checkbox" id="" class="" />Подсолнух</label>
          <label><input type="checkbox" id="" class="" />Роза</label>
          <label><input type="checkbox" id="" class="" />Вибурнум</label>
          <label><input type="checkbox" id="" class="" />Салал</label>
          <label><input type="checkbox" id="" class="" />Фоамиран</label>
          <label><input type="checkbox" id="" class="" />Лилия</label>
          <label><input type="checkbox" id="" class="" />Танацетум</label>
          <label><input type="checkbox" id="" class="" />Форзиция</label>
          <label><input type="checkbox" id="" class="" />Нутан</label>
          <label><input type="checkbox" id="" class="" />Эустома</label>
          <label><input type="checkbox" id="" class="" />Альстромерия</label>
          <label><input type="checkbox" id="" class="" />Гвоздика</label>
          <label><input type="checkbox" id="" class="" />Бруния</label>
          <label><input type="checkbox" id="" class="" />Орхидея</label>
          <label><input type="checkbox" id="" class="" />Тюльпан</label>
          <label><input type="checkbox" id="" class="" />Хризантема</label>
          <label><input type="checkbox" id="" class="" />Ирис</label>
          <label><input type="checkbox" id="" class="" />Вероника</label>
          <label><input type="checkbox" id="" class="" />Гортензия</label>
          <label><input type="checkbox" id="" class="" />Маттиола</label>
          <label><input type="checkbox" id="" class="" />Астильба</label>
          <label><input type="checkbox" id="" class="" />Ваксфлауэр</label>
        </div>
      </div>
    </div>

           
 <div class="filter__item">
      <div class="filter__item_subtitle">
        <h4>Фрукты и ягоды:</h4>
        <span class="filter__item_spoiler"></span>
      </div>
      <div class="filter__item_content filter__fruits">
        <div class="filter__fruits_inputs">
          <label><input type="checkbox" id="" class="" />Инжир</label>
          <label><input type="checkbox" id="" class="" />Клубника</label>
          <label><input type="checkbox" id="" class="" />Ежевика</label>
          <label><input type="checkbox" id="" class="" />Малина</label>
          <label><input type="checkbox" id="" class="" />Голубика</label>
          <label
            ><input type="checkbox" id="" class="" />Красная смородина</label
          >
          <label><input type="checkbox" id="" class="" />Яблоко</label>
          <label><input type="checkbox" id="" class="" />Мандарин</label>
          <label><input type="checkbox" id="" class="" />Лимон</label>
          <label><input type="checkbox" id="" class="" />Киви</label>
          <label><input type="checkbox" id="" class="" />Лайм</label>
        </div>
      </div>
    </div>
            
<div class="filter__item">
      <div class="filter__item_subtitle">
        <h4>Упаковка:</h4>
        <span class="filter__item_spoiler"></span>
      </div>
      <div class="filter__item_content filter__packing">
        <div class="filter__packing_inputs">
          <label><input type="checkbox" id="" class="" />Букет</label>
          <label><input type="checkbox" id="" class="" />Корзина</label>
          <label><input type="checkbox" id="" class="" />Коробка</label>
        </div>
      </div>
    </div>

<div class="filter__item">
      <div class="filter__item_subtitle">
        <h4>Цвет:</h4>
        <span class="filter__item_spoiler"></span>
      </div>
      <div class="filter__item_content filter__color">
        <div class="filter__color_inputs">
          <label><input type="checkbox" id="" class=""/>Желтый</label>
          <label><input type="checkbox" id="" class="" />Оранжевый</label>
          <label><input type="checkbox" id="" class="" />Красный</label>
          <label><input type="checkbox" id="" class="" />Белый</label>
          <label><input type="checkbox" id="" class="" />Черный</label>
          <label><input type="checkbox" id="" class="" />Фиолетовый</label>
          <label><input type="checkbox" id="" class="" />Розовый</label>
          <label><input type="checkbox" id="" class="" />Зеленый</label>
          <label><input type="checkbox" id="" class="" />Коричневый</label>
          <label><input type="checkbox" id="" class="" />Серый</label>
          <label><input type="checkbox" id="" class="" />Золотой</label>
          <label><input type="checkbox" id="" class="" />Голубой</label>
        </div>
      </div>
    </div>
            
<div class="filter__item">
      <div class="filter__item_subtitle">
        <h4>Скидка:</h4>
        <span class="filter__item_spoiler"></span>
      </div>
      <div class="filter__item_content filter__discount">
        <div class="filter__discount_inputs">
          <input
            type="number"
            id="discountmin"
            step="1"
            class="filter-input filter-discount"
          />
          <input
            type="number"
            id="discountmax"
            step="1"
            class="filter-input filter-discount"
          />
        </div>

        <div class="filter__discount_range">
          <span class="filter-slider-track"></span>
          <input
            type="range"
            id="rangemin"
            class="filter-range"
            min="2"
            max="20"
          />
          <input
            type="range"
            id="rangemax"
            class="filter-range"
            min="2"
            max="20"
          />
        </div>
      </div>
    </div>
  
<div class="filter__item">
      <div class="filter__item_subtitle">
        <h4>Размер:</h4>
        <span class="filter__item_spoiler"></span>
      </div>
      <div class="filter__item_content filter__size">
        <div class="filter__size_inputs">
          <input
            type="number"
            id="sizemin"
            step="1"
            class="filter-input filter-size"
          />
          <input
            type="number"
            id="sizemax"
            step="1"
            class="filter-input filter-size"
          />
        </div>

        <div class="filter__size_range">
          <span class="filter-slider-track"></span>
          <input
            type="range"
            id="rangemin"
            class="filter-range"
            min="20"
            max="70"
          />
          <input
            type="range"
            id="rangemax"
            class="filter-range"
            min="20"
            max="70"
          />
        </div>
      </div>
    </div>

        <div class="filter__item">
            <div class="filter__item_subtitle">
                <h4>Цена:</h4>
                <span class="filter__item_spoiler"></span>
            </div>
            <div class="filter__item_content filter__price">
                <div class="filter__price_inputs">
                  <input
                    type="number"
                    id="pricemin"
                    step="50"
                    class="filter-input filter-price"
                  />
                  <input
                    type="number"
                    id="pricemax"
                    step="50"
                    class="filter-input filter-price"
                  />
                </div>

                <div class="filter__price_range">
                  <span class="filter-slider-track"></span>
                  <input
                    type="range"
                    id="rangemin"
                    class="filter-range"
                    min="1000"
                    max="50000"
                  />
                  <input
                    type="range"
                    id="rangemax"
                    class="filter-range"
                    min="1000"
                    max="50000"
                  />
                </div>
            </div>
        </div>
        </div>

        <div class="sidebar__reset">
              <button class="sidebar__reset-before">Сбросить фильтры</button>
        </div>

    </aside>
            <div class="catalog-sort">
            <h4>Показывать в ряду по:</h4>
                  <input type="radio" name="card" id="four-card" value="4">
<label for="four-card">4</label>
<input type="radio" name="card" id="three-card" value="3" checked>
<label for="three-card">3</label>
<input type="radio" name="card" id="two-card" value="2">
<label for="two-card">2</label>
<input type="radio" name="card" id="one-card" value="1">
<label for="one-card">1</label>
            <div class="catalog-wrapper">
            </div>
		</section>
    `;
  element.insertAdjacentHTML("beforeend", catalogContainer);
}

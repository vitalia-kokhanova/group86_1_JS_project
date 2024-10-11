export function renderCatalogFilters(element) {
  const catalogFilters = document.createElement("aside");
  catalogFilters.className = "catalog-filters";
  catalogFilters.innerHTML = `
  <h3 class="filter-h3">Фильтры</h3>
    <div class="filters-wrapper">
      <div class="filter__item">
        <div class="filter__item_subtitle">
          <h4>Категории:</h4>
          <span class="filter__item_spoiler"></span>
        </div>
        <div class="filter__item_content filter__category">
          <div class="filter__category_inputs">
            <label><input type="checkbox" id="bouquet-flower"/>Букет из цветов</label></br>
            <label><input type="checkbox" id="toys"/>Мягкая игрушка</label></br>
            <label><input type="checkbox" id="balloons"/>Воздушные шары</label></br>
            <label><input type="checkbox" id="sweets"/>Сладости</label></br>
            <label><input type="checkbox" id="fruits"/>Фрукты</label></br>
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
            <label><input type="checkbox" id="march"/>8 марта</label></br>
            <label><input type="checkbox" id="bitrhday"/>День рождения</label></br>
            <label><input type="checkbox" id="anniversary"/>Юбилей</label></br>
            <label><input type="checkbox" id="september"/>1 сентября</label></br>
            <label><input type="checkbox" id="baby"/>Рождение ребенка</label></br>
            <label><input type="checkbox" id="wedding"/>Свадьба</label></br>
            <label><input type="checkbox" id="february"/>14 февраля</label></br>
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
            <label><input type="checkbox" id="women"/>Женщине</label></br>
            <label><input type="checkbox" id="men"/>Мужчине</label></br>
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
            <label><input type="checkbox" id="sunflower"   />Подсолнух</label></br>
            <label><input type="checkbox" id="rose"   />Роза</label></br>
            <label><input type="checkbox" id="viburnum"   />Вибурнум</label></br>
            <label><input type="checkbox" id="salal"   />Салал</label></br>
            <label><input type="checkbox" id="foamiran"   />Фоамиран</label></br>
            <label><input type="checkbox" id="lily"   />Лилия</label></br>
            <label><input type="checkbox" id="tanacetum"   />Танацетум</label></br>
            <label><input type="checkbox" id="forsythia"   />Форзиция</label></br>
            <label><input type="checkbox" id="nutan"   />Нутан</label></br>
            <label><input type="checkbox" id="eustoma"   />Эустома</label></br>
            <label><input type="checkbox" id="alstroemeria"   />Альстромерия</label></br>
            <label><input type="checkbox" id="carnation"   />Гвоздика</label></br>
            <label><input type="checkbox" id="brunia"   />Бруния</label></br>
            <label><input type="checkbox" id="orchid"   />Орхидея</label></br>
            <label><input type="checkbox" id="tulip"   />Тюльпан</label></br>
            <label><input type="checkbox" id="chrysanthemum"   />Хризантема</label></br>
            <label><input type="checkbox" id="iris"   />Ирис</label></br>
            <label><input type="checkbox" id="veronica"   />Вероника</label></br>
            <label><input type="checkbox" id="hydrangea"   />Гортензия</label></br>
            <label><input type="checkbox" id="matthiola"   />Маттиола</label></br>
            <label><input type="checkbox" id="astilbe"   />Астильба</label></br>
            <label><input type="checkbox" id="waxflower"   />Ваксфлауэр</label></br>
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
            <label><input type="checkbox" id="fig"   />Инжир</label></br>
            <label><input type="checkbox" id="strawberry"   />Клубника</label></br>
            <label><input type="checkbox" id="blackberry"   />Ежевика</label></br>
            <label><input type="checkbox" id="rspberry"   />Малина</label></br>
            <label><input type="checkbox" id="blueberry"   />Голубика</label></br>
            <label><input type="checkbox" id="red-currant"   />Красная смородина</label></br>
            <label><input type="checkbox" id="apple"   />Яблоко</label></br>
            <label><input type="checkbox" id="mandarin"   />Мандарин</label></br>
            <label><input type="checkbox" id="lemon"   />Лимон</label></br>
            <label><input type="checkbox" id="kiwi"   />Киви</label></br>
            <label><input type="checkbox" id="lime"   />Лайм</label></br>
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
            <label><input type="checkbox" id="bouquet"   />Букет</label></br>
            <label><input type="checkbox" id="pottle"   />Корзина</label></br>
            <label><input type="checkbox" id="box"   />Коробка</label></br>
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
            <label><input type="checkbox" id="yellow"   />Желтый</label></br>
            <label><input type="checkbox" id="orange"   />Оранжевый</label></br>
            <label><input type="checkbox" id="red"   />Красный</label></br>
            <label><input type="checkbox" id="white"   />Белый</label></br>
            <label><input type="checkbox" id="black"   />Черный</label></br>
            <label><input type="checkbox" id="violet"   />Фиолетовый</label></br>
            <label><input type="checkbox" id="pink"   />Розовый</label></br>
            <label><input type="checkbox" id="green"   />Зеленый</label></br>
            <label><input type="checkbox" id="brown"   />Коричневый</label></br>
            <label><input type="checkbox" id="gray"   />Серый</label></br>
            <label><input type="checkbox" id="gold"   />Золотой</label></br>
            <label><input type="checkbox" id="blue"   />Голубой</label></br>
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
      <div class="sidebar__reset">
        <i class="sidebar__reset-before">Сбросить фильтры</i>
      </div>
    </div>

    
  `;
  element.appendChild(catalogFilters);
}

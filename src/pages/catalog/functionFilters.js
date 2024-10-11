import { renderCatalogCards } from "./renderCatalogCards";

export function setupCardsFilters() {
  // отображение карточек в колонках
  const radios = document.querySelectorAll('input[name="card"]');
  const targetCatalogColumns = document.querySelector(".catalog-cards");
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      switch (radio.value) {
        case "4":
          targetCatalogColumns.style.gridTemplateColumns = "repeat(4, 1fr)";
          break;
        case "3":
          targetCatalogColumns.style.gridTemplateColumns = "repeat(3, 1fr)";
          break;
        case "2":
          targetCatalogColumns.style.gridTemplateColumns = "repeat(2, 1fr)";
          break;
        case "1":
          targetCatalogColumns.style.gridTemplateColumns = "1fr";
          break;
      }
    });
  });

  //сортировка по цене

  //спойлер для всех фильтров
  const filterHeader = document.querySelector(".filter-h3");
  const filtersWrapper = document.querySelector(".filters-wrapper");

  filterHeader.addEventListener("click", () => {
    filtersWrapper.style.display =
      filtersWrapper.style.display === "none" ||
      filtersWrapper.style.display === ""
        ? "block"
        : "none";
  });

  //спойлер по категориям
  const spoilers = document.querySelectorAll(".filter__item_subtitle");

  spoilers.forEach((spoiler) => {
    spoiler.addEventListener("click", function addVisible() {
      spoiler.parentElement.classList.toggle("_visible");
      spoiler.lastElementChild.classList.toggle("_minus");
    });
  });

  //фильтры для товаров
  // function filterProducts(products) {
  //   const categoryInputs = document.querySelectorAll(
  //     ".filter__category_inputs input:checked"
  //   );
  //   const categories = [...categoryInputs].map((input) => input.id);
  //   return products.filter((product) => {
  //     if (categories.length === 0) return true;
  //     return categories.some((category) => product.category.includes(category));
  //   });
  // }

  document.querySelector(".filters-wrapper").addEventListener("change", () => {
    fetch("../../../db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        const filteredProducts = filterProducts(data.products);
        renderCatalogCards(filteredProducts);
      })
      .catch((error) => console.error("Ошибкa: ", error));
  });

  //очистить фильтры
  document.querySelector(".sidebar__reset").addEventListener("click", () => {});
}

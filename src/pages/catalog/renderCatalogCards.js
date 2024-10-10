import { setupCardsFilters } from "./functionFilters";

export function renderCatalogCards() {
  fetch("../../../db.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      const catalogCardsWrapper = document.querySelector(".catalog-cards");
      data.products.forEach((item) => {
        const createCatalogCard = () => {
          const catalogCard = document.createElement("div");
          catalogCard.className = "catalog-card";
          catalogCard.innerHTML = `
    <div class="catalog-image-and-name"><img class="catalog-image" src="${item.image1}" alt="${item.name}">
    <p class="catalog-name">${item.name}</p></div>
    <div class="catalog-price-and-backet"><p class="catalog-price">${item.price} руб</p><button class="add-backet">Заказать</button></div>
    `;
          return catalogCard;
        };
        const catalogCardElement = createCatalogCard();
        catalogCardsWrapper.appendChild(catalogCardElement);
      });
      setupCardsFilters();
    })
    .catch((error) => console.error("Ошибкa: ", error));
}

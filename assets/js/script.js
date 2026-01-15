const search = document.getElementById("search");
const priceFilter = document.getElementById("priceFilter");
const cards = document.querySelectorAll(".card");

function filterCards() {
  const text = search.value.toLowerCase();
  const price = priceFilter.value;

  cards.forEach(card => {
    const name = card.dataset.name;
    const cardPrice = parseInt(card.dataset.price);

    let visible = name.includes(text);

    if (price === "low") visible &= cardPrice < 40;
    if (price === "mid") visible &= cardPrice >= 40 && cardPrice <= 60;
    if (price === "high") visible &= cardPrice > 60;

    card.style.display = visible ? "block" : "none";
  });
}

search.addEventListener("input", filterCards);
priceFilter.addEventListener("change", filterCards);

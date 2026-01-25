const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.getElementById("closePopup");

const totalPoules = 30;
const prix = 25;

for (let i = 1; i <= totalPoules; i++) {
  const card = document.createElement("div");
  card.className = "chicken-card";

  card.innerHTML = `
    <img src="assets/images/poules/poule${i}.jpg" alt="Poule ${i}">
    <div class="content">
      <h3>Poule ${i}</h3>
      <div class="price">$${prix}</div>
      <a class="order-btn"
         href="https://wa.me/237687452478?text=Je%20veux%20commander%20la%20poule%20${i}"
         target="_blank">
         Commander
      </a>
    </div>
  `;

  const img = card.querySelector("img");
  img.onclick = () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  };

  gallery.appendChild(card);
}

closePopup.onclick = () => popup.style.display = "none";
popup.onclick = () => popup.style.display = "none";

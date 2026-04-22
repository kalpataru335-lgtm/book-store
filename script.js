
const books = [
  { name: "Srila Prabhupada lilamrit (7 Volumes)", actual: 1500, price: 749, special: true },
  { name: "The Hare Krishna Explosion", actual: 200, price: 50 },
  { name: "Sri Navadvipa-dhama Mahatmya", actual: 150, price: 39 },
  { name: "Prabhupada: Messenger of the Supreme Lord", actual: 150, price: 39 },
  { name: "Teachings of Queen Kunti", actual: 120, price: 31 },
  { name: "Divine Instructions", actual: 100, price: 25 },
  { name: "Japa", actual: 150, price: 39 },
  { name: "Teachings of Lord Caitanya", actual: 100, price: 26 },
  { name: "The Path of Perfection", actual: 55, price: 15 },
  { name: "Message of Godhead", actual: 25, price: 8 },
  { name: "Matchless Gift", actual: 50, price: 14 },
  { name: "Transcendental Teachings of Prahlada Maharaja", actual: 50, price: 14 },
  { name: "Modern Times in Vedic Perspective", actual: 50, price: 14 },
  { name: "Beyond Birth and Death", actual: 30, price: 9 },
  { name: "Life Comes From Life", actual: 80, price: 20 },
  { name: "Easy Journey to Other Planets", actual: 50, price: 14 },
  { name: "Civilization and Transcendence", actual: 50, price: 14 },
  { name: "The Nectar of Instruction", actual: 50, price: 14 },
  { name: "The Hare Krishna Challenge", actual: 70, price: 18 },
  { name: "Raja Vidya: King of Knowledge", actual: 50, price: 14 },
  { name: "Consciousness: The Missing Link", actual: 50, price: 14 },
  { name: "The Laws of Nature", actual: 80, price: 20 }
];

let selected = [];

const list = document.getElementById("book-list");

books.forEach((b, i) => {
  const div = document.createElement("div");
  div.className = "book";
  if (b.special) div.classList.add("special");

  div.innerHTML = `
    <h3>${b.name}</h3>
    ${b.special ? `<div class="special-tag">🔥 50% OFF + 6 volumes sealed out of 7</div>` : ""}
    <span class="old">₹${b.actual}</span><br>
    <span class="new">₹${b.price}</span>
  `;

  div.onclick = () => toggle(i, div);
  list.appendChild(div);
});

function toggle(i, el) {
  const idx = selected.indexOf(i);
  if (idx > -1) {
    selected.splice(idx, 1);
    el.classList.remove("selected");
  } else {
    selected.push(i);
    el.classList.add("selected");
  }
  update();
}

function update() {
  let total = 0;
  selected.forEach(i => total += books[i].price);

  document.getElementById("total").innerText = total;

  if (total < 200) {
    document.getElementById("msg").innerText =
      "Minimum ₹200 required to compensate shipping charges";
    document.getElementById("orderBtn").disabled = true;
  } else {
    document.getElementById("msg").innerText = "Ready to order 🚀";
    document.getElementById("orderBtn").disabled = false;
  }
}

function goToSummary() {
  localStorage.setItem("cart", JSON.stringify(selected));
  localStorage.removeItem("bundle");
  window.location.href = "summary.html";
}

function buyAll() {
  const all = books.map((_, i) => i);
  localStorage.setItem("cart", JSON.stringify(all));
  localStorage.setItem("bundle", "true");
  window.location.href = "summary.html";
}
const books = [
  { name: "Srila Prabhupada lilamrit (7 Volumes)", actual: 1500, price: 750, special: true },
  { name: "The Hare Krishna Explosion", actual: 350, price: 105 },
  { name: "Sri Navadvipa-dhama Mahatmya", actual: 150, price: 45 },
  { name: "Prabhupada: Messenger of the Supreme Lord", actual: 150, price: 45 },
  { name: "Teachings of Queen Kunti", actual: 100, price: 30 },
  { name: "Divine Instructions", actual: 100, price: 30 },
  { name: "Japa", actual: 150, price: 45 },
  { name: "Teachings of Lord Caitanya", actual: 100, price: 30 },
  { name: "The Path of Perfection", actual: 55, price: 17 },
  { name: "Message of Godhead", actual: 25, price: 10 },
  { name: "Matchless Gift", actual: 50, price: 15 },
  { name: "Transcendental Teachings of Prahlada Maharaja", actual: 50, price: 15 },
  { name: "Modern Times in Vedic Perspective", actual: 50, price: 15 },
  { name: "Beyond Birth and Death", actual: 30, price: 10 },
  { name: "Life Comes From Life", actual: 80, price: 24 },
  { name: "Easy Journey to Other Planets", actual: 50, price: 15 },
  { name: "Civilization and Transcendence", actual: 50, price: 15 },
  { name: "The Nectar of Instruction", actual: 50, price: 15 },
  { name: "The Hare Krishna Challenge", actual: 50, price: 15 },
  { name: "Raja Vidya: King of Knowledge", actual: 50, price: 15 },
  { name: "Consciousness: The Missing Link", actual: 50, price: 15 },
  { name: "The Laws of Nature", actual: 80, price: 24 }
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
      "Minimum
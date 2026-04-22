const books = [
{ name:"Srila Prabhupada Lilamrit (7 Volumes)", actual:1500, price:360, weight:4, special:true, note:"7 vol sealed (except vol 1)" },
{ name:"The Hare Krishna Explosion", actual:350, price:84, weight:0.5 },
{ name:"Sri Navadvipa-dhama Mahatmya", actual:150, price:36, weight:0.3 },
{ name:"Prabhupada: Messenger of the Supreme Lord", actual:150, price:36, weight:0.3 },
{ name:"Teachings of Queen Kunti", actual:100, price:24, weight:0.25 },
{ name:"Divine Instructions", actual:100, price:24, weight:0.15 },
{ name:"Japa", actual:150, price:36, weight:0.3 },
{ name:"Teachings of Lord Caitanya", actual:100, price:24, weight:0.25 },
{ name:"The Path of Perfection", actual:55, price:14, weight:0.2 },
{ name:"Message of Godhead", actual:25, price:6, weight:0.2 },
{ name:"Matchless Gift", actual:50, price:12, weight:0.2 },
{ name:"Transcendental Teachings of Prahlada Maharaja", actual:50, price:12, weight:0.2 },
{ name:"Modern Times in Vedic Perspective", actual:50, price:12, weight:0.2 },
{ name:"Beyond Birth and Death", actual:30, price:8, weight:0.2 },
{ name:"Life Comes From Life", actual:80, price:20, weight:0.3 },
{ name:"Easy Journey to Other Planets", actual:50, price:12, weight:0.2 },
{ name:"Civilization and Transcendence", actual:50, price:12, weight:0.2 },
{ name:"The Nectar of Instruction", actual:50, price:12, weight:0.2 },
{ name:"The Hare Krishna Challenge", actual:50, price:12, weight:0.2 },
{ name:"Raja Vidya: King of Knowledge", actual:50, price:12, weight:0.2 },
{ name:"Consciousness: The Missing Link", actual:50, price:12, weight:0.2 },
{ name:"The Laws of Nature", actual:80, price:20, weight:0.3 }
];

let selected = [];
const list = document.getElementById("book-list");

books.forEach((b,i)=>{
let div = document.createElement("div");
div.className = "book";
if(b.special) div.classList.add("special");

div.innerHTML = `
<h4>${b.name}</h4>
${b.note ? `<div class="note">${b.note}</div>` : ""}
<span class="old">₹${b.actual}</span><br>
<span class="new">₹${b.price}</span>
`;

div.onclick = ()=>toggle(i,div);
list.appendChild(div);
});

function toggle(i,el){
if(selected.includes(i)){
selected = selected.filter(x=>x!==i);
el.classList.remove("selected");
}else{
selected.push(i);
el.classList.add("selected");
}
update();
}

function update(){
let total = 0;
selected.forEach(i=> total += books[i].price);

document.getElementById("total").innerText = total;

if(total < 160){
let remaining = 160 - total;
document.getElementById("msg").innerText = `Add ₹${remaining} more to order`;
document.getElementById("orderBtn").disabled = true;
}else{
document.getElementById("msg").innerText = "Ready to continue";
document.getElementById("orderBtn").disabled = false;
}
}

function buyAll(){
selected = books.map((_,i)=>i);
localStorage.setItem("bundle","true");
localStorage.setItem("cart",JSON.stringify(selected));
window.location = "details.html";
}

function goToDetails(){
localStorage.setItem("cart",JSON.stringify(selected));
window.location = "details.html";
}
const books = [
{ name:"Lilamrit (7 Vol)", actual:1500, price:360, weight:4, special:true, note:"7 vol sealed (except vol 1)" },
{ name:"Hare Krishna Explosion", actual:350, price:84, weight:0.5 },
{ name:"Navadvipa Mahatmya", actual:150, price:36, weight:0.3 },
{ name:"Messenger", actual:150, price:36, weight:0.3 },
{ name:"Queen Kunti", actual:100, price:24, weight:0.25 },
{ name:"Divine Instructions", actual:100, price:24, weight:0.15 },
{ name:"Japa", actual:150, price:36, weight:0.3 },
{ name:"Lord Caitanya", actual:100, price:24, weight:0.25 },
{ name:"Path of Perfection", actual:55, price:14, weight:0.2 },
{ name:"Message of Godhead", actual:25, price:6, weight:0.2 },
{ name:"Matchless Gift", actual:50, price:12, weight:0.2 },
{ name:"Prahlada Maharaja", actual:50, price:12, weight:0.2 },
{ name:"Modern Times", actual:50, price:12, weight:0.2 },
{ name:"Beyond Birth", actual:30, price:8, weight:0.2 },
{ name:"Life Comes From Life", actual:80, price:20, weight:0.3 },
{ name:"Easy Journey", actual:50, price:12, weight:0.2 },
{ name:"Civilization", actual:50, price:12, weight:0.2 },
{ name:"Nectar of Instruction", actual:50, price:12, weight:0.2 },
{ name:"HK Challenge", actual:50, price:12, weight:0.2 },
{ name:"Raja Vidya", actual:50, price:12, weight:0.2 },
{ name:"Consciousness", actual:50, price:12, weight:0.2 },
{ name:"Laws of Nature", actual:80, price:20, weight:0.3 }
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

// 🔥 ₹160 MINIMUM + SMART MESSAGE
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
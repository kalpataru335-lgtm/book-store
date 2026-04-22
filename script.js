const books = [
{ name:"Lilamrit (7 Vol)", price:360, weight:4, special:true, note:"7 vol sealed (except vol 1)" },
{ name:"Hare Krishna Explosion", price:84, weight:0.5 },
{ name:"Navadvipa Mahatmya", price:36, weight:0.3 },
{ name:"Messenger", price:36, weight:0.3 },
{ name:"Queen Kunti", price:24, weight:0.25 },
{ name:"Divine Instructions", price:24, weight:0.15 },
{ name:"Japa", price:36, weight:0.3 },
{ name:"Lord Caitanya", price:24, weight:0.25 },
{ name:"Path of Perfection", price:14, weight:0.2 },
{ name:"Message of Godhead", price:6, weight:0.2 },
{ name:"Matchless Gift", price:12, weight:0.2 },
{ name:"Prahlada", price:12, weight:0.2 },
{ name:"Modern Times", price:12, weight:0.2 },
{ name:"Beyond Birth", price:8, weight:0.2 },
{ name:"Life Comes", price:20, weight:0.3 },
{ name:"Easy Journey", price:12, weight:0.2 },
{ name:"Civilization", price:12, weight:0.2 },
{ name:"Nectar", price:12, weight:0.2 },
{ name:"HK Challenge", price:12, weight:0.2 },
{ name:"Raja Vidya", price:12, weight:0.2 },
{ name:"Consciousness", price:12, weight:0.2 },
{ name:"Laws of Nature", price:20, weight:0.3 }
];

let selected=[];

const list=document.getElementById("book-list");

books.forEach((b,i)=>{
let div=document.createElement("div");
div.className="book";
if(b.special) div.classList.add("special");

div.innerHTML=`
<h4>${b.name}</h4>
${b.note? `<div class="note">${b.note}</div>`:""}
<div class="new">₹${b.price}</div>
`;

div.onclick=()=>toggle(i,div);
list.appendChild(div);
});

function toggle(i,el){
if(selected.includes(i)){
selected=selected.filter(x=>x!==i);
el.classList.remove("selected");
}else{
selected.push(i);
el.classList.add("selected");
}
update();
}

function update(){
let total=0;
selected.forEach(i=> total+=books[i].price);

document.getElementById("total").innerText=total;

if(total<200){
document.getElementById("msg").innerText="Minimum ₹200 required";
document.getElementById("orderBtn").disabled=true;
}else{
document.getElementById("msg").innerText="Ready to continue";
document.getElementById("orderBtn").disabled=false;
}
}

function buyAll(){
selected=books.map((_,i)=>i);
localStorage.setItem("bundle","true");
localStorage.setItem("cart",JSON.stringify(selected));
window.location="details.html";
}

function goToDetails(){
localStorage.setItem("cart",JSON.stringify(selected));
window.location="details.html";
}
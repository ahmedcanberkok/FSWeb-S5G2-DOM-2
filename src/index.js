import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

//EVENT-1
document.querySelector("h1").addEventListener("mouseover", function(e){
    this.style.color = "red" 
});

//EVENT-2
document.querySelector("h1").addEventListener("mouseout", function(e){
    this.style.color = "black" 
}) ;

// EVENT-3
document.querySelectorAll(".btn").forEach(function (event) {
  event.addEventListener("click", function (event) {
      alert("İYİ EĞLENCELER");
  });
});

// EVENT-4
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    
    window.open('https://www.tatilbudur.com', '_blank');
  });
});



// EVENT-5
  document.querySelector("img").addEventListener("wheel", function (e) {
    e.preventDefault();
    e.target.src = "https://picsum.photos/1000/300";
    setTimeout(() => {
      e.target.src = "http://localhost:9000/img/fun-bus.jpg";
    }, 1000);
  });

  //EVENT-6
document.querySelector('.footer').addEventListener('click', function(event) {
  setTimeout(() => {
    this.style.backgroundColor = 'red';
  }, 1000);
  
} ) ;

//EVENT-7
window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("Üzgünüm! Sağ tık menüsü kapalı :)");
});

//EVENT-8
const nav = document.querySelectorAll("nav a")
for ( let i in nav) {
  nav[i].addEventListener("mouseover",function(e) {
    nav[i].style.fontWeight = "bold" ;
    nav[i].style.color = "red" ;
  })
  nav[i].addEventListener("mouseleave",function(e) {
    nav[i].style.fontWeight = "normal"
    nav[i].style.color = "black" ;

} ) } ;

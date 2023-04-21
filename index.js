const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
var number = document.getElementById("number").valu
const cart = document.getElementById("cart");
const btn = document.getElementById("btn"); 
const logo = document.getElementById("logo")
var nog = document.getElementById("nog").value
var price = document.getElementById("price").value


logo.addEventListener("click", ()=>{
    document.getElementById("cart").style.visibility='visible'
});

btn.addEventListener("click", ()=>{
    document.getElementById("cart").style.visibility='hidden'
})

function mul(){
   nog * price
   console.log(mul())
}


var nog = parseInt(document.getElementById("nog"))
var number = parseInt(document.getElementById("number"))
var price = parseInt(document.getElementById("price"))



btn1.addEventListener("click", ()=>{
    document.getElementById("number").value--
    document.getElementById("nog").value--
})

btn2.addEventListener("click", ()=>{
    document.getElementById("number").value++
    document.getElementById("nog").value++
})













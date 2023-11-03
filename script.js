var genBtn = document.querySelector(".box .generate-btn");
var backBtn = document.querySelector(".box .back-btn");
var first = document.querySelector(".firstline");
var joke = document.querySelector(".joke");
var second = document.querySelector(".secondline");
var img = document.querySelector(".box img");


 async function getrandomjoke(){
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    first.textContent = data.setup;
    second.textContent = data.punchline;
    joke.style.display = "block";
    backBtn.style.display = "block";
    genBtn.style.display = "none";
}


genBtn.addEventListener("click",function(){
    getrandomjoke();
})

backBtn.addEventListener("click",function(){
    joke.style.display = "none";
    backBtn.style.display = "none";
    genBtn.style.display = "block";
})
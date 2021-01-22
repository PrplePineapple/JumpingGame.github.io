var character = document.getElementById("character");
var block = document.getElementById("block");
const colorBtn = document.querySelector(".colorBtn")
counter = 0;

//Jumping

function jump() {
    if(character.classList != "animate"){
    character.classList.add("animate"); 
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },600);
    counter++;
}

//Dying

var checkdead = setInterval (function(){

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && characterTop>=170){
        block.style.animation = "none";
        block.style.display = "none";
        alert ("u ded Score:"+counter);
        location.reload();
    }
}, 10);

//color changing

const colors = ['yellow', 'red', 'blue', 'green', 'purple', 'orange', 'white'];

colorBtn.addEventListener("click", changeColor);
function changeColor() {
    let random = Math.floor(Math.random() *colors.length)
    character.style.backgroundColor = colors[random];

}
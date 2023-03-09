let question = document.querySelector("legend")
let radios = document.querySelectorAll("radio")
let labels = document.querySelectorAll("label")
let output = document.querySelector('#output')
let submitBtn = document.querySelector("[type=button]");
let rightAnswer = "Charmander";
let timeText = document.querySelector('h1')
let scoreText = document.querySelector('#score')
let changeImage = document.querySelector('#image:hover');
let image2 = document.querySelector('#image2')

let button2 = document.querySelector('#button2');

//This checks if the question works depending if you get the answers right or wrong.
function CheckAnswer(){
    
    let radio = document.querySelector("[type=radio]:checked");
    let guess = radio.nextElementSibling.innerHTML;
    if(guess === rightAnswer)
    {//if the player guessed right, it adds a score and a text saying "Correct!"
        score += 1;
        scoreText.innerHTML= "Score:" + score;
        output.style.color = "green";
        output.innerHTML="Correct!"
    }
    else
    {//if the player guessed wrong, text says "Wrong!"
        output.style.color = "red";
        output.innerHTML="Wrong!"
    }
//This allows to proceed to next question after you answer the first one    
    question.innerHTML = "2nd question, in game series Kirby, what is this blue boss called?"
    labels[0].innerHTML = "Emperor Penguin"
    labels[1].innerHTML = "King Dedede"
    labels[2].innerHTML = "Royal Nemesis"
    labels[3].innerHTML = "Bluey Destroyer"
    rightAnswer = "King Dedede"
 
   
      
}
submitBtn.onclick = CheckAnswer;

let time = 0;

//Every second it adds 1 to the timer

function Tick()
{
    time += 1;
    timeText.innerHTML = "Timer:" + time;

}

let clock = setInterval(Tick, 1500)
let score = 0;
//This calls out the animation for the second image to show
function activeshowPic(event){
    image2.style.animationName = "showPic";
}

button2.onclick =activeshowPic

 button2.addEventListener("click", function(event) {
    event.preventDefault();
 });

const cards = document.querySelectorAll('.memory-card');
const move = document.querySelector('.move span');	
	
let hasFlippedCard = false;
let lockBoard = false;
let oneCard, twoCard;
let matchCounter = 0;

function flipCard()
{
if(lockBoard) return;
if(this === oneCard) return;
this.classList.add('flip');
if(!hasFlippedCard){
hasFlippedCard = true;
oneCard = this;
return;
}
twoCard = this;
checkForMatch();
}

function checkForMatch()
{
let isMatch = oneCard.dataset.framework === twoCard.dataset.framework;
move.innerHTML = parseInt(move.innerHTML) + 1
if(isMatch)
{
matchCounter += 1;
disableCards();
if(matchCounter == (cards.length/2))
{
window.alert("Congratulations!!! \r\nYou have won the game and found all 6 pairs of cards.");
}
}
else
{
unflipCards();
}
}

function disableCards()
{
oneCard.removeEventListener('click', flipCard);
twoCard.removeEventListener('click', flipCard);
resetBoard();
}

function unflipCards()
{
lockBoard = true;
setTimeout(() =>{
oneCard.classList.remove('flip');
twoCard.classList.remove('flip');
resetBoard();
}, 1500);
}

function myButton()
{
location.reload();
}

function resetBoard()
{
[hasFlippedCard, lockBoard] = [false, false];
[oneCard, twoCard] = [null, null];
}

(function shuffle()
{
cards.forEach(card => {
let randomPos = Math.floor(Math.random()*12);
card.style.order = randomPos;
});
})();

cards.forEach(card => card.addEventListener('click', flipCard));

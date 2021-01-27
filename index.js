// var randomNumber1 = Math.floor(Math.random() * 6)+ 1;
// var randomNumber2 = Math.floor(Math.random() * 6)+ 1;

// var changePic1 = document.querySelector(".img1")
// var changePic2 = document.querySelector(".img2")



// if (randomNumber1 === 1) {
//   changePic1.setAttribute("src","/images/dice1.png")
// } 
// else if (randomNumber1 === 2) {
//   changePic1.setAttribute("src","/images/dice2.png")
// }
// else if (randomNumber1 === 3) {
//   changePic1.setAttribute("src","/images/dice3.png")
// }
// else if (randomNumber1 === 4) {
//   changePic1.setAttribute("src","/images/dice4.png")
// }
// else if (randomNumber1 === 5) {
//   changePic1.setAttribute("src","/images/dice5.png")
// }
// else if (randomNumber1 === 6) {
//   changePic1.setAttribute("src","/images/dice6.png")
// }

// if (randomNumber2 === 1) {
//   changePic2.setAttribute("src","/images/dice1.png")
// } 
// else if (randomNumber2 === 2) {
//   changePic2.setAttribute("src","/images/dice2.png")
// }
// else if (randomNumber2 === 3) {
//   changePic2.setAttribute("src","/images/dice3.png")
// }
// else if (randomNumber2 === 4) {
//   changePic2.setAttribute("src","/images/dice4.png")
// }
// else if (randomNumber2 === 5) {
//   changePic2.setAttribute("src","/images/dice5.png")
// }
// else if (randomNumber2 === 6) {
//   changePic2.setAttribute("src","/images/dice6.png")
// }


// var heading = document.querySelector("h1")

// if (randomNumber1 === randomNumber2) {
//   heading.textContent="Draw!";
// } else if (randomNumber1 > randomNumber2) {
//   heading.textContent="Player 1 Wins!";
// } else {
//   heading.textContent="Player 2 Wins!";
// }



var randomNumber1 = Math.floor(Math.random() * 6)+ 1;

var randomDiceImg1 = "/images/dice"+ randomNumber1 +".png";

var img1 = document.querySelectorAll("img")[0];
 img1.setAttribute("src", randomDiceImg1);

 


var randomNumber2 = Math.floor(Math.random() * 6)+ 1;

var randomDiceImg2 = "/images/dice"+ randomNumber2 +".png";

var img2 = document.querySelectorAll("img")[1];
  img2.setAttribute("src", randomDiceImg2);
 


var heading = document.querySelector("h1")

if (randomNumber1 === randomNumber2) {
  heading.textContent="Draw!";
} else if (randomNumber1 > randomNumber2) {
  heading.textContent="Player 1 Wins!";
} else {
  heading.textContent="Player 2 Wins!";
}
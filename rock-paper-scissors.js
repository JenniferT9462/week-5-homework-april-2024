let params = new URLSearchParams(document.location.search);

let player1 = params.get("p1");
let player2 = params.get("p2");

// Making the player names display on the page
let p1Name = params.get("name1");
let p2Name = params.get("name2");
if (p1Name){
  document.getElementById("n1").innerHTML = p1Name;
}
if (p2Name) {
  document.getElementById("n2").innerHTML = p2Name;
}
// Saving players name


//Rock Paper Scissors
if(player1 === "rock" && player2 === "scissors") {
  document.getElementById("result").innerHTML = `${p1Name} Wins!`
}
// TODO: write all the conditions to indicate who will win the game.
else if (player1 === "paper" && player2 === "rock") {
  document.getElementById("result").innerHTML = `${p1Name} Wins!`
}
else if (player1 === "scissors" && player2 === "paper") {
  document.getElementById("result").innerHTML = `${p1Name} Wins!`
}
else if (player2 === "rock" && player1 === "scissors") {
  document.getElementById("result").innerHTML = `${p2Name} Wins!`
}
else if (player2 === "paper" && player1 === "rock") {
  document.getElementById("result").innerHTML = `${p2Name} Wins!`
}
else if (player2 === "scissors" && player1 === "paper") {
  document.getElementById("result").innerHTML = `${p2Name} Wins!`
}
else if (player1 === "scissors" && player2 === "scissors") {
  document.getElementById("result").innerHTML = "It's a Draw!"
}
else if (player1 === "rock" && player2 === "rock") {
  document.getElementById("result").innerHTML = "It's a Draw!"
}
else if (player1 === "paper" && player2 === "paper") {
  document.getElementById("result").innerHTML = "It's a Draw!"
}

// TODO: Add some HTML and CSS to make the page nice
// Added some css to the body of my html document


// Bonus: research innerHTML to put the result of the game into the element with id of "result".
// Added innerhtml to the if statements

// Bonus: add a form to allow for player to enter their guesses. Hint: Try <input type="password" name=p1 /> in a form in the html
// Added type and name to input tags to save answers

// Bonus: allow players to enter their names and display them on the page.
// Added a new search param for player 1 and player 2..
// Then did an if statement to display the value in a html element...Not sure if there is a better way.

// Bonus: add additional feature you might think of. 
// Added a Draw condition

// Super Extra bonus: Try and make the names persist so the players don't need to enter their names each play
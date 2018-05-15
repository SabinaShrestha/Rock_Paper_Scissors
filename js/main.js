// var x = 5;
// var y = 6;
// var z;
//
// // debugger
// z = x + y
// // debugger
// y = z;
// var btnone = document.getElementById("btn1").innerHTML;
// var btntwo = document.getElementById("btn2").innerHTML;
// var btnthree = document.getElementById("btn2").innerHTML;
// document.getElementById("btn2").addEventListener("click", function()
// {document.getElementById("result1").innerHTML = "You choose PAPER."});
//
// document.getElementById("btn3").addEventListener("click", function()
// {document.getElementById("result1").innerHTML = "You choose SCISSORS."});
//
// document.getElementById("btn4").addEventListener("click", function()
// {document.getElementById("result2").innerHTML = "Computer chose " + rand + "."});

var number = ["rock", "paper", "scissors"]
// var rand = number[Math.floor(Math.random() * number.length)].toUpperCase()
var rand
var user_choice = []
var result1 = document.getElementById("result1")
var result3 = document.getElementById("result3")
var result2 = document.getElementById("result2")
var winprint1 = document.getElementById("user_wins")
var winprint2 = document.getElementById("computer_wins")
var tieprint = document.getElementById("ties")
var user_win = 0
var user_lose = 0
var ties = 0

document.getElementById("btn1").addEventListener("click", rock)
document.getElementById("btn2").addEventListener("click", paper)
document.getElementById("btn3").addEventListener("click", scissors)
document.getElementById("btn4").addEventListener("click", play)



function rock(){
  user_choice = "ROCK"
  result1.innerHTML = "You choose ROCK."
}

function paper(){
  user_choice = "PAPER";
  result1.innerHTML = "You choose PAPER."
}

function scissors(){
  user_choice = "SCISSORS"
  result1.innerHTML = "You choose SCISSORS."
}

function play(){
  rand = number[Math.floor(Math.random() * number.length)].toUpperCase()
  result2.innerHTML = "Computer choose " + rand + "."
  win(user_choice)
  
}

function win(user_choice){

  if (rand === user_choice){
    result3.innerHTML = "Tie"
    ties += 1
  } else if (rand === "ROCK"){

    if(user_choice === "PAPER"){
      result3.innerHTML = "You Win."
      user_win += 1
    } else if(user_choice === "SCISSORS"){
      result3.innerHTML = "You Lose."
      user_lose += 1
    }else{
      result3.innerHTML = "Something went wrong."
    }

  } else if(rand === "SCISSORS"){

    if(user_choice === "ROCK"){
      result3.innerHTML = "You Win."
      user_win += 1
    } else if (user_choice === "PAPER"){
      result3.innerHTML = "You Loose."
      user_lose +=1
    } else{
      result3.innerHTML = "Something went wrong."
    }

  }else if (rand === "PAPER"){

    if (user_choice === "ROCK"){
      result3.innerHTML = "You Lose."
      user_win += 1
    } else if (user_choice === "SCISSORS"){
      result3.innerHTML = "You Win"
      user_lose += 1
    } else {
      result3.innerHTML = "Something went wrong."
    }

  } else {
    result3.innerHTML = "Something is Wrong!"
  }
  // result1.innerHTML = "Result"
  // result2.innerHTML = "Result"
  // result3.innerHTML = "Win Result"
  winprint1.innerHTML = "Your Wins: " + user_win
  winprint2.innerHTML = "Computer Wins: " + user_lose
  tieprint.innerHTML = "Tie: " + ties


}

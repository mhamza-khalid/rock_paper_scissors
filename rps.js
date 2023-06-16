
function game(){
    let comp_count = 0;
    let player_count = 0;
    for(let i=0 ; i<5 ; i++){    // plays game 5 times
       let computerChoice = getComputerChoice(); //genrates computers choice

       function getComputerChoice(){
           let string1 = "Rock";
           let string2 = "Paper";
           let string3 = "Scissors";
     
           let x = Math.floor(Math.random() * 3)
     
           if (x===0){
             return string1;
           }
           else if (x===1){
             return string2;
           }
           else{
             return string3;
           }
     }
       console.log(computerChoice);  // prints computers choice on console

       let playerSelection1 = prompt("Type your choice\nRock or Paper or Scissors"); //prompt for user to enter choice

       let playerSelection = playerSelection1.toLowerCase(); 
       
       playGame(computerChoice, playerSelection);
       
       function playGame (computer, human){
           if ( computer == "Rock" && human == "scissors"){
               comp_count = comp_count+1;
               alert("You lose!" + " " + computer  + " " + "beats" + " " + human 
                + "\n" + "Computer :" + " " + comp_count + "\n" + "You :" + " " + player_count );
               
           }
           else if( computer == "Rock" && human == "paper"){
               player_count = player_count + 1;
               alert("You win!" + " " + human + " " + "beats" + " " + computer
               + "\n" + "Computer :" + " " + comp_count + "\n"+ "You :" + " " + player_count );
               
           }
           else if( computer == "Paper" && human == "scissors"){
               player_count = player_count + 1;
               alert("You win!" + " " + human + " " + "beats" + " " + computer
               + "\n" + "Computer :" + " " + comp_count + "\n"+ "You :" + " " + player_count );
               
           }
           else if( computer == "Paper" && human == "rock"){
               comp_count = comp_count+1;
               alert("You lose!" + " " + computer  + " " + "beats" + " " + human
               + "\n" + "Computer :" + " " + comp_count + "\n"+ "You :" + " " + player_count );
               
           }
           else if( computer == "Scissors" && human == "paper"){
               comp_count = comp_count+1;
               alert("You lose!" + " " + computer  + " " + "beats" + " " + human
               + "\n" + "Computer :" + " " + comp_count + "\n"+ "You :" + " " + player_count );
               
           }
           else if( computer == "Scissors" && human == "rock"){
               player_count = player_count + 1;
               alert(`You win! ${human} beats ${computer}\nComputer : ${comp_count}\nYou : ${player_count}` );
               
           }
           else{
               alert("Game Tie!")
           }
       }
    }
    if (player_count > comp_count){
       alert("You win the best of 5 game!")
    }
    else{
       alert("You lost the best of 5 game!")
    }
}

game(); 





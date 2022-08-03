alert('You only have 5 chances to predict...Try your Luck!!😏😏😏 ')
 
 let secretNumber = Math.trunc(Math.random() * 20) + 1;
 let score = 5;
 let highscore = 0;

 //function for message
 const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
 }

 //function for score
 const displayScore = function(score){
    document.querySelector('.score').textContent = score;
 }
  
 // Adding event Listener
    document.querySelector('.check').addEventListener('click', function(){
        //selecting the guessing no.
        const guess = Number(document.querySelector('.guess').value);
  

       
        //validating conditions
        if(!guess){
            displayMessage( ' Please Guess a No. first! 😒😒');
        }
        else if(guess === secretNumber){
            displayMessage('Correct Number! 🧏🏻‍♂️🧏🏻‍♂️🍻😍');
            document.querySelector('body').style.backgroundImage = "url(v7.jpg)";
            document.querySelector('.number').textContent = secretNumber;

            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if(guess > secretNumber && guess - secretNumber > 3){
            
              if(score > 1){
                displayMessage('Tooo high!😳');
                score--;
                displayScore(score);
               }
              else{
                displayMessage("You Lost The Game 😂😂🤣 ! Click Again to play😎😎 ");
                displayScore(0);
               }      
        }
        else if(guess < secretNumber && secretNumber-guess > 3){
           
             if(score > 1){
                displayMessage( 'Tooo Low! 🙁🙁');
                score--;
                displayScore(score);
              }
              else{
                displayMessage("You Lost The Game 😂😂🤣 ! Click Again to play😎😎");
                displayScore(0);
              }
        }
        else if(guess > secretNumber){
              
              if(score > 1){
                displayMessage('Close But High! 🥲🥲');
                score--;
                displayScore(score);
              }
              else{
                displayMessage("You Lost The Game 😂😂🤣 ! Click Again to play😎😎");
                displayScore(0);
              }
        }
        else if(guess < secretNumber ){
           
              if(score > 1){
                displayMessage('Close But Low! 😣😣');
                score--;
                displayScore(score);
              }
              else{
                displayMessage("You Lost The Game 😂😂🤣 ! Click Again to play😎😎");
                displayScore(0);
              }
        }  
        
    });
       
    // Resetting the values
         document.querySelector('.again').addEventListener('click' , function(){
            score = 5;
            displayScore(score);
            document.querySelector('.guess').value = '';
            document.querySelector('.number').textContent = '?';
             secretNumber = Math.trunc(Math.random() * 20) + 1;
            displayMessage ('Guess Again..🙄🙄');
            document.querySelector('body').style.backgroundImage = "url(back.jpg)";
    });

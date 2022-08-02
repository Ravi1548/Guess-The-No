 
alert('You only have 5 chances to predict...Try your Luck!!😏😏😏 ')
 
 let secretNumber = Math.trunc(Math.random() * 20) + 1;
 let score = 5;
 let highscore = 0;
  
    document.querySelector('.check').addEventListener('click', function(){
        //selecting the guessing no.
        const guess = Number(document.querySelector('.guess').value);
  

       
        //validating conditions
        if(!guess){
            document.querySelector('.message').textContent  = ' Please Guess a No. first! 😒😒';
        }
        else if(guess === secretNumber){
            document.querySelector('.message').textContent  = 'Correct Number! 🧏🏻‍♂️🧏🏻‍♂️🍻😍';
            // document.body.style.backgroundColor = 'green';
            document.querySelector('body').style.backgroundImage = "url(v7.jpg)";
            document.querySelector('.number').textContent = secretNumber;

            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        }




        else if(guess > secretNumber && guess - secretNumber > 3){
          if(score > 1){
            document.querySelector('.message').textContent  = 'Tooo high!😳';
            score--;
            document.querySelector('.score').textContent = score;
          }
          else{
            document.querySelector('.message').textContent = "You Lost The Game 😂😂🤣 ! Click Again to play😎😎 ";
            document.querySelector('.score').textContent = 0;
          }

           
        }
        else if(guess < secretNumber && secretNumber-guess > 3){
            if(score > 1){
                document.querySelector('.message').textContent  = 'Tooo Low! 🙁🙁';
                score--;
                document.querySelector('.score').textContent = score;
              }
              else{
                document.querySelector('.message').textContent = "You Lost The Game 😂😂🤣 ! Click Again to play😎😎";
                document.querySelector('.score').textContent = 0;
              }
        }
        else if(guess > secretNumber){
            if(score > 1){
                document.querySelector('.message').textContent  = 'Close But High! 🥲🥲';
                score--;
                document.querySelector('.score').textContent = score;
              }
              else{
                document.querySelector('.message').textContent = "You Lost The Game 😂😂🤣 ! Click Again to play😎😎";
                document.querySelector('.score').textContent = 0;
              }
        }
        else if(guess < secretNumber ){
            if(score > 1){
                document.querySelector('.message').textContent  = 'Close But Low! 😣😣';
                score--;
                document.querySelector('.score').textContent = score;
              }
              else{
                document.querySelector('.message').textContent = "You Lost The Game 😂😂🤣 ! Click Again to play😎😎";
                document.querySelector('.score').textContent = 0;
              }
        }  
        
    });
       
    // Resetting the values
    document.querySelector('.again').addEventListener('click' , function(){
        score = 5;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('.score').textContent  = score;
         secretNumber = Math.trunc(Math.random() * 20) + 1;
         document.querySelector('.message').textContent  = 'Guess Again..🙄🙄'
         document.querySelector('body').style.backgroundImage = "url(back.jpg)";

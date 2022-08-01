 let secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.number').textContent = secretNumber;


    document.querySelector('.check').addEventListener('click', function(){
        //selecting the guessing no.
        const guess = Number(document.querySelector('.guess').value);
  

          // decreasing the score
       let sc = Number(document.querySelector('.score').textContent)
        if(guess !== secretNumber ){
            document.querySelector('.score').textContent = sc - 1;       
        }

        //  Setting the HighScore
        else{
            let val =  document.querySelector('.score').textContent = sc - 1; 
            document.querySelector('.highscore').textContent = val;
        }
       
        //validating conditions
        if(!guess){
            document.querySelector('.message').textContent  = ' Please Guess a No. first!';
        }
        else if(guess === secretNumber){
            document.querySelector('.message').textContent  = 'Correct Number!';
            document.body.style.backgroundColor = 'green';
        }
        else if(guess > secretNumber && guess - secretNumber > 3){
            document.querySelector('.message').textContent  = 'Tooo high!';
        }
        else if(guess < secretNumber && secretNumber-guess > 3){
            document.querySelector('.message').textContent  = 'Tooo low!';
        }
        else if(guess > secretNumber){
            document.querySelector('.message').textContent  = 'Close but High!';
        }
        else if(guess < secretNumber ){
            document.querySelector('.message').textContent  = 'Close but Low!!';
        }  
        
    });
       
    // Resetting the values
    document.querySelector('.again').addEventListener('click' , function(){
        document.querySelector('.guess').value = '';
        document.querySelector('.score').textContent  = 20;
         secretNumber = Math.trunc(Math.random() * 20) + 1;
         document.querySelector('.message').textContent  = 'Guess Again..'
         document.body.style.backgroundColor = '#222';


    })

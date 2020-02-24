// (function(){
//     "use sctrict";

    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const score = document.getElementById("score");
    const actionArea = document.getElementById("actions");
    
    var gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['player1', 'player2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollsum: 0,
        index: 0,
        gameEnd: 29
    }

    startGame.addEventListener("click", function(){
        // remove the description
        var elem = document.getElementById("description");
        elem.parentNode.removeChild(elem);
        // randomly set game index here...
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>Game in progress...</h2>';
        /* gameControl.innerHTML += '<a class="button" id="quit">Quit</a>';

        //reload the page
        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        }); */
        /* console.log(gameData.index); */
        setUpTurn();
    });


    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<a class="button" id="roll">Roll the Dice</a>';
        document.getElementById('roll').addEventListener("click", function(){

            throwDice()

        });
            checkWinningCondition()
    }


    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.ceil(Math.random()*6);
        gameData.roll2 = Math.ceil(Math.random()*6);
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
                            <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // if two 1's are rolled...
        if( gameData.rollSum === 2 ){
            game.innerHTML += '<p>Uh oh! Snake eyes were rolled.</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? gameData.index = 0 : gameData.index = 1;
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
            
            /******
            1. set a message
            2. set this player's score to 0
            3. swap the game index 
            4. show the current score
            5. wait 2 seconds then run setUpTurn() again;
            *******/
        }
        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? gameData.index = 0 : gameData.index = 1;
            game.innerHTML += `<p>Your turn is over. It is now ${gameData.players[gameData.index]}'s turn.</p>`
            setTimeout(setUpTurn, 2000);

            /*
            1. set a message
            2. swap the index
            3. wait 2 seconds then run setUpTurn() again;
            */
        }
        // if neither die is a 1...
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<div class = "or"><a class="button" id="rollagain">Roll again</a> or <a class="button" id="pass">Pass</a><div>';

            document.getElementById('rollagain').addEventListener("click", function(){ 
                throwDice();
            });

            document.getElementById('pass').addEventListener("click", function(){
                gameData.index ? gameData.index = 0 : gameData.index = 1;
                setUpTurn();
            });

            checkWinningCondition();
            /*
            1. Update this user's score
            2. add buttons to roll or pass
            3. add click handlers for those two buttons
            4. Check to see if this user has passed the threshold for winning
            */
        }
    }
    
    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<div id="scoreboard">${gameData.players[gameData.index]} 
            wins with ${gameData.score[gameData.index]} points!</div>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }
        else{  
            showCurrentScore();
        }
    }
    
    function showCurrentScore(){
        score.innerHTML = `<div id="scoreboard">SCOREBOARD<br>${gameData.players[0]}: ${gameData.score[0]} <br>${gameData.players[1]}: ${gameData.score[1]}</div>`;
    }
//}());
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- If 2 six comes u loose all the score and its next players turn.
*/




var scores,roundScore,activePlayer,gamePlaying,dice;
    
   init(); 


//document.querySelector('#current-' +activePlayer).innerHTML="<em>"dice"</em>";

//document.querySelector('#current-' +activePlayer).textContent=dice;

//var x=document.querySelector('#current-' +activePlayer).textContent;
//console.log(x);


//events to perform on click of roll dice

//init() does all

//document.querySelector('#current-0').textContent=0;
//document.querySelector('#current-1').textContent=0;
//document.querySelector('#score-0').textContent=0;
//document.querySelector('#score-1').textContent=0;


   
    var y=document.querySelector('.btn-roll');
y.addEventListener('click',function()
{
    if(gamePlaying){
        
        // 1. Display Random number between 1 to 6.
        
    
    dice=Math.floor(Math.random()*6)+1;
    
    
   
    
    //Display the dice.According to the value
    document.querySelector('.dice').style.display='block'; 
    document.querySelector('.dice').src='dice-'+dice+'.png';
     
    //to display the local dice score 
    document.getElementById('score-' +activePlayer).textContent=dice;
    
    //to calculate sum of the round score and display it in round score box    
    roundScore=roundScore+dice;
    
    
    if(dice!==1){
document.getElementById('current-'+activePlayer).textContent=roundScore
    }
    else{
        scores[activePlayer]=0;
        document.getElementById('score-'+activePlayer).textContent=0;
        nextPlayer();
    
    }

}
});



document.querySelector('.btn-hold').addEventListener('click',function()
{//1.score of the player should be saved to global score and in array
    
    
    scores[activePlayer]+=roundScore;
    console.log(scores[activePlayer]);
    
    //Update the UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    
    //next player
    if(scores[activePlayer]>=100)
        {
            document.querySelector('#name-'+activePlayer).textContent='WINNER !';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            gamePlaying=false;
        }
    else{
    nextPlayer();
    }
    
    
});

document.querySelector('.btn-new').addEventListener('click',function()
{
    init();
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    
    
});

function nextPlayer()
{
    document.getElementById('current-'+activePlayer).textContent=0;
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    
        
        document.querySelector('.dice').style.display='none';
    
}

function init()
{
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    prevDiceValue=0;
    gamePlaying=true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
}
//

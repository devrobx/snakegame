const canvas = document.getElementById('snake')
const c = canvas.getContext('2d')
const button = document.getElementById('restart');
let playerName;

window.onload = function(){
    playerName = prompt('What is your name?')
  
}



// Box unit
const box  = 32

// Play ground
const ground  = new Image()
ground.src = 'img/ground.png'

//Food
const foodImg  = new Image()
foodImg.src = 'img/food.png'


//Snake 
let snake = []


//audio
let eat = new Audio()
let move = new Audio()
let die = new Audio()

eat.src = 'sounds/eat.m4a'
move.src = 'sounds/move.m4a'
die.src = 'sounds/die.m4a'


//Position of head 
snake[0] = {
    x: 9 * box,
    y: 10* box
} 

//Food
let food = {
    x: moveFoodX(),
    y: moveFoodY()
}

let score =0;
let d;



document.addEventListener("keydown", moveSnake);
button.addEventListener('click', init)

function moveSnake(event){
    let key = event.keyCode;

    switch(key){
        case 37:
            move.play()
            d = 'LEFT'
            break;
        case 38:
            move.play()
            d = 'UP'
            break;
        case 39:
            move.play()
            d = 'RIGHT'
            break;
        case 40:
            move.play()
            d = 'DOWN'  
            break; 
    }
    // if(key == 37 && d != 'RIGHT'){
    //     move.play()
    //     d = 'LEFT'
    // }else if (key == 38 && d != 'DOWN'){
    //     move.play()
    //     d = 'UP'
    // }
    // else if (key == 39 && d != 'LEFT'){
    //     move.play()
    //     d = 'RIGHT'
    // }
    // else if (key == 40 && d != 'UP'){
    //     move.play()
    //     d = 'DOWN'
    // } else {
    //     d = 'NONE'
    // }
}

function collide(head, array) {
    for (let i =0 ;i < array.length;i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true
        }
    }
    return false;
}


function draw(){
    c.drawImage(ground,0,0)
    
    for (let i=0; i< snake.length;i++){
        c.fillStyle = (i === 0) ? "green" : "white"
        c.fillRect(snake[i].x , snake[i].y, box, box);
        
        c.strokeStyle = "white"
        c.strokeRect(snake[i].x , snake[i].y, box, box);
    }

    c.drawImage(foodImg , food.x , food.y);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
   

    //move snake
    if ( d == 'LEFT') snakeX -= box;
    if ( d == 'UP') snakeY -= box;
    if ( d == 'DOWN') snakeY += box;
    if ( d == 'RIGHT') snakeX += box;

    // switch(d){
    //     case 'LEFT':
    //         snakeX -= box;
    //     case 'UP':
    //         snakeY -= box;
    //     case 'DOWN':
    //         snakeY += box;
    //     case 'RIGHT':
    //         snakeX += box;
    // }

     //snake eat food 
     if(snakeX == food.x && snakeY == food.y){
        score++;
        eat.play()
        food = {
            x : moveFoodX(),
            y : moveFoodY()
        }
    }else {
     snake.pop()
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }
   

   if(snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collide(newHead,snake)){
       die.play()
       clearInterval(game);
       highScore(score);
       snake = []
      
   }

    snake.unshift(newHead);

    c.fillStyle = 'red'
    c.font = '35px Arial'
    c.fillText(score,2*box,1.6*box)
}




function moveFoodX(){
    return Math.floor(Math.random() *17 +1) * box;
}
function moveFoodY(){
    return Math.floor(Math.random() *15 +3) * box;
}

function init() {
    score = 0;
    food = {
        x : moveFoodX(),
        y : moveFoodY()
    }
    snake[0] = {
        x: 9 * box,
        y: 10* box
    } 
    d = 'NONE';
    game = setInterval(draw,100);
}

function setHighScore(playerName, playerScore,scoreNum, scoreName){
    localStorage.setItem(scoreNum, playerScore);
    localStorage.setItem(scoreName, playerName);
}

function highScore(playerScore){
   
  
    
    if ( playerScore > num1){
        
       
        if(num1 > num2){
            localStorage.setItem('score2', num1)
            localStorage.setItem('name2', localStorage.getItem('name1'))
            name2.innerHTML = p1;
        }
        num1 = playerScore;
        setHighScore(playerName, playerScore, 'score1', 'name1')
        name1.innerHTML = playerName;
        score1.innerHTML = playerScore;
        
        
    }else if (playerScore > num2){
        
        if(num2 > num3){
            localStorage.setItem('score3', num2)
            localStorage.setItem('name3', localStorage.getItem('name2'))
            name3.innerHTML = p2;
        }
        num2 = playerScore;
        setHighScore(playerName, playerScore, 'score2', 'name2')
        name2.innerHTML = playerName;
        score2.innerHTML = playerScore;

    }else if(playerScore > num3){
        
        if(num3 > num4){
            localStorage.setItem('score4', num3)
            localStorage.setItem('name4', localStorage.getItem('name3'))
            name4.innerHTML = p3;
        }
        num3 = playerScore;
        setHighScore(playerName, playerScore, 'score3', 'name3')
        name3.innerHTML = playerName;
        score3.innerHTML = playerScore;

    }else if(playerScore > num4){
        
        if(num4 > num5){
            localStorage.setItem('score5', num4)
            localStorage.setItem('name5', localStorage.getItem('name4'))
            name5.innerHTML = p4;
        }
        num4 = playerScore;
        setHighScore(playerName, playerScore, 'score4', 'name4')
        name4.innerHTML = playerName;
        score4.innerHTML = playerScore;
        
    }else if (playerScore > num5){
        
        num5 = playerScore;
        setHighScore(playerName, playerScore, 'score5', 'name5')
        name5.innerHTML = playerName;
        score5.innerHTML = playerScore;

    }else{
        // nothing
    }
    
    }

  
    
    
  

let game = setInterval(draw, 100)



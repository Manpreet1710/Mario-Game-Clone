
//Mario-Game-Clone using vanialla Javascript
console.log("Mario Game");

// starting mario-game sound
audio = new Audio("../audio/01 - Super Mario Bros.mp3");
// audio.loop=true;
audio.play();

// gameover sound
audio1 = new Audio('../audio/mario_game_over_sms.mp3');
// audio1.loop=false;

score = 0;
// score

document.onkeydown = (e) =>{
    // console.log("Arrow key Code:" , e.keyCode);
    if(e.keyCode === 38){
        let mario = document.querySelector('.mario');
        mario.classList.add('marioANi');

        setTimeout(() => {
            mario.classList.remove('marioANi');
        }, 1000);
    }

    else if(e.keyCode === 39){
        let mario = document.querySelector('.mario');
        mx = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
        mario.style.left = mx + 150 + "px";
    }

    else if(e.keyCode === 37){
        let mario = document.querySelector('.mario');
        mx = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
        mario.style.left = mx - 100 + "px";
    }
}

let set  = setInterval(() => {

    let mario = document.querySelector('.mario');
    let dragon = document.querySelector('.dragon');
    let gameTitle = document.querySelector('.game-title');
    let gameScore = document.querySelector('.game-score');

    // evaluete absolute values
    mx = parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(mario,null).getPropertyValue('bottom'));

    dx =  parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
    dy =  parseInt(window.getComputedStyle(dragon,null).getPropertyValue('bottom'));
    
    // evaluete absolute values
    offsetX = Math.abs(mx-dx);
    offsetY = Math.abs(my-dy);
    
    if(offsetX < 110 && offsetY < 80){
        dragon.classList.remove('dragonANI'); 
        gameTitle.style.display = "block";
        audio.pause();
        audio1.play();
        mario.style.bottom = my -300 + "px";
        get();
    }
    else{
        score = score + 1;
        gameScore.innerHTML = score;

        // setTimeout(() => {
        //     dur  =  parseFloat(window.getComputedStyle(dragon,null).getPropertyValue('animation-duration'));
        //     newDur  = dur - 0.5;
        //     dragon.style.animationDuration = newDur + 's';
        // }, 1000); 
        
        //Pending part
    }
    
}, 500);

function get(){
    clearInterval(set);
    confetti.start()
    document.onkeydown = function(e){
                e.preventDefault();
        }
}
// body = document.querySelector("body");
// body.addEventListener("click",function(){
//     document.onkeydown = function(e){
//         e.preventDefault();
//     }
// })

//Pending Some Modification
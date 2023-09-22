const canvas = document.getElementById('canvas');

const context = canvas.getContext("2d");

var player = new Image();

player.src = 'mau.png';
var x = 400;
var y = 400;

player.onload = function(){
    context.drawImage(player, x,y);
} 

var key, keyState = 0;

document.onkeydown = function(e){
    key=e.key;
    keyState="keydown";
}

document.onkeyup = function(e){
    keyState = "keyup";
}

setInterval(function(){
    
    if(keyState === "keyup"){
        return;
    }

    if(key === 'w'){
        y-=1;
    }
    if(key === 'a'){
        x-=1;
    }
    if(key === 's'){
        y+=1;
    }
    if(key === 'd'){
        x+=1;
    }
    

    context.clearRect(0,0,2000,2000);
    context.drawImage(player,x,y);
},5);
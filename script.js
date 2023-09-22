const canvas = document.getElementById('canvas');

const context = canvas.getContext("2d");

var player = new Image();

player.src = 'mau.png';

player.onload = function(){
    context.drawImage(player, 400,400);
}
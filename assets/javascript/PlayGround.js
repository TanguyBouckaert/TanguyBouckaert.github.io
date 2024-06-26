var c = document.getElementById("PlayJS");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var dutch = "abcdefghijklmnopqrstuvwxyz";

dutch = dutch.split("");

var font_size = 10;
var columns = c.width/font_size; // number of columns for rain

//an array of drops - one for column

var drops = [];

//x below is the x coordinate
//1 = y co-ordinate of the drop

for (var x = x; x < columns; x++){
drops[x] = 1;
}

//drawing the characters

function draw(){
    
    //Black BG for the canvas
    //translucent BG to show trail

    ctx.fillStyle = "rgba(0,0,0.05)";
    
    ctx.fillRect(0,0,c.width, c.height);

    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px arial";

    //loop over drops

    for (var i = 0; i < drops.length; i++) 
    {
        var text = dutch[Math.floor(Math.random()*dutch.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis

        if(drops[i]*font_size > c.height && Math.random() > 0.975)
        drops[i]=0;

        //incrementing Y coordinate

        drops[i]++ 
    }
}

setInterval(draw, 33);


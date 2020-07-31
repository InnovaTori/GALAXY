////////////////*****CREATE THE UNIVERSE.js*****///////////////

var stars = [];
var darkEnergy = 2;

function randomInt(min, max) {
    return Math.floor(Math.random() * ((max - min + 1)+min))
}

//create stars in 0(n)... not quite as efficient as 0(big bang)
for(var i = 0; i < 2000; i++){
    var circle = new Path.Circle(new Point(view.size.width, view.size.height)* Point.random(), randomInt(0.5, 1.1))
    stars.push(circle)
}


for(var i = 0; i < 2000; i++){
    var playGod = Math.random()

    if(playGod < .3){
        stars[i].fillColor = 'grey'
    }else if(playGod > .3 && playGod < .4 ){
        stars[i].fillColor = '#b0cffd'
    }else if(playGod > .4 && playGod < .6 ){
        stars[i].fillColor = '#fdedb5'
    }else if(playGod > .6 ){
        stars[i].fillColor = 'white'
    }
}

//get random lateral speeds for scattered effect
function assignRate(){
    for(var i = 0; i < stars.length; i++){
        var velocity = Math.random()*darkEnergy;
        stars[i].rate = velocity;
    }
}


//call to assign a speed to each star
assignRate();


//gives user ability to change the assign speeds (increase, on key-press D)
function onKeyDown(event) {
    if(event.key == 'd'){
        darkEnergy += .35
        assignRate();
    }else if(event.key == 's'){
        darkEnergy -= .5
        assignRate();
    }
}


//lets stars position adjust to frame size
function onFrame(event) {
    for(var i = 0; i < stars.length; i++){
        stars[i].translate(stars[i].rate, 0)
        
        if(stars[i].position.x > view.size.width){
            stars[i].position.x = 0;
        }else if(stars[i].position.x < 0){
            stars[i].position.x = view.size.width
        }
    }
}
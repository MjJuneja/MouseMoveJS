var spot= {
    
    x:20,
    y:10
};

var col = {
    r:255,
    g:0,
    b:0
    
};

function setup(){
    createCanvas(1340,662);
    background(0);
}

function draw(){
    col.r= random(100,255);
    col.g= 0;
    col.b= random(100,190);
//    spot.x= random(0,width);
//    spot.y= random(height/3,height/2);
    spot.x=random(mouseX-10,mouseX+20);
    spot.y=random(mouseY-10,mouseY+20);
    noStroke();
    
    if(mouseX>5 && mouseY>5){
    fill(col.r,col.g,col.b,100);
        
        
    ellipse(spot.x,spot.y,24,24);
    
    }
}

function mousePressed(){
    
    background(0);
}

function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);
  

  
}

function draw() {
  background("black");  
  hr = hour();
  mn = minute();
  sc = second();
textSize(30);
  text(hr ,100,100)
  text(" :"+mn ,130,100)
  text (" :"+sc, 170, 100)
  //console.log(hr,mn,sc);
  scAngle = map (sc,0,60,0,360);
  mnAngle = map (mn,0,60,0,360);
  hrAngle = map (hr %12, 0,12,0,360);


  //seconds hand
push();
translate(300,300)
rotate(-90);
rotate(scAngle);
stroke("red");
strokeWeight(5);
line(0,0,100,0);
pop();
//minute hand
push();
translate(300,300)
rotate(-90);
rotate(mnAngle);
stroke("blue");
strokeWeight(5);
line(0,0,75,0);
pop();
//hour hand
push();
translate(300,300)
rotate(-90);
rotate(hrAngle);
stroke("green");
strokeWeight(5);
line(0,0,60,0);
pop();

//Draw arcs
noFill();
stroke("red");
strokeWeight(5);
translate(300,300)
rotate(-90)
arc(0,0,300,300,0,scAngle);

stroke("blue");
strokeWeight(5);
arc(0,0,280,280,0,mnAngle);

stroke("green");
strokeWeight(5);
arc(0,0,260,260,0,hrAngle);


  
  drawSprites();
}
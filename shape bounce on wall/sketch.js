  var radius=40;
  var x=100;
  var speed=0.5;
  var direction=1;

  function setup() 
  { createCanvas(500,200);
    ellipseMode(RADIUS);
  }

  function draw()
  { background(0);
    x+=speed*direction;
    if((x>width-radius)||(x<radius))
      {direction=-direction;}
    if (direction==1)
      {
        arc(x,60,radius,radius,0.5,5.76);
      }
    else
      {
        arc(x,60,radius,radius,3.67,8.9);
      }
      console.log("good");
  }
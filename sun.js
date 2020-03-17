class Sun{
constructor(x,y){
 this.image = loadImage("sun.jpg");

}

display(){
    push();
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

}
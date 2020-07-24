class Block extends BaseClass {
    constructor(x, y){
      super(x,y,20,20);
      this.visibility = 255;
    }
  
    display(){
      fill("teal");
      if (this.body.speed < 3){
        super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility)
        pop();
    }
  }
    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }
    }
}  
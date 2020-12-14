class Tree{

    constructor(x,y,width,height){

        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        strokeWeight(4);
       image(this.image , 600,400,400,500);
    }
}
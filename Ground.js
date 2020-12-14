class Ground{

    constructor(x,y,width,height){

        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = this.x ;
        this.y = this.y ;
        this.width = 800;
        this.height = 50 ;
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        fill("grey");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
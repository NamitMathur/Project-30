class Block{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.height=height;
        this.width=width;
    }
    display(){
        rectMode(CENTER);

        var pos=this.body.position;
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
    }
}
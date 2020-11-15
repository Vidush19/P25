class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        // this.bottom = Bodies.rectangle(x, y,options);
        // this.right = Bodies.rectangle(x, y, options);
        // this.left = Bodies.rectangle(x, y,options);
        World.add(world,this.body);
        // World.add(world,this.right);
        // World.add(world,this.left);
        // World.add(world,this.bottom);
    }
    display(){
        var pos = this.body.position;
        // var pos1 = this.left.position;
        // var pos2 = this.right.position;
        // var pos3 = this.bottom.position;
        // imageMode(CENTER);
        rectMode(CENTER);
        fill(0);
        rect(pos.x,pos.y,this.width,this.height);
        // rect(pos1.x,pos1.y);
        // rect(pos2.x,pos2.y);
        // image(this.image,pos3.x,pos3.y);

    }
}
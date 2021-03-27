class Rope {
    constructor(myBodyA, myPointB){
       
        var options = {
            bodyA: myBodyA,
            pointB: myPointB
        }   
        this.rope = Constraint.create(options);
        this.pointB = myPointB
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        
        stroke("white");
        strokeWeight(2);
       


        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }

}
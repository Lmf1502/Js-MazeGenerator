class Cell
{
    constructor(r,c) 
    {
        this.i=r;
        this.j=c;
        
        this.walls = [true, true, true, true];
                    //[top0, right1, bottom2, left3]
        this.visited = false;
        //this.text = "("+this.i+" ,"+this.j+")";  
    }
    
    checkNeighbors()
    {
        let neighbors = [];
            function index(i,j){
        if(i<0 || j<0 || i>cols-1 ||j>rows-1)
        {
            return -1;
        }
        let val= i + (j* rows);
        //console.log(i+","+j+"= "+val);
         return val;
    }

        let topneighbor = grid[index(this.i,this.j-1)];
        var rightneighbor = grid[index(this.i+1,this.j)];
        var bottomneighbor = grid[index(this.i,this.j+1)]; 
        var leftneighbor = grid[index(this.i-1,this.j)];

        if (topneighbor && !topneighbor.visited){
            neighbors.push(topneighbor);
           // console.log("push top");
        }
        if (rightneighbor && !rightneighbor.visited){
            neighbors.push(rightneighbor);
           // console.log("push right");
        }
        if (bottomneighbor && !bottomneighbor.visited){
            neighbors.push(bottomneighbor);
           // console.log("push bottom");
        }
        if (leftneighbor && !leftneighbor.visited){
            neighbors.push(leftneighbor);
           // console.log("push left");
        }
        
        if(neighbors.length > 0){
           console.log(neighbors.length);
            var r =Math.floor( Math.random()*5);
            console.log(r);
            r = r % (neighbors.length);
            console.log(r);
            //console.log(neighbors[r]);
            return neighbors[r];
        } 
        else{
            return undefined;
        }
    }

    show()
    {   console.log("show");
        var x = (this.i*w)+10;
        var y = (this.j*w)+10;
        
       // Lmfcontext.fillStyle = "#000000";
        //Lmfcontext.fillText(this.text,x+10,y+10);
        //top
        if(this.walls[0]){
            LineFromTo(x,y,x+w,y);
        }
        
        //left
        if(this.walls[3]){
            LineFromTo(x,y,x,y+w);
        }
        
        //right
        if(this.walls[1]){
            LineFromTo(x+w,y,x+w,y+w);
        }

        //bottom
        if(this.walls[2]){
            LineFromTo(x,y+w,x+w,y+w);
        }
        
        if(this.visited){
            Lmfcontext.fillStyle = "#6b531c";
            Lmfcontext.fillRect(x,y,w,w);
        }
    }
}
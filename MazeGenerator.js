
    var rows, cols;
    var w = 20;
    var grid = [];
    var current;
    let next;
    let stack = [];

    rows = Math.floor(window.innerHeight / w );
    cols = Math.floor(window.innerWidth / w )-1;

function setup(){
    for (var c=0; c< cols;c++){
        for (var r=0; r< rows;r++){
            var cell = new Cell(r,c);
            grid.push(cell);
        }
    }
    current = grid[0];
    current.visited = true;
}
//window.requestAnimationFrame(drawmaze());
function drawMaze(){
    Lmfcontext.clearRect(0,0,canvas.width,canvas.height)
    console.log("drawMaze");
    canvas.style.background = "#2ab81d" ;
    for (var i=0; i< grid.length;i++){
        grid[i].show();
    }
   
    next = current.checkNeighbors();
    //console.log(next);

    if(next){
        next.visited = true;
        stack.push(current);
        removewalls(current,next);
            //console.log(current);
        current = next;
           // console.log(next);
    } else if(stack.length>0)
        {
            current = stack.pop();
        }
      requestAnimationFrame(drawMaze);
    }

function removewalls(a,b){

    var x= a.i - b.i;
    if(x=== 1)//cur is  of nxt
    {
        a.walls[3]=false;//left
        b.walls[1]=false;//right
    }
    else if(x===-1)//a is left of b
    {
        a.walls[1]=false;//right
        b.walls[3]=false;//left
    }
    var y= a.j - b.j;
    if(y===1)//a is below b
    {
        a.walls[0]=false;//top
        b.walls[2]=false;//bottom
    }
    else if(y===-1)//a is above b
        {
            a.walls[2]=false;//bottom
            b.walls[0]=false;//top
        }
}

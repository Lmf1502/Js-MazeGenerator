class Circle {
    constructor(xpos,ypos,radius,color){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }

    draw(Lmfcontext){
        Lmfcontext.beginPath();
        Lmfcontext.arc(this.xpos,this.ypos, this.radius,0,Math.PI*2,false);
        Lmfcontext.stroke();
    }
}

function LineFromTo(x,y,dx,dy){
        Lmfcontext.beginPath();
        Lmfcontext.lineWidth = 2;
        Lmfcontext.moveTo(x, y);
        Lmfcontext.lineTo(dx, dy);
        Lmfcontext.stroke();
}
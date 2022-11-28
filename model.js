
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    this.shapeArray=new Map;
}

function Shape (initX, initY, color, thickness)
{
    this.initX=initX;
    this.initY=initY;
    this.color=color;
    this.thickness=thickness;
}

function Rectangle (initX, initY, color, thickness, height, width)
{
    Shape.call(this, initX,initY,color,thickness,height,width)
    this.width=width;
    this.height=height;
}

function Line (initX, initY, color, thickness, finalX, finalY)
{
    Shape.call(this, initX,initY,color,thickness,finalX,finalY)
    this.finalX=finalX;
    this.finalY=finalY;
}
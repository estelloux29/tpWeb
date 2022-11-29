var editingMode = {rect: 0, line: 1};

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#00ccc0';
    this.currentShape = 0;

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect;
    document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line;
    document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value;
    document.getElementById('colour').onchange = (e) => this.currColour = e.target.value;


    new DnD(canvas, this);

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function (dnd) {
        // création de la forme


    }.bind(this);

    this.onInteractionUpdate = function (dnd) {
        //maj de la forme par récupération du dnd
        if (this.currEditingMode == editingMode.rect) {
            this.currentShape = new Rectangle(dnd.initialX, dnd.initialY, this.currColour, this.currLineWidth, dnd.finalY - dnd.initialY, dnd.finalX - dnd.initialX);
            //console.log(this.currentShape);
        } else {
            this.currentShape = new Line(dnd.initialX, dnd.initialY, this.currColour, this.currLineWidth, dnd.finalX, dnd.finalY);
            //console.log(this.currentShape);
        }
        drawing.paint(ctx, canvas);
        this.currentShape.paint(ctx);
    }.bind(this);

    this.onInteractionEnd = function (dnd) {
        // "enregistre" la forme dessinée
        drawing.shapeArray.set(this.currentShape, this.currentShape);
        drawing.paint(ctx);
        this.currentShape.paint(ctx, canvas);
    }.bind(this);
}



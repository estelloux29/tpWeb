// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.strokeRect(this.initX, this.initY, this.width, this.height);
};

Line.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.moveTo(this.initX, this.initY);
    ctx.lineTo(this.finalX, this.finalY);
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

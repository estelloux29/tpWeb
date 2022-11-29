// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    this.initialX = 0;
    this.finalX = 0;
    this.initialY = 0;
    this.finalY = 0;
    this.interactor = interactor;

    // Developper les 3 fonctions gérant les événements
    this.onClickMouse = function (evt) {
        var position = getMousePosition(canvas, evt);
        this.initialX = position.x;
        this.initialY = position.y;
        this.isClicked = true;
        //demarrage de l'interraction
        this.interactor.onInteractionStart(this);
    }.bind(this)//pour lier les événements

    this.onMoveMouse = function (evt) {

        if (this.isClicked) {
            var position = getMousePosition(canvas, evt);
            this.finalX = position.x;
            this.finalY = position.y;
            // maj de l'interaction après mouvement
            this.interactor.onInteractionUpdate(this);
        }

    }.bind(this)

    this.onReleasedMouse = function (evt) {
        var position = getMousePosition(canvas, evt);
        this.finalX = position.x;
        this.finalY = position.y;
        this.isClicked = false;
        // fin de l'interaction après relâchement du clic
        this.interactor.onInteractionEnd(this)
    }.bind(this)

    // Associer les fonctions précédentes aux évènements du canvas.
    //le addEventListener attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.
    // syntaxe : target.addEventListener(type, listener [, options]);
    canvas.addEventListener('mousedown', this.onClickMouse, false);
    canvas.addEventListener('mousemove', this.onMoveMouse, false);
    canvas.addEventListener('mouseup', this.onReleasedMouse, false);

};

// Place le point de l'événement evt relativement à la position du canvas.

function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};




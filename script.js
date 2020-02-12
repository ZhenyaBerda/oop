'use strict';



function DomElement(height, width, bg, position) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.position = position;
}

DomElement.prototype.createElement = function () {

    let element = document.createElement('div');
    element.className = 'square';
    element.style.cssText = `height: ${this.height}px; 
                            width: ${this.width}px; 
                            background-color: ${this.bg}; 
                            position: ${this.position};
                            left: 0;
                            top: 0`;
    document.body.appendChild(element);
};

DomElement.prototype.moveEvents = function () {

    document.addEventListener('keydown', function (event) {

        let square = document.querySelector('.square');

        if (event.keyCode === 37) {
            square.style.left = (parseInt(square.style.left) - 10) + 'px';
        } // left
        if (event.keyCode === 38) {
            square.style.top = (parseInt(square.style.top) - 10) + 'px';
        } //up
        if (event.keyCode === 39) {
            square.style.left = (parseInt(square.style.left) + 10) + 'px';

        } // right
        if (event.keyCode === 40) {
            square.style.top = (parseInt(square.style.top) + 10) + 'px';
        } // down
    });
};




document.addEventListener('DOMContentLoaded', function () {
    let element = new DomElement('100', '100', '#4b0082', 'absolute');
    element.createElement();
    element.moveEvents();
});
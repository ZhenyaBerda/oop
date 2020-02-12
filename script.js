'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function () {

    let element;
    if (this.selector.charAt(0) === '.') {
        element = document.createElement('div');
        element.className = this.selector.slice(1);
    }

    if (this.selector.charAt(0) === '#') {
        element = document.createElement('p');
        element.id = this.selector.slice(1);
    }

    element.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    element.style.cssText = `height: ${this.height}px; 
                            width: ${this.width}px; 
                            background-color: ${this.bg}; 
                            font-size: ${this.fontSize}px`;
    document.body.appendChild(element);
};

let pElement = new DomElement('#best', '600', '800', '#0000ff', '24');
pElement.createElement();

let divElem = new DomElement('.block', '200', '180', '#ffff00', '18');
divElem.createElement();
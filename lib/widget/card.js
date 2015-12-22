'use strict';

const MVA = require('@scola/mva');

class CardView extends MVA.View.Abstract {
  constructor() {
    super();
    this.flipped = false;
  }

  build() {
    this
      .element('card', 'div')
      .style({
        perspective: '1000px'
      });

    this
      .element('sides', 'div')
      .style('absmax')
      .style({
        transformStyle: 'preserve-3d'
      })
      .appendTo(
        this.element('card')
      );

    this
      .element('front', 'div')
      .style('absmax')
      .style({
        backfaceVisibility: 'hidden',
        zIndex: 2
      })
      .appendTo(
        this.element('sides')
      );

    this
      .element('back', 'div')
      .style('absmax')
      .style({
        transform: 'rotateY(180deg)',
        backfaceVisibility: 'hidden'
      })
      .appendTo(
        this.element('sides')
      );

    return this;
  }

  render() {
    return this.element('card');
  }

  flip() {
    this
      .element('sides')
      .animate({
        duration: 300,
        play: true,
        rotationY: this.flipped ? 0 : '-180deg',
        onComplete: () => {
          this.flipped = !this.flipped;
        }
      });
  }
}

module.exports = CardView;

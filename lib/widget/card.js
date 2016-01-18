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
      })
      .listen({
        flip: this.handleFlip
      });

    this
      .element('sides', 'div')
      .style('@scola.absmax')
      .style({
        transformStyle: 'preserve-3d'
      })
      .appendTo(
        this.element('card')
      );

    this
      .element('front', 'div')
      .style('@scola.absmax')
      .style({
        backfaceVisibility: 'hidden'
      })
      .appendTo(
        this.element('sides')
      );

    this
      .element('back', 'div')
      .style('@scola.absmax')
      .style({
        transform: 'rotateY(180deg)',
        backfaceVisibility: 'hidden'
      })
      .appendTo(
        this.element('sides')
      );
  }

  render() {
    return this.element('card');
  }

  flip() {
    this.flipped = !this.flipped;

    this.element('card').emit('flip', {
      view: this,
      flipped: this.flipped
    });

    return this;
  }

  handleFlip(event) {
    event.view
      .element('sides')
      .animate({
        duration: 300,
        play: true,
        rotationY: event.flipped ? '-180deg' : 0
      });
  }
}

module.exports = CardView;

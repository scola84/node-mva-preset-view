'use strict';

const View = require('@scola/view');

class CardView extends View.Abstract {
  constructor() {
    super();
    this.flipped = false;
  }

  build() {
    this
      .element('card', 'div')
      .properties({
        className: 'scola card'
      })
      .style({
        perspective: '1000px'
      })
      .listen({
        flip: this.handleFlip
      }, this);

    this
      .element('sides', 'div')
      .properties({
        className: 'scola sides'
      })
      .style({
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        transformStyle: 'preserve-3d'
      })
      .appendTo(
        this.element('card')
      );

    this
      .element('front', 'div')
      .properties({
        className: 'scola front'
      })
      .style({
        backfaceVisibility: 'hidden',
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
      })
      .appendTo(
        this.element('sides')
      );

    this
      .element('back', 'div')
      .properties({
        className: 'scola back'
      })
      .style({
        backfaceVisibility: 'hidden',
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        transform: 'rotateY(180deg)'
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

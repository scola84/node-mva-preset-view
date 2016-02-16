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
        height: '100%',
        position: 'absolute',
        transformStyle: 'preserve-3d',
        width: '100%'
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
        height: '100%',
        position: 'absolute',
        width: '100%'
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
        height: '100%',
        position: 'absolute',
        transform: 'rotateY(180deg)',
        width: '100%'
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

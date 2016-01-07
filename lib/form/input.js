'use strict';

const MVA = require('@scola/mva');

class InputView extends MVA.View.Abstract {
  constructor() {
    super();
    this.hideTimeout = null;
  }

  build() {
    this
      .element('wrapper', 'div')
      .style({
        background: '#FFF',
        position: 'relative'
      });

    this.element('input', 'input')
      .properties({
        type: 'text'
      })
      .style({
        background: 'none',
        border: 0,
        height: '100%',
        margin: 0,
        padding: 0,
        position: 'absolute',
        width: '100%'
      }).appendTo(
        this.element('wrapper')
      );

    this.view('bubble', '@scola.form.bubble');

    return this;
  }

  showBubble(text, position) {
    position = position || 'left';

    this.removeBubble();

    this
      .view('bubble')
      .setPosition(position)
      .element('wrapper')
      .style({
        opacity: 1
      })
      .element('text')
      .properties({
        innerHTML: text
      });

    this
      .element('wrapper')
      .append(
        this.view('bubble').render()
      );

    this.addBubbleHandlers();

    return this;
  }

  addBubbleHandlers() {
    if (!this.hideTimeout) {
      this.bindListener('click', document, this.hideBubble);
      this.hideTimeout = setTimeout(this.hideBubble.bind(this), 3000);
    }
  }

  removeBubbleHandlers() {
    if (this.hideTimeout) {
      this.unbindListener('click', document, this.hideBubble);
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  hideBubble() {
    this.removeBubbleHandlers();

    this
      .view('bubble')
      .element('wrapper')
      .animate({
        duration: 150,
        opacity: 0,
        onComplete: this.removeBubble.bind(this, 'animation'),
        play: true
      });
  }

  removeBubble() {
    this.removeBubbleHandlers();

    this
      .view('bubble')
      .clear()
      .element('wrapper')
      .get()
      .remove();
  }

  render() {
    return this.element('wrapper');
  }

  destroy() {
    this.removeBubbleHandlers();
    super.destroy();
  }
}

module.exports = InputView;

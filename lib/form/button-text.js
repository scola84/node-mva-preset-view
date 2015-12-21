'use strict';

const MVA = require('@scola/mva');

class TextButtonView extends MVA.View.Abstract {
  build() {
    this
      .element('button', 'button')
      .style({
        background: '#FFF',
        border: 0,
        color: '#000',
        cursor: 'pointer',
        height: '2em',
        padding: '0 0.33em'
      });

    return this;
  }

  render() {
    return this.element('button');
  }
}

module.exports = TextButtonView;

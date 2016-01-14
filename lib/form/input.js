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
        height: '2.5em',
        position: 'relative'
      });

    this
      .element('input', 'input')
      .properties({
        type: 'text'
      })
      .style({
        background: 'none',
        border: 0,
        height: '100%',
        left: 0,
        margin: 0,
        padding: '0 0.5em',
        position: 'absolute',
        top: 0,
        width: '100%'
      })
      .appendTo(
        this.element('wrapper')
      );

    return this;
  }

  render() {
    return this.element('wrapper');
  }
}

module.exports = InputView;

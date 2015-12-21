'use strict';

const MVA = require('@scola/mva');

class InputView extends MVA.View.Abstract {
  build() {
    this
      .element('wrapper', 'div')
      .style({
        background: '#FFF',
        position: 'relative'
      });

    this.element('input', 'input')
      .props({
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

    return this;
  }

  render() {
    return this.element('wrapper');
  }
}

module.exports = InputView;

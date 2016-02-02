'use strict';

const View = require('@scola/view');

class InputView extends View.Abstract {
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
  }

  render() {
    return this.element('wrapper');
  }

  value() {
    let inputValue = this.element('input').get().value;

    if (typeof inputValue === 'string' && inputValue.length === 0) {
      inputValue = null;
    }

    return inputValue;
  }
}

module.exports = InputView;

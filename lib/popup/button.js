'use strict';

const MVA = require('@scola/mva');

class PopupButtonView extends MVA.View.Abstract {
  build() {
    this
      .element('button', 'button')
      .style({
        background: '#FFF',
        border: 0,
        borderTop: '1px solid #CCC',
        cursor: 'pointer',
        float: 'left',
        fontSize: '1.2em',
        height: '3em',
        lineHeight: '3em',
        padding: 0,
        textAlign: 'center',
        width: '100%'
      });
  }

  render() {
    return this.element('button');
  }
}

module.exports = PopupButtonView;

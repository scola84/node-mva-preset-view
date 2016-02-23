'use strict';

const View = require('@scola/view');

class PopButtonView extends View.Abstract {
  build() {
    this
      .element('button', 'button')
      .properties({
        className: 'scola button'
      })
      .style({
        background: '#FFF',
        border: 0,
        borderLeft: '1px none #CCC',
        borderTop: '1px solid #CCC',
        cursor: 'pointer',
        float: 'left',
        height: '3em',
        lineHeight: '3em',
        padding: 0,
        textAlign: 'center',
        width: '100%'
      })
      .if(this.capability('hairline'))
      .style({
        borderWidth: '0.5px'
      });
  }

  render() {
    return this.element('button');
  }
}

module.exports = PopButtonView;

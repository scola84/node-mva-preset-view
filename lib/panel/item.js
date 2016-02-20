'use strict';

const View = require('@scola/view');

class PanelItemView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola item'
      })
      .style({
        background: '#FFF',
        borderTopWidth: '1px',
        borderTopColor: '#CCC',
        lineHeight: '3em'
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      });

    this.element('inner', 'div')
      .properties({
        className: 'scola inner'
      })
      .style({
        display: 'flex',
        margin: '0 0 0 1em'
      })
      .appendTo(this.element('outer'));
  }

  render() {
    return this.element('outer');
  }

  top() {
    throw new Error('not_implemented');
  }
}

module.exports = PanelItemView;

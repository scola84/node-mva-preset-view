'use strict';

const View = require('@scola/view');

class ListItemView extends View.Abstract {
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
        display: 'flex'
      })
      .appendTo(this.element('outer'));

    this.element('padding-left', 'div')
      .properties({
        className: 'scola padding'
      })
      .style({
        borderTop: '1px solid transparent',
        width: '1em'
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      })
      .appendTo(this.element('inner'));
  }

  render() {
    return this.element('outer');
  }

  top() {
    throw new Error('not_implemented');
  }
}

module.exports = ListItemView;

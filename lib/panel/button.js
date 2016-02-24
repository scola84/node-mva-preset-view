'use strict';

const View = require('@scola/view');

class PanelButtonView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola button'
      })
      .style({
        display: 'flex',
        flexDirection: 'row',
        height: '3em',
        width: '30%'
      });

    this.element('inner', 'div')
      .properties({
        className: 'scola inner'
      })
      .style({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        overflow: 'hidden'
      })
      .appendTo(this.element('outer'));

    this.element('padding-left', 'div')
      .properties({
        className: 'scola padding'
      })
      .style({
        width: '0.5em'
      })
      .appendTo(this.element('inner'));

    this.element('icon', 'div')
      .properties({
        className: 'scola icon'
      })
      .style({
        display: 'none',
        fontSize: '2em',
        width: '0.6em'
      })
      .appendTo(this.element('inner'));

    this.element('text', 'div')
      .properties({
        className: 'scola text'
      })
      .style({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      })
      .appendTo(this.element('inner'));
  }

  render() {
    return this.element('outer');
  }

  float(direction) {
    this.element('outer')
      .if(direction === 'left')
      .style({
        flexDirection: 'row',
        order: 1
      })
      .if(direction === 'right')
      .style({
        flexDirection: 'row-reverse',
        order: 3
      });

    this.element('inner')
      .if(direction === 'left')
      .style({
        flexDirection: 'row'
      })
      .if(direction === 'right')
      .style({
        flexDirection: 'row-reverse'
      });

    return this;
  }
}

module.exports = PanelButtonView;

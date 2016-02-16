'use strict';

const View = require('@scola/view');

class PanelItemInputView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola item input'
      })
      .style({
        background: '#FFF',
        height: '3em',
        lineHeight: '3em'
      });

    this.element('inner', 'div')
      .properties({
        className: 'scola inner'
      })
      .style({
        borderTop: '1px solid #CCC',
        display: 'flex',
        height: 'inherit',
        margin: '0 0 0 1em'
      })
      .appendTo(this.element('outer'));

    this.element('icon-outer', 'div')
      .properties({
        className: 'scola icon-outer'
      })
      .style({
        alignItems: 'center',
        borderTop: '1px solid #FFF',
        display: 'none',
        marginTop: '-1px',
        width: '2.25em'
      })
      .appendTo(this.element('inner'));

    this.element('icon', 'div')
      .properties({
        className: 'scola icon'
      })
      .style({
        color: 'rgb(0,122,255)',
        fontSize: '2em'
      })
      .appendTo(this.element('icon-outer'));

    this.element('label', 'div')
      .properties({
        className: 'scola label'
      })
      .style({
        display: 'flex',
        padding: '0 0.5em 0 0'
      })
      .appendTo(this.element('inner'));

    this.element('input-outer', 'div')
      .properties({
        className: 'scola input-outer'
      })
      .style({
        display: 'flex',
        flex: 1
      })
      .appendTo(this.element('inner'));

    this.element('input', 'input')
      .properties({
        className: 'scola input'
      })
      .style({
        background: 'none',
        border: 0,
        height: '100%',
        padding: '0 0.5em 0 0',
        width: '100%'
      })
      .appendTo(this.element('input-outer'));

    this.top(false);
  }

  render() {
    return this.element('outer');
  }

  top(top) {
    this.element('inner')

    .if(top)
      .style({
        borderTopColor: 'transparent'
      })

    .if(!top)
      .style({
        borderTopColor: '#DDD'
      });

    return this;
  }
}

module.exports = PanelItemInputView;

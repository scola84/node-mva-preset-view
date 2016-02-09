'use strict';

const View = require('@scola/view');

class PanelListInputView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola-panel-list-input'
      })
      .style({
        background: '#FFF',
        height: '3em',
        lineHeight: '3em'
      });

    this.element('inner', 'div')
      .style({
        borderTop: '1px solid #CCC',
        display: 'flex',
        margin: '0 0 0 1em'
      })
      .appendTo(this.element('outer'));

    this.element('label-icon-outer', 'div')
      .style({
        alignItems: 'center',
        borderTop: '1px solid #FFF',
        display: 'none',
        marginTop: '-1px',
        width: '2.25em'
      })
      .appendTo(this.element('inner'));

    this.element('label-icon', 'div')
      .style({
        color: 'rgb(0,122,255)',
        fontSize: '2em'
      })
      .appendTo(this.element('label-icon-outer'));

    this.element('label-text', 'div')
      .style({
        display: 'flex',
        width: '6em'
      })
      .appendTo(this.element('inner'));

    this.element('input-outer', 'div')
      .style({
        display: 'flex',
        flex: 1
      })
      .appendTo(this.element('inner'));

    this.element('input', 'input')
      .style({
        background: 'none',
        border: 0,
        height: '100%',
        padding: '0 0.5em',
        width: '100%'
      })
      .appendTo(this.element('input-outer'));
  }

  top() {
    this.element('inner')
      .style({
        borderTopColor: 'transparent'
      });

    return this;
  }

  render() {
    return this.element('outer');
  }
}

module.exports = PanelListInputView;

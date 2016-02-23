'use strict';

const View = require('@scola/view');

class PanelButtonView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola button'
      })
      .style({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        height: '3em',
        maxWidth: '33%',
        position: 'absolute',
        top: 0
      });

    this.element('icon', 'div')
      .properties({
        className: 'scola icon'
      })
      .style({
        display: 'none',
        fontSize: '2em',
        paddingRight: '0.25em'
      })
      .appendTo(this.element('outer'));

    this.element('text', 'div')
      .properties({
        className: 'scola text'
      })
      .style({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      })
      .appendTo(this.element('outer'));
  }

  render() {
    return this.element('outer');
  }
}

module.exports = PanelButtonView;

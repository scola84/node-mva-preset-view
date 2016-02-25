'use strict';

const View = require('@scola/view');

class TabButtonInlineView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola tab'
      })
      .style({
        alignItems: 'center',
        borderLeftColor: 'inherit',
        borderLeftStyle: 'solid',
        borderLeftWidth: '1px',
        color: 'inherit',
        cursor: 'pointer',
        display: 'flex',
        flex: '1 1 0',
        justifyContent: 'center'
      })
      .if(this.capability('hairline'))
      .style({
        borderWidth: '0.5px'
      });

    this.element('label', 'div')
      .properties({
        className: 'scola label'
      })
      .style({
        fontSize: '0.9em'
      })
      .appendTo(this.element('outer'));
  }

  render() {
    return this.element('outer');
  }
}

module.exports = TabButtonInlineView;

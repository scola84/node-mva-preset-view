'use strict';

const PanelItemView = require('./item');

class PanelItemInputView extends PanelItemView {
  build() {
    super.build();

    this.element('outer')
      .properties({
        className: 'scola item input'
      });

    this.element('icon-outer', 'div')
      .properties({
        className: 'scola icon-outer'
      })
      .style({
        alignItems: 'center',
        borderTop: '1px solid transparent',
        display: 'none',
        width: '2.25em'
      })
      .appendTo(this.element('inner'));

    this.element('icon', 'div')
      .properties({
        className: 'scola icon'
      })
      .style({
        fontSize: '2em'
      })
      .appendTo(this.element('icon-outer'));

    this.element('label', 'div')
      .properties({
        className: 'scola label'
      })
      .style({
        borderTop: '1px solid #CCC',
        display: 'flex',
        padding: '0 0.5em 0 0'
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      })
      .appendTo(this.element('inner'));

    this.element('input-outer', 'div')
      .properties({
        className: 'scola input-outer'
      })
      .style({
        borderTop: '1px solid #CCC',
        display: 'flex',
        flex: 1
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      })
      .appendTo(this.element('inner'));

    this.element('input', 'input')
      .properties({
        className: 'scola input'
      })
      .style({
        background: 'none',
        border: 0,
        padding: '0 0.5em 0 0',
        width: '100%'
      })
      .appendTo(this.element('input-outer'));

    this.top(false);
  }

  top(top) {
    this.element('label')
      .if(top)
      .style({
        borderTopStyle: 'none'
      })
      .if(!top)
      .style({
        borderTopStyle: 'solid'
      });

    this.element('input-outer')
      .if(top)
      .style({
        borderTopStyle: 'none'
      })
      .if(!top)
      .style({
        borderTopStyle: 'solid'
      });

    return this;
  }
}

module.exports = PanelItemInputView;

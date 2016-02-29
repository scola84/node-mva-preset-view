'use strict';

const ListItemView = require('./item');

class ListItemPlainView extends ListItemView {
  build() {
    super.build();

    this.element('outer')
      .properties({
        className: 'scola item plain'
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
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
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

    this.element('label-left', 'div')
      .properties({
        className: 'scola label-left'
      })
      .style({
        borderTop: '1px solid #CCC',
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      })
      .appendTo(this.element('inner'));

    this.element('padding-center', 'div')
      .properties({
        className: 'scola padding'
      })
      .style({
        borderTop: '1px solid #CCC',
        width: '1em'
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      })
      .appendTo(this.element('inner'));

    this.element('label-right', 'div')
      .properties({
        className: 'scola label-right'
      })
      .style({
        borderTop: '1px solid #CCC',
        color: '#AAA',
        display: 'flex'
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      })
      .appendTo(this.element('inner'));

    this.element('padding-right', 'div')
      .properties({
        className: 'scola padding'
      })
      .style({
        borderTop: '1px solid #CCC',
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

  top(top) {
    const ids = [
      'label-left',
      'label-right',
      'padding-center',
      'padding-right'
    ];

    ids.forEach((id) => {
      this.element(id)
        .if(top)
        .style({
          borderTopStyle: 'none'
        })
        .if(!top)
        .style({
          borderTopStyle: 'solid'
        });
    });

    return this;
  }
}

module.exports = ListItemPlainView;

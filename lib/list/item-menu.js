'use strict';

const ListItemPlainView = require('./item-plain');

class ListItemMenuView extends ListItemPlainView {
  build() {
    super.build();

    this.element('outer')
      .properties({
        className: 'scola item menu'
      })
      .style({
        cursor: 'pointer'
      });

    this.element('icon-forward-outer', 'div')
      .properties({
        className: 'scola icon forward-outer'
      })
      .style({
        alignItems: 'center',
        borderTop: '1px solid #CCC',
        display: 'flex',
        width: '1.5em'
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      })
      .appendTo(this.element('inner'));

    this.element('icon-forward', 'div')
      .properties({
        className: 'scola icon-forward ion-ios-arrow-forward'
      })
      .style({
        color: '#BBB',
        fontSize: '1.5em'
      })
      .appendTo(this.element('icon-forward-outer'));
  }

  top(top) {
    super.top(top);

    this.element('icon-forward-outer')
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

module.exports = ListItemMenuView;

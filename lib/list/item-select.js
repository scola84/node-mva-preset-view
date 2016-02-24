'use strict';

const ListItemPlainView = require('./item-plain');

class ListItemSelectView extends ListItemPlainView {
  constructor() {
    super();
    this.selected = false;
  }

  build() {
    super.build();

    this.element('outer')
      .properties({
        className: 'scola item select'
      })
      .style({
        cursor: 'pointer'
      })
      .listen({
        select: this.handleSelect,
        click: this.handleClick
      }, this);

    this.element('icon-checkmark-outer', 'div')
      .properties({
        className: 'scola icon-outer'
      })
      .style({
        alignItems: 'center',
        borderTop: '1px solid #CCC',
        display: 'none',
        width: '1.5em'
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      })
      .appendTo(this.element('inner'));

    this.element('icon-checkmark', 'div')
      .properties({
        className: 'scola icon'
      })
      .style({
        fontSize: '2em'
      })
      .properties({
        className: 'ion-ios-checkmark-empty'
      })
      .appendTo(this.element('icon-checkmark-outer'));
  }

  top(top) {
    super.top(top);

    this.element('icon-checkmark-outer')
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

  select(selected) {
    this.selected = selected;

    this.element('outer').emit('select', {
      view: this,
      selected
    });

    return this;
  }

  handleClick() {
    if (this.selected) {
      return;
    }

    this.select(true);
  }

  handleSelect(element, event) {
    this.element('icon-checkmark-outer')

    .if(event.details.selected)
      .style({
        display: 'flex'
      })

    .if(!event.details.selected)
      .style({
        display: 'none'
      });
  }

}

module.exports = ListItemSelectView;

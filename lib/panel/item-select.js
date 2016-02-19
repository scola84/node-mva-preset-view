'use strict';

const PanelItemView = require('./item');

class PanelItemSelectView extends PanelItemView {
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

    this.element('label', 'div')
      .properties({
        className: 'scola label'
      })
      .style({
        borderTopColor: '#DDD',
        borderTopWidth: '1px',
        display: 'flex',
        flex: 1
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      })
      .appendTo(this.element('inner'));

    this.element('icon-outer', 'div')
      .properties({
        className: 'scola icon-outer'
      })
      .style({
        alignItems: 'center',
        borderTopColor: '#DDD',
        borderTopWidth: '1px',
        display: 'none',
        justifyContent: 'center',
        width: '2em'
      })
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
      .properties({
        className: 'ion-ios-checkmark-empty'
      })
      .appendTo(this.element('icon-outer'));

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

    this.element('icon-outer')
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
    this.element('icon-outer')

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

module.exports = PanelItemSelectView;

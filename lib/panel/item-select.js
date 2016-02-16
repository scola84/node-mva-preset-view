'use strict';

const View = require('@scola/view');

class PanelItemSelectView extends View.Abstract {
  constructor() {
    super();
    this.selected = false;
  }

  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola item select'
      })
      .style({
        background: '#FFF',
        cursor: 'pointer',
        height: '3em',
        lineHeight: '3em'
      })
      .listen({
        select: this.handleSelect,
        click: this.handleClick
      }, this);

    this.element('inner', 'div')
      .properties({
        className: 'scola inner'
      })
      .style({
        borderTop: '1px solid',
        display: 'flex',
        margin: '0 0 0 1em'
      })
      .appendTo(this.element('outer'));

    this.element('label', 'div')
      .properties({
        className: 'scola label'
      })
      .style({
        display: 'flex',
        flex: 1
      })
      .appendTo(this.element('inner'));

    this.element('icon-outer', 'div')
      .properties({
        className: 'scola icon-outer'
      })
      .style({
        alignItems: 'center',
        display: 'none',
        justifyContent: 'center',
        width: '2em'
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

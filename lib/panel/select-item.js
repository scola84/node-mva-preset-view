'use strict';

const View = require('@scola/view');

class PanelSelectItemView extends View.Abstract {
  constructor() {
    super();
    this.isSelected = false;
  }

  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola-panel-select-item'
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
      });

    this.element('inner', 'div')
      .style({
        borderTop: '1px solid #CCC',
        display: 'flex',
        margin: '0 0 0 1em'
      })
      .appendTo(this.element('outer'));

    this.element('text', 'a')
      .style({
        display: 'flex',
        flex: 1
      })
      .appendTo(this.element('inner'));

    this.element('icon-outer', 'span')
      .style({
        alignItems: 'center',
        display: 'none',
        justifyContent: 'center',
        width: '2em'
      })
      .appendTo(this.element('inner'));

    this.element('icon', 'span')
      .style({
        fontSize: '2em'
      })
      .properties({
        className: 'ion-ios-checkmark-empty'
      })
      .appendTo(this.element('icon-outer'));
  }

  render() {
    return this.element('outer');
  }

  top() {
    this.element('inner')
      .style({
        borderTopColor: 'transparent'
      });

    return this;
  }

  select() {
    this.isSelected = true;

    this.element('outer').emit('select', {
      view: this,
      selected: true
    });

    return this;
  }

  deselect() {
    this.isSelected = false;

    this.element('outer').emit('select', {
      view: this,
      selected: false
    });

    return this;
  }

  handleClick() {
    if (this.isSelected) {
      return;
    }

    this.select();
  }

  handleSelect(element, event) {
    this.element('icon-outer')
      .style({
        display: event.details.selected ? 'flex' : 'none'
      });
  }

}

module.exports = PanelSelectItemView;

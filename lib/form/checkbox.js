'use strict';

const MVA = require('@scola/mva');

class CheckboxView extends MVA.View.Abstract {
  build() {
    this
      .element('checkbox', 'div')
      .style({
        float: 'left',
        width: '1.5em',
        height: '1.5em',
        border: '0.3em solid #FFF',
        background: '#FFF',
        cursor: 'pointer',
        textAlign: 'center',
        position: 'relative'
      })
      .listen({
        click: this.handleClick,
        check: this.handleCheck
      }, this);

    this
      .element('input', 'input')
      .properties({
        type: 'checkbox'
      })
      .style({
        left: 0,
        opacity: 0,
        position: 'absolute',
        top: 0
      })
      .listen({
        click: this.handleClick
      }, this);

    this
      .element('checkbox')
      .append(
        this.element('input')
      );

    return this;
  }

  render() {
    return this.element('checkbox');
  }

  checked() {
    return this.element('input').get().checked;
  }

  handleClick() {
    const element = this.element('input').get();
    element.checked = !element.checked;

    this.element('checkbox').emit('check', {
      view: this,
      checked: element.checked
    });
  }

  handleCheck(event) {
    event
      .view
      .element('checkbox')
      .style({
        background: event.checked ? '#000' : '#FFF'
      });
  }
}

module.exports = CheckboxView;

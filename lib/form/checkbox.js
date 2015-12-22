'use strict';

const MVA = require('@scola/mva');

class CheckboxView extends MVA.View.Abstract {
  constructor() {
    super();
    this.checked = false;
    this.customStyling = false;
  }

  build() {
    this
      .element('checkbox', 'span')
      .style({
        float: 'left',
        width: '1.5em',
        height: '1.5em',
        border: '0.3em solid #FFF',
        background: '#FFF',
        cursor: 'pointer',
        textAlign: 'center'
      })
      .listen({
        'click': this.handleClick,
        'check': this.handleCheck
      }, this);

    return this;
  }

  render() {
    return this.element('checkbox');
  }

  isChecked() {
    return this.checked;
  }

  setChecked(checked) {
    this.checked = checked;

    this.element('checkbox').emit('check', {
      view: this,
      checked
    });

    return this;
  }

  handleClick() {
    this.setChecked(!Boolean(this.checked));
  }

  handleCheck(event) {
    console.log(event);
    
    event.view
      .element('checkbox')
      .style({
        background: event.checked ? '#000' : '#FFF'
      });
  }
}

module.exports = CheckboxView;

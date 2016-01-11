'use strict';

const MVA = require('@scola/mva');

class TextButtonView extends MVA.View.Abstract {
  constructor() {
    super();
    this.enabled = true;
  }

  build() {
    this
      .element('button', 'button')
      .style({
        background: '#FFF',
        border: 0,
        color: '#000',
        cursor: 'pointer',
        height: '2.5em',
        padding: '0 0.5em'
      })
      .listen({
        'enable': this.handleEnable
      }, this);

    return this;
  }

  render() {
    return this.element('button');
  }

  isEnabled() {
    return this.enabled;
  }

  enable(enabled) {
    this.enabled = enabled;

    this.element('button').emit('enable', {
      view: this,
      enabled
    });

    return this;
  }

  handleEnable(event) {
    event.view
      .element('button')
      .properties({
        disabled: event.enabled ? '' : 'disabled'
      });
  }
}

module.exports = TextButtonView;

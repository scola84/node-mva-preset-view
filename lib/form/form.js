'use strict';

const View = require('@scola/view');

class FormView extends View.Abstract {
  build() {
    this
      .element('form', 'form')
      .properties({
        method: 'POST'
      })
      .style({
        border: 0,
        margin: 0,
        padding: 0,
        position: 'relative'
      });

    this
      .element('fieldset', 'fieldset')
      .style({
        bottom: 0,
        border: 0,
        left: 0,
        margin: 0,
        padding: 0,
        position: 'absolute',
        right: 0,
        top: 0
      })
      .appendTo(
        this.element('form')
      );
  }

  render() {
    return this.element('form');
  }
}

module.exports = FormView;

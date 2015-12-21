'use strict';

const MVA = require('@scola/mva');

class FormView extends MVA.View.Abstract {
  build() {
    this
      .element('form', 'form')
      .style({
        border: 0,
        margin: 0,
        padding: 0,
        position: 'relative'
      });

    this.element('fieldset', 'fieldset')
      .style('absmax')
      .style({
        border: 0,
        margin: 0,
        padding: 0
      });

    this
      .element('form')
      .append(
        this.element('fieldset')
      );

    return this;
  }

  render() {
    return this.element('form');
  }
}

module.exports = FormView;

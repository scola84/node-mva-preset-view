'use strict';

const CheckboxView = require('./checkbox');

class CheckboxLabelView extends CheckboxView {
  build() {
    super.build();

    this
      .element('wrapper', 'div');

    this
      .element('label', 'a')
      .style({
        float: 'left',
        lineHeight: '1.5em',
        padding: '0 0.5em',
        color: '#AAA',
        cursor: 'pointer'
      })
      .listen({
        'click': this.handleClick
      }, this);

    this
      .element('wrapper')
      .append(
        this.element('checkbox')
      )
      .append(
        this.element('label')
      );

    return this;
  }

  render() {
    return this.element('wrapper');
  }
}

module.exports = CheckboxLabelView;

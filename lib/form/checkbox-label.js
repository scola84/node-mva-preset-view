'use strict';

const CheckboxView = require('./checkbox');

class CheckboxLabelView extends CheckboxView {
  build() {
    super.build();

    this
      .element('label', 'a')
      .style({
        color: '#AAA',
        cursor: 'pointer',
        position: 'absolute',
        left: '2em',
        lineHeight: '1.5em'
      })
      .listen({
        'click': this.handleClick
      }, this)
      .appendTo(
        this.element('wrapper')
      );
  }
}

module.exports = CheckboxLabelView;

'use strict';

const TextButtonView = require('./button-text');

class IconButtonView extends TextButtonView {
  build() {
    super.build();

    this
      .element('button')
      .style({
        padding: 0,
        width: '2em'
      });

    this
      .element('icon', 'span');

    this
      .element('button')
      .append(
        this.element('icon')
      );

    return this;
  }

  render() {
    return this.element('button');
  }
}

module.exports = IconButtonView;

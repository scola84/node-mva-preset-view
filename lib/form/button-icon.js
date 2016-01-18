'use strict';

const TextButtonView = require('./button-text');

class IconButtonView extends TextButtonView {
  build() {
    super.build();

    this
      .element('button')
      .style({
        padding: 0,
        width: '2.5em'
      });

    this
      .element('icon', 'span')
      .style({
        fontSize: '1.5em'
      });

    this
      .element('button')
      .append(
        this.element('icon')
      );
  }

  render() {
    return this.element('button');
  }
}

module.exports = IconButtonView;

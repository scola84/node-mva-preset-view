'use strict';

const PopOutView = require('./out');

class PopActionView extends PopOutView {
  build() {
    super.build();

    this.element('inner')
      .match('not all and (min-width: 23em)')
      .style({
        borderRadius: '1em',
        bottom: '0.5em',
        left: '0.5em',
        right: '0.5em',
        top: null
      });
  }
}

module.exports = PopActionView;

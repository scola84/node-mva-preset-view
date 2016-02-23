'use strict';

const PopOutView = require('./out');

class PopActionView extends PopOutView {
  build() {
    super.build();

    this.element('wrapper')
      .match('not all and (min-width: 23em)')
      .style({
        bottom: 0
      });

    this.element('inner')
      .match('not all and (min-width: 23em)')
      .style({
        bottom: '0.5em',
        left: '0.5em',
        right: '0.5em',
        borderRadius: '1em',
        width: 'auto'
      })
      .match('(min-width: 23em)')
      .style({
        width: '100%'
      });
  }
}

module.exports = PopActionView;

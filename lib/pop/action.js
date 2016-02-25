'use strict';

const PopOutView = require('./out');

class PopActionView extends PopOutView {
  constructor() {
    super();

    this.options({
      above: {
        height: '19em',
        width: '19em'
      },
      below: {
        bottom: '0.5em',
        height: '100%',
        width: '100%'
      },
      threshold: '20em'
    });
  }

  build() {
    super.build();

    this.element('outer')
      .properties({
        className: 'scola action'
      });

    this.element('buttons', 'div')
      .properties({
        className: 'scola buttons'
      })
      .style({
        position: 'absolute',
        left: '0.5em',
        right: '0.5em',
        bottom: 0,
        borderRadius: '1em',
        overflow: 'hidden'
      })
      .appendTo(this.element('inner'));
  }
}

module.exports = PopActionView;

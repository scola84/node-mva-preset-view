'use strict';

const PopOutView = require('./out');

class PopActionView extends PopOutView {
  build() {
    super.build();

    this.element('outer')
      .properties({
        className: 'scola action'
      });

    this.element('inner')
      .style({
        background: 'none'
      });

    this.element('buttons', 'div')
      .properties({
        className: 'scola buttons'
      })
      .style({
        background: '#FFF',
        borderRadius: 'inherit',
        height: '100%',
        left: '0.5em',
        overflow: 'hidden',
        position: 'absolute',
        right: '0.5em'
      })
      .appendTo(this.element('inner'));
  }
}

module.exports = PopActionView;

'use strict';

const PopOutView = require('./out');

class PopActionView extends PopOutView {
  build() {
    super.build();

    this.options({
      '@scola.pop.action.mobile.match': 'not all and (min-width: 20em)',
      '@scola.pop.action.mobile.style': {
        bottom: '0.5em',
        height: '100%',
        width: '100%'
      },
      '@scola.pop.action.desktop.match': '(min-width: 20em)',
      '@scola.pop.action.desktop.style': {
        height: '19em',
        width: '19em'
      }
    }, true);

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
        borderRadius: '1em',
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

'use strict';

const MVA = require('@scola/mva');

class SpinnerView extends MVA.View.Abstract {
  build() {
    this
    .element('spinner', 'div')
    .style({
      background: '#FFF',
      borderBottom: '0.1em solid #000',
      borderLeft: '0.1em solid #000',
      borderRight: '0.1em solid #FFF',
      borderTop: '0.1 em solid #000',
      borderRadius: '50%',
      display: 'inline-block',
      height: '1em',
      width: '1em'
    })
    .animate({
      duration: 500,
      ease: 'Linear.easeNone',
      repeat: -1,
      rotationZ : '360deg'
    });

    return this;
  }

  render() {
    return this.play().element('spinner');
  }
}

module.exports = SpinnerView;

'use strict';

const MVA = require('@scola/mva');

class SpinnerView extends MVA.View.Abstract {
  build() {
    this
    .element('spinner', 'div')
    .style({
      borderBottom: '0.15em solid #000',
      borderLeft: '0.15em solid #000',
      borderRight: '0.15em solid transparent',
      borderTop: '0.15em solid #000',
      borderRadius: '50%',
      display: 'inline-block',
      height: '1.5em',
      width: '1.5em'
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

'use strict';

const MVA = require('@scola/mva');

class PopupView extends MVA.View.Abstract {
  build() {
    this.element('wrapper', 'div')
      .style({
        background: '#FFF',
        borderRadius: '1em',
        opacity: 0,
        position: 'absolute',
        width: '20em',
        left: '50%',
        marginLeft: '-10em',
        top: '50%',
        overflow: 'hidden'
      })
      .animate({
        opacity: 1
      });

    this.element('body', 'div')
      .style({
        float: 'left',
        width: '100%',
        padding: '1em',
        textAlign: 'center'
      });

    this.element('title', 'span')
      .style({
        fontSize: '1.2em',
        float: 'left',
        fontWeight: 'bold',
        width: '100%',
        padding: '0 0 0.5em'
      });

    this.element('text', 'span')
      .style({
        float: 'left',
        width: '100%',
        lineHeight: '1.5em'
      });

    this
      .element('wrapper')
      .append(
        this.element('body')
      );

    this
      .element('body')
      .append(
        this.element('title')
      )
      .append(
        this.element('text')
      );
  }

  render() {
    return this.play().element('wrapper');
  }

  center() {
    this
      .element('wrapper')
      .style({
        marginTop: (-1 / 2 * this.element('wrapper').get().offsetHeight) + 'px'
      });

    return this;
  }

  destroy() {
    this
      .element('wrapper')
      .animate({
        opacity: 0,
        play: true,
        onComplete: () => {
          super.destroy();
        }
      });
  }
}

module.exports = PopupView;

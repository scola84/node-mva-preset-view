'use strict';

const View = require('@scola/view');

class PopOverView extends View.Abstract {
  build() {
    this.options({
      '@scola.pop.over.mobile.match': 'not all and (min-width: 21em)',
      '@scola.pop.over.mobile.style': {
        borderRadius: 0,
        height: '100%',
        width: '100%'
      },
      '@scola.pop.over.desktop.match': '(min-width: 21em)',
      '@scola.pop.over.desktop.style': {
        borderRadius: '1em',
        height: '39em',
        width: '34em'
      }
    }, true);

    this.element('outer', 'div')
      .properties({
        className: 'scola over'
      })
      .style({
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.5)',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        left: 0,
        opacity: 0,
        position: 'fixed',
        right: 0,
        top: 0
      })
      .animate({
        opacity: 1
      });

    this.element('inner', 'div')
      .properties({
        className: 'scola inner'
      })
      .style({
        background: '#FFF',
        overflow: 'hidden',
        position: 'relative',
        transform: 'scale(1)'
      })
      .listen({
        click: this.handleClick
      }, this)
      .appendTo(this.element('outer'));
  }

  render() {
    const element = this
      .play()
      .element('outer');

    this.view(null, '@scola.pop.container')
      .append(element);

    return this;
  }

  destroy() {
    this
      .element('outer')
      .animate({
        opacity: 0,
        play: true,
        onComplete: () => {
          this.view(null, '@scola.pop.container')
            .remove(this.element('outer'));
          super.destroy();
        }
      });
  }

  handleClick(element, event) {
    event.stopPropagation();
  }
}

module.exports = PopOverView;

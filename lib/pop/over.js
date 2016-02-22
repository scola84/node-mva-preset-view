'use strict';

const View = require('@scola/view');

class PopOverView extends View.Abstract {
  build() {
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
        position: 'relative',
        overflow: 'hidden'
      })
      .match('not all and (min-width: 23em)')
      .style({
        height: '100%',
        width: '100%'
      })
      .match('(min-width: 23em)')
      .style({
        borderRadius: '1em',
        height: '20em',
        transform: 'scale(1)',
        width: '20em'
      })
      .listen({
        click: this.handleClick
      }, this)
      .appendTo(this.element('outer'));

    this.view(null, '@scola.pop.container')
      .append(this);
  }

  render() {
    return this.play().element('outer');
  }

  destroy() {
    this
      .element('outer')
      .animate({
        opacity: 0,
        play: true,
        onComplete: () => {
          this.view(null, '@scola.pop.container')
            .remove(this);

          super.destroy();
        }
      });
  }

  handleClick(element, event) {
    event.stopPropagation();
  }
}

module.exports = PopOverView;

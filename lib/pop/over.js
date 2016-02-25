'use strict';

const View = require('@scola/view');

class PopOverView extends View.Abstract {
  constructor() {
    super();

    this.options({
      above: {
        borderRadius: '1em',
        height: '39em',
        width: '34em'
      },
      below: {
        borderRadius: 0,
        height: '100%',
        width: '100%'
      },
      threshold: '35em'
    });
  }

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
        overflow: 'hidden',
        position: 'relative',
        transform: 'scale(1)'
      })
      .listen({
        click: this.handleClick
      }, this)
      .appendTo(this.element('outer'));
  }

  setDimensions() {
    const threshold = this.getOption('threshold');

    this.element('inner')
      .match('not all and (min-width: ' + threshold + ')')
      .style(() => {
        return this
          .getOption('below');
      })
      .match('(min-width: ' + threshold + ')')
      .style(() => {
        return this
          .getOption('above');
      });

    return this;
  }

  render() {
    const element = this
      .setDimensions()
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

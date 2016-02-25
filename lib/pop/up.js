'use strict';

const View = require('@scola/view');

class PopUpView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola up'
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
        borderRadius: '1em',
        overflow: 'hidden',
        width: '17em'
      })
      .listen({
        click: this.handleClick
      }, this)
      .appendTo(this.element('outer'));

    this.element('body', 'div')
      .properties({
        className: 'scola body'
      })
      .style({
        float: 'left',
        padding: '1em',
        textAlign: 'center',
        width: '100%'
      })
      .appendTo(this.element('inner'));

    this.element('title', 'div')
      .properties({
        className: 'scola title'
      })
      .style({
        float: 'left',
        fontSize: '1.2em',
        fontWeight: 'bold',
        padding: '0 0 0.5em',
        width: '100%'
      })
      .appendTo(this.element('body'));

    this.element('text', 'div')
      .properties({
        className: 'scola text'
      })
      .style({
        float: 'left',
        lineHeight: '1.5em',
        width: '100%'
      })
      .appendTo(this.element('body'));

    this.element('buttons', 'div')
      .properties({
        className: 'scola buttons'
      })
      .style({
        display: 'flex',
        float: 'left',
        width: '100%'
      })
      .appendTo(this.element('inner'));

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

module.exports = PopUpView;

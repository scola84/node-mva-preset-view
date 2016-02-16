'use strict';

const View = require('@scola/view');

class PopupView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola popup'
      })
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
      .properties({
        className: 'scola body'
      })
      .style({
        float: 'left',
        width: '100%',
        padding: '1em',
        textAlign: 'center'
      })
      .appendTo(this.element('outer'));

    this.element('title', 'div')
      .properties({
        className: 'scola title'
      })
      .style({
        fontSize: '1.2em',
        float: 'left',
        fontWeight: 'bold',
        width: '100%',
        padding: '0 0 0.5em'
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
          super.destroy();
        }
      });
  }
}

module.exports = PopupView;

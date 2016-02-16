'use strict';

const View = require('@scola/view');

class ToolTipView extends View.Abstract {
  constructor() {
    super();
    this.timeout = null;
  }

  build() {
    this
      .element('outer', 'div')
      .properties({
        className: 'scola tooltip'
      })
      .style({
        height: '100%',
        opacity: 0,
        position: 'absolute',
        width: '100%',
        zIndex: 2
      })
      .animate({
        opacity: 1
      });

    this
      .element('inner', 'div')
      .properties({
        className: 'scola inner'
      })
      .style({
        position: 'relative'
      })
      .appendTo(this.element('outer'));

    this
      .element('triangle', 'div')
      .properties({
        className: 'scola triangle'
      })
      .style({
        borderColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: '0.5em',
        height: 0,
        position: 'absolute',
        width: 0,
        zIndex: 2
      })
      .appendTo(this.element('inner'));

    this
      .element('text', 'div')
      .properties({
        className: 'scola text'
      })
      .style({
        background: '#F00',
        boxShadow: '0 0 0.5em #AAA',
        color: '#FFF',
        display: 'table',
        height: '2em',
        lineHeight: '2em',
        maxWidth: '100%',
        padding: '0 0.33em',
        position: 'absolute',
        whiteSpace: 'nowrap'
      })
      .appendTo(this.element('inner'));

    this.addHandlers();
  }

  render() {
    return this
      .play()
      .element('outer');
  }

  destroy(immediate) {
    this.removeHandlers();

    if (immediate === true) {
      return super.destroy();
    }

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

  addHandlers() {
    if (!this.timeout) {
      this.bindListener('click', this.window.document, this.destroy);
      this.timeout = setTimeout(this.destroy.bind(this), 3000);
    }
  }

  removeHandlers() {
    if (this.timeout) {
      this.unbindListener('click', this.window.document, this.destroy);
      clearTimeout(this.timeout);
    }
  }

  center() {
    const width = this.element('text').get().offsetWidth;

    this
      .element('tooltip')
      .style({
        left: '50%',
        marginLeft: (-width / 2) + 'px',
        width
      })
      .element('triangle')
      .style({
        left: '50%',
        marginLeft: '-0.5em'
      });

    return this;
  }

  middle() {
    const height = this.element('text').get().offsetHeight;

    this
      .element('tooltip')
      .style({
        top: '50%',
        marginTop: (-height / 2) + 'px',
        height
      })
      .element('triangle')
      .style({
        top: '50%',
        marginTop: '-0.5em'
      });

    return this;
  }

  bottom() {
    this
      .element('outer')
      .style({
        top: '100%'
      })
      .element('triangle')
      .style({
        borderBottomColor: this.element('text').get().style.backgroundColor,
        borderTopWidth: 0,
        left: '0.5em',
        top: 0
      })
      .element('text')
      .style({
        left: 0,
        top: '0.5em'
      });

    return this;
  }

  left() {
    this
      .element('outer')
      .style({
        right: '100%',
        top: '0'
      })
      .element('triangle')
      .style({
        borderLeftColor: this.element('text').get().style.backgroundColor,
        borderRightWidth: 0,
        right: 0,
        top: '0.5em'
      })
      .element('text')
      .style({
        right: '0.5em',
        top: 0
      });

    return this;
  }

  right() {
    this
      .element('outer')
      .style({
        left: '100%',
        top: '0'
      })
      .element('triangle')
      .style({
        borderLeftWidth: 0,
        borderRightColor: this.element('text').get().style.backgroundColor,
        left: 0,
        top: '0.5em'
      })
      .element('text')
      .style({
        left: '0.5em',
        top: 0
      });

    return this;
  }

  top() {
    this
      .element('outer')
      .style({
        top: '-2.5em'
      })
      .element('triangle')
      .style({
        borderBottomWidth: 0,
        borderTopColor: this.element('text').get().style.backgroundColor,
        left: '0.5em',
        top: '2em'
      })
      .element('text')
      .style({
        left: 0,
        top: 0
      });

    return this;
  }
}

module.exports = ToolTipView;

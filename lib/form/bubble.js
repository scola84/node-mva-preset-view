'use strict';

const MVA = require('@scola/mva');

class BubbleView extends MVA.View.Abstract {
  build() {
    this
      .element('wrapper', 'div')
      .style({
        position: 'absolute',
        zIndex: 2
      });

    this
      .element('triangle', 'div')
      .style({
        borderColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: '0.5em',
        height: 0,
        position: 'absolute',
        width: 0,
        zIndex: 2
      });

    this
      .element('text', 'div')
      .style({
        background: '#F00',
        boxShadow: '0 0 0.5em #AAA',
        color: '#FFF',
        display: 'table',
        height: '2em',
        lineHeight: '2em',
        maxWidth: '100%',
        overflow: 'hidden',
        padding: '0 0.33em',
        position: 'absolute',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      });

    this
      .element('wrapper')
      .append(
        this.element('triangle')
      )
      .append(
        this.element('text')
      );

    return this;
  }

  setPosition(position) {
    switch (position) {
      case 'bottom':
        this.setPositionBottom();
        break;
      case 'left':
        this.setPositionLeft();
        break;
      case 'right':
        this.setPositionRight();
        break;
      case 'top':
        this.setPositionTop();
        break;
    }

    return this;
  }

  setPositionBottom() {
    this
      .element('wrapper')
      .style({
        width: '100%',
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
  }

  setPositionLeft() {
    this
      .element('wrapper')
      .style({
        right: '100%',
        top: '0',
        width: '100%'
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
  }

  setPositionRight() {
    this
      .element('wrapper')
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
  }

  setPositionTop() {
    this
      .element('wrapper')
      .style({
        width: '100%',
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
  }

  render() {
    return this.element('wrapper');
  }
}

module.exports = BubbleView;

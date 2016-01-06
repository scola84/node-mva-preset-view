'use strict';

const MVA = require('@scola/mva');

class BubbleView extends MVA.View.Abstract {
  build() {
    this
      .element('wrapper', 'div')
      .style({
        position: 'absolute',
        width: '100%',
        zIndex: 2
      });

    this
      .element('triangle', 'div')
      .style({
        position: 'absolute',
        top: 0,
        left: '0.5em',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 0.5em 0.5em 0.5em',
        borderColor: 'transparent transparent #F00 transparent',
        zIndex: 2
      });

    this
      .element('text', 'div')
      .style({
        position: 'absolute',
        left: 0,
        top: '0.5em',
        height: '2em',
        background: '#F00',
        color: '#FFF',
        padding: '0 0.33em',
        lineHeight: '2em',
        boxShadow: '0 0 0.5em #AAA',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        maxWidth: '100%'
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

  render() {
    return this.element('wrapper');
  }
}

module.exports = BubbleView;

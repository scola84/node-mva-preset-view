'use strict';

const View = require('@scola/view');

class PanelView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola-panel'
      })
      .style({
        background: '#EEE',
        borderLeft: '1px solid #AAA',
        bottom: 0,
        left: 0,
        marginLeft: '-1px',
        position: 'absolute',
        right: 0,
        top: 0
      });

    this.element('header', 'div')
      .style({
        background: '#FAFAFA',
        borderBottom: '1px solid #CCC',
        lineHeight: '3em',
        position: 'absolute',
        height: '3em',
        left: 0,
        right: 0,
        top: 0
      })
      .appendTo(this.element('outer'));

    this.element('title', 'div')
      .style({
        bottom: 0,
        fontWeight: 'bold',
        left: 0,
        position: 'absolute',
        right: 0,
        textAlign: 'center',
        top: 0
      })
      .appendTo(this.element('header'));

    this.element('button-left', 'div')
      .style({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        left: '0.5em',
        position: 'absolute',
        top: 0
      })
      .appendTo(this.element('header'));

    this.element('button-left-icon', 'div')
      .style({
        display: 'none',
        fontSize: '2em',
        paddingRight: '0.2em'
      })
      .appendTo(this.element('button-left'));

    this.element('button-left-text', 'div')
      .appendTo(this.element('button-left'));

    this.element('button-right', 'div')
      .style({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'none',
        right: '0.5em',
        position: 'absolute',
        top: 0
      })
      .appendTo(this.element('header'));

    this.element('button-right-text', 'div')
      .appendTo(this.element('button-right'));

    this.element('button-right-icon', 'div')
      .style({
        display: 'none',
        fontSize: '2em',
        paddingLeft: '0.2em'
      })
      .appendTo(this.element('button-right'));

    this.element('body', 'div')
      .properties({
        className: 'scola-panel-body'
      })
      .style({
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: '3em',
        overflowX: 'hidden',
        overflowY: 'auto',
        webkitOverflowScrolling: 'touch'
      })
      .appendTo(this.element('outer'));
  }

  render() {
    return this.element('outer');
  }
}

module.exports = PanelView;

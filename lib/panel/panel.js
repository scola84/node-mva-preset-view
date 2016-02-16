'use strict';

const View = require('@scola/view');

class PanelView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola panel'
      })
      .style({
        background: '#EEE',
        borderLeft: '1px solid #AAA',
        height: '100%',
        left: 0,
        marginLeft: '-1px',
        position: 'absolute',
        right: 0
      });

    this.element('header', 'div')
      .properties({
        className: 'scola header'
      })
      .style({
        background: '#FAFAFA',
        borderBottom: '1px solid #CCC',
        height: '3em',
        lineHeight: '3em',
        position: 'absolute',
        width: '100%'
      })
      .appendTo(this.element('outer'));

    this.element('title', 'div')
      .properties({
        className: 'scola title'
      })
      .style({
        height: '100%',
        fontWeight: 'bold',
        position: 'absolute',
        textAlign: 'center',
        width: '100%'
      })
      .appendTo(this.element('header'));

    this.element('button-left', 'div')
      .properties({
        className: 'scola button left'
      })
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
      .properties({
        className: 'scola button left icon'
      })
      .style({
        display: 'none',
        fontSize: '2em',
        paddingRight: '0.2em'
      })
      .appendTo(this.element('button-left'));

    this.element('button-left-label', 'div')
      .properties({
        className: 'scola button left label'
      })
      .appendTo(this.element('button-left'));

    this.element('button-right', 'div')
      .properties({
        className: 'scola button right'
      })
      .style({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'none',
        right: '0.5em',
        position: 'absolute',
        top: 0
      })
      .appendTo(this.element('header'));

    this.element('button-right-label', 'div')
      .properties({
        className: 'scola button right label'
      })
      .appendTo(this.element('button-right'));

    this.element('button-right-icon', 'div')
      .properties({
        className: 'scola button right icon'
      })
      .style({
        display: 'none',
        fontSize: '2em',
        paddingLeft: '0.2em'
      })
      .appendTo(this.element('button-right'));

    this.element('body', 'div')
      .properties({
        className: 'scola body'
      })
      .style({
        bottom: 0,
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'absolute',
        top: '3em',
        webkitOverflowScrolling: 'touch',
        width: '100%'
      })
      .appendTo(this.element('outer'));
  }

  render() {
    return this.element('outer');
  }
}

module.exports = PanelView;

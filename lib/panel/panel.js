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
        borderLeft: '1px solid #CCC',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        left: 0,
        marginLeft: '-1px',
        position: 'absolute',
        right: 0
      });

    this.buildHeader();

    this.element('body', 'div')
      .properties({
        className: 'scola body'
      })
      .style({
        flexGrow: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        top: '3em',
        webkitOverflowScrolling: 'touch',
        width: '100%'
      })
      .appendTo(this.element('outer'));

    this.buildFooter();
  }

  buildHeader() {
    this.element('header', 'div')
      .properties({
        className: 'scola header'
      })
      .style({
        background: '#FAFAFA',
        borderBottom: '1px solid #CCC',
        lineHeight: '3em',
        minHeight: '3em',
        width: '100%'
      })
      .if(this.capability('hairline'))
      .style({
        borderBottomWidth: '0.5px'
      })
      .appendTo(this.element('outer'));

    this.element('header-title', 'div')
      .properties({
        className: 'scola title'
      })
      .style({
        height: '3em',
        fontWeight: 'bold',
        position: 'absolute',
        textAlign: 'center',
        width: '100%'
      })
      .appendTo(this.element('header'));

    this.element('header-button-left', 'div')
      .properties({
        className: 'scola button left'
      })
      .style({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        height: '3em',
        left: '0.5em',
        position: 'absolute',
        top: 0
      })
      .appendTo(this.element('header'));

    this.element('header-button-left-icon', 'div')
      .properties({
        className: 'scola button left icon'
      })
      .style({
        display: 'none',
        fontSize: '2em',
        paddingRight: '0.2em'
      })
      .appendTo(this.element('header-button-left'));

    this.element('header-button-left-label', 'div')
      .properties({
        className: 'scola button left label'
      })
      .appendTo(this.element('header-button-left'));

    this.element('header-button-right', 'div')
      .properties({
        className: 'scola button right'
      })
      .style({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'none',
        height: '3em',
        right: '0.5em',
        position: 'absolute',
        top: 0
      })
      .appendTo(this.element('header'));

    this.element('header-button-right-label', 'div')
      .properties({
        className: 'scola button right label'
      })
      .appendTo(this.element('header-button-right'));

    this.element('header-button-right-icon', 'div')
      .properties({
        className: 'scola button right icon'
      })
      .style({
        display: 'none',
        fontSize: '2em',
        paddingLeft: '0.2em'
      })
      .appendTo(this.element('header-button-right'));
  }

  buildFooter() {
    this.element('footer', 'div')
      .properties({
        className: 'scola footer'
      })
      .style({
        background: '#FAFAFA',
        borderTop: '1px solid #CCC',
        display: 'none',
        lineHeight: '3em',
        minHeight: '3em',
        width: '100%'
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      })
      .appendTo(this.element('outer'));

    this.element('footer-title', 'div')
      .properties({
        className: 'scola title'
      })
      .style({
        fontWeight: 'bold',
        height: '3em',
        position: 'absolute',
        textAlign: 'center',
        width: '100%'
      })
      .appendTo(this.element('footer'));

    this.element('footer-button-left', 'div')
      .properties({
        className: 'scola button left'
      })
      .style({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'flex',
        height: '3em',
        left: '0.5em',
        position: 'absolute',
        top: 0
      })
      .appendTo(this.element('footer'));

    this.element('footer-button-left-icon', 'div')
      .properties({
        className: 'scola button left icon'
      })
      .style({
        display: 'none',
        fontSize: '2em',
        paddingRight: '0.2em'
      })
      .appendTo(this.element('footer-button-left'));

    this.element('footer-button-left-label', 'div')
      .properties({
        className: 'scola button left label'
      })
      .appendTo(this.element('footer-button-left'));

    this.element('footer-button-right', 'div')
      .properties({
        className: 'scola button right'
      })
      .style({
        alignItems: 'center',
        cursor: 'pointer',
        display: 'none',
        height: '3em',
        position: 'absolute',
        right: '0.5em',
        top: 0
      })
      .appendTo(this.element('footer'));

    this.element('footer-button-right-label', 'div')
      .properties({
        className: 'scola button right label'
      })
      .appendTo(this.element('footer-button-right'));

    this.element('footer-button-right-icon', 'div')
      .properties({
        className: 'scola button right icon'
      })
      .style({
        display: 'none',
        fontSize: '2em',
        paddingLeft: '0.2em'
      })
      .appendTo(this.element('footer-button-right'));
  }

  render() {
    return this.element('outer');
  }
}

module.exports = PanelView;

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
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        left: 0,
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
        height: '3em',
        lineHeight: '3em',
        position: 'relative',
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
        height: '3em',
        lineHeight: '3em',
        position: 'relative',
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
  }

  render() {
    return this.element('outer');
  }
}

module.exports = PanelView;

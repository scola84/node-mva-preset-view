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
        boxShadow: '0 0 1em #CCC',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
        width: '100%'
      });

    this.element('header', 'div')
      .properties({
        className: 'scola header'
      })
      .style({
        background: '#FAFAFA',
        borderBottom: '1px solid #CCC',
        display: 'flex',
        height: '3em',
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
        fontWeight: 'bold',
        lineHeight: '3em',
        order: 2,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '40%',
        textAlign: 'center',
        textOverflow: 'ellipsis'
      })
      .appendTo(this.element('header'));

    this.element('body', 'div')
      .properties({
        className: 'scola body'
      })
      .style({
        flexGrow: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'relative',
        webkitOverflowScrolling: 'touch',
        width: '100%'
      })
      .appendTo(this.element('outer'));

    this.element('footer', 'div')
      .properties({
        className: 'scola footer'
      })
      .style({
        background: '#FAFAFA',
        borderTop: '1px solid #CCC',
        display: 'none',
        height: '3em',
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
        lineHeight: '3em',
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

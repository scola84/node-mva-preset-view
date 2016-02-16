'use strict';

const View = require('@scola/view');

class PanelItemMenuView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola item menu'
      })
      .style({
        background: '#FFF',
        cursor: 'pointer',
        height: '3em',
        lineHeight: '3em'
      });

    this.element('inner', 'div')
      .properties({
        className: 'scola inner'
      })
      .style({
        borderTop: '1px solid',
        display: 'flex',
        margin: '0 0 0 1em'
      })
      .appendTo(this.element('outer'));

    this.element('icon-outer', 'div')
      .properties({
        className: 'scola icon-outer'
      })
      .style({
        alignItems: 'center',
        borderTop: '1px solid #FFF',
        display: 'none',
        marginTop: '-1px',
        width: '2.25em'
      })
      .appendTo(this.element('inner'));

    this.element('icon', 'div')
      .properties({
        className: 'scola icon'
      })
      .style({
        fontSize: '2em'
      })
      .appendTo(this.element('icon-outer'));

    this.element('label', 'div')
      .properties({
        className: 'scola label'
      })
      .style({
        display: 'flex',
        flex: 1,
        width: 1
      })
      .appendTo(this.element('inner'));

    this.element('label-left', 'div')
      .properties({
        className: 'scola label-left'
      })
      .style({
        flex: 1,
        marginRight: '0.25em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      })
      .appendTo(this.element('label'));

    this.element('label-right', 'div')
      .properties({
        className: 'scola label-right'
      })
      .style({
        color: '#AAA',
        display: 'flex'
      })
      .appendTo(this.element('label'));

    this.element('icon-forward-outer', 'div')
      .properties({
        className: 'scola icon forward-outer'
      })
      .style({
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        width: '2em'
      })
      .appendTo(this.element('inner'));

    this.element('icon-forward', 'div')
      .properties({
        className: 'scola icon-forward ion-ios-arrow-forward'
      })
      .style({
        color: '#AAA',
        fontSize: '1.5em'
      })
      .appendTo(this.element('icon-forward-outer'));

    this.top(false);
  }

  render() {
    return this.element('outer');
  }

  top(top) {
    this.element('inner')

    .if(top)
      .style({
        borderTopColor: 'transparent'
      })

    .if(!top)
      .style({
        borderTopColor: '#DDD'
      });

    return this;
  }
}

module.exports = PanelItemMenuView;

'use strict';

const View = require('@scola/view');

class PanelListItemView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola-panel-list-item'
      })
      .style({
        background: '#FFF',
        cursor: 'pointer',
        height: '3em',
        lineHeight: '3em'
      });

    this.element('inner', 'div')
      .style({
        borderTop: '1px solid',
        display: 'flex',
        margin: '0 0 0 1em'
      })
      .appendTo(this.element('outer'));

    this.element('label-icon-outer', 'div')
      .style({
        alignItems: 'center',
        borderTop: '1px solid #FFF',
        display: 'none',
        marginTop: '-1px',
        width: '2.25em'
      })
      .appendTo(this.element('inner'));

    this.element('label-icon', 'div')
      .style({
        color: 'rgb(0,122,255)',
        fontSize: '2em'
      })
      .appendTo(this.element('label-icon-outer'));

    this.element('label-text', 'div')
      .style({
        display: 'flex',
        flex: 1,
        width: 1
      })
      .appendTo(this.element('inner'));

    this.element('label-text-left', 'div')
      .style({
        flex: 1,
        marginRight: '0.25em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      })
      .appendTo(this.element('label-text'));

    this.element('label-text-right', 'div')
      .style({
        color: '#AAA',
        display: 'flex'
      })
      .appendTo(this.element('label-text'));

    this.element('icon-forward-outer', 'div')
      .style({
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        width: '2em'
      })
      .appendTo(this.element('inner'));

    this.element('icon-forward', 'div')
      .style({
        color: '#AAA',
        fontSize: '1.5em'
      })
      .properties({
        className: 'ion-ios-arrow-forward'
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

module.exports = PanelListItemView;

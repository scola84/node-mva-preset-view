'use strict';

const PanelItemView = require('./item');

class PanelItemMenuView extends PanelItemView {
  build() {
    super.build();

    this.element('outer')
      .properties({
        className: 'scola item menu'
      })
      .style({
        cursor: 'pointer'
      });

    this.element('icon-outer', 'div')
      .properties({
        className: 'scola icon-outer'
      })
      .style({
        alignItems: 'center',
        display: 'flex',
        width: '2.25em'
      })
      .appendTo(this.element('inner'));

    this.element('icon', 'div')
      .properties({
        className: 'scola icon ion-ios-filing-outline'
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
        borderTopWidth: '1px',
        borderTopColor: '#DDD',
        display: 'flex',
        flex: 1,
        width: 1
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
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
        borderTopWidth: '1px',
        borderTopColor: '#DDD',
        display: 'flex',
        justifyContent: 'center',
        width: '2em'
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
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
    this.element('label')
      .if(top)
      .style({
        borderTopStyle: 'none'
      })
      .if(!top)
      .style({
        borderTopStyle: 'solid'
      });

    this.element('icon-forward-outer')
      .if(top)
      .style({
        borderTopStyle: 'none'
      })
      .if(!top)
      .style({
        borderTopStyle: 'solid'
      });

    return this;
  }
}

module.exports = PanelItemMenuView;

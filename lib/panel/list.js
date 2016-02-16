'use strict';

const View = require('@scola/view');

class PanelListView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola list'
      })
      .style({
        paddingBottom: '3em'
      });

    this.element('title', 'div')
      .properties({
        className: 'scola title'
      })
      .style({
        color: '#777',
        display: 'none',
        fontSize: '0.9em',
        padding: '0 0 0.5em 1em',
        textTransform: 'uppercase'
      })
      .appendTo(this.element('outer'));

    this.element('body', 'div')
      .properties({
        className: 'scola body'
      })
      .appendTo(this.element('outer'));

    this
      .inset(false)
      .top(false);
  }

  inset(inset) {
    this.element('outer')
      .if(inset)
      .style({
        margin: '0 1em'
      });

    this.element('body')
      .if(inset)
      .style({
        border: 0,
        borderRadius: '0.5em',
        overflow: 'hidden'
      })
      .if(!inset)
      .style({
        borderBottom: '1px solid #CCC',
        borderTop: '1px solid #CCC'
      });

    return this;
  }

  top(top) {
    this.element('outer')

    .if(top)
      .style({
        paddingTop: '3em'
      })

    .if(!top)
      .style({
        paddingTop: 0
      });

    return this;
  }

  render() {
    return this.element('outer');
  }
}

module.exports = PanelListView;

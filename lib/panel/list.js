'use strict';

const View = require('@scola/view');

class PanelListView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola list'
      })
      .style({
        paddingBottom: '3em',
        paddingTop: 0
      });

    this.element('title', 'div')
      .properties({
        className: 'scola title'
      })
      .style({
        color: '#AAA',
        display: 'none',
        fontSize: '0.9em',
        padding: '0 0 0.5em 1.1em',
        textTransform: 'uppercase'
      })
      .appendTo(this.element('outer'));

    this.element('body', 'div')
      .properties({
        className: 'scola body'
      })
      .style({
        borderWidth: '1px 0',
        borderColor: '#CCC',
        borderStyle: 'solid'
      })
      .if(this.capability('hairline'))
      .style({
        borderWidth: '0.5px 0'
      })
      .appendTo(this.element('outer'));
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
        borderStyle: 'none',
        borderRadius: '0.5em',
        overflow: 'hidden'
      })
      .if(!inset)
      .style({
        borderStyle: 'solid'
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

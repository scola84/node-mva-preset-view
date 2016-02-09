'use strict';

const View = require('@scola/view');

class PanelListView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola-panel-list'
      })
      .style({
        paddingTop: '3em'
      });

    this.element('title', 'div')
      .style({
        color: '#777',
        display: 'none',
        padding: '0 0 0.5em 1em',
        textTransform: 'uppercase'
      })
      .appendTo(this.element('outer'));

    this.element('body', 'div')
      .style({
        borderBottom: '1px solid #CCC',
        borderTop: '1px solid #CCC'
      })
      .appendTo(this.element('outer'));
  }

  inset() {
    this.element('outer')
      .style({
        margin: '1em'
      });

    this.element('body')
      .style({
        border: 0,
        borderRadius: '0.5em',
        overflow: 'hidden'
      });

    return this;
  }

  render() {
    return this.element('outer');
  }
}

module.exports = PanelListView;

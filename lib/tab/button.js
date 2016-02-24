'use strict';

const View = require('@scola/view');

class TabButtonView extends View.Abstract {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola tab'
      })
      .style({
        cursor: 'pointer',
        textAlign: 'center'
      });

    this.element('icon', 'div')
      .properties({
        className: 'scola icon'
      })
      .style({
        fontSize: '2em'
      })
      .appendTo(this.element('outer'));

    this.element('label', 'div')
      .properties({
        className: 'scola label'
      })
      .style({
        fontSize: '0.75em'
      })
      .appendTo(this.element('outer'));
  }

  render() {
    return this.element('outer');
  }
}

module.exports = TabButtonView;

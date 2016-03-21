'use strict';

const TabView = require('./tab');

class TabInlineView extends TabView {
  constructor() {
    super();

    this
      .option('backgroundColor', '#777')
      .option('color', '#FFF');
  }

  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola tab inline'
      })
      .style({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
        width: '100%'
      });

    this.element('buttons-outer', 'div')
      .properties({
        className: 'scola buttons-outer'
      })
      .style({
        alignItems: 'center',
        display: 'flex',
        height: '3em',
        justifyContent: 'center',
        position: 'relative',
        width: '100%'
      })
      .appendTo(this.element('outer'));

    this.element('buttons', 'div')
      .properties({
        className: 'scola buttons'
      })
      .style({
        border: '1px solid #777',
        borderRadius: '0.3em',
        color: '#777',
        display: 'flex',
        height: '2em',
        overflow: 'hidden'
      })
      .if(this.capability('hairline'))
      .style({
        borderWidth: '0.5px'
      })
      .appendTo(this.element('buttons-outer'));

    this.element('body', 'div')
      .properties({
        className: 'scola body'
      })
      .style({
        flexGrow: 1,
        width: '100%'
      })
      .appendTo(this.element('outer'));

    this.element('body')
      .appendView('slider', '@scola.widget.slider')
      .option('duration', 0)
      .element('container')
      .listen({
        slide: this.handleSlide
      }, this);
  }
}

module.exports = TabInlineView;

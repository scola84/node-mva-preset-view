'use strict';

const TabView = require('./tab');

class TabPanelView extends TabView {
  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola tab'
      })
      .style({
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
        width: '100%'
      });

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

    this.element('buttons-outer', 'div')
      .properties({
        className: 'scola buttons-outer'
      })
      .style({
        background: '#FAFAFA',
        borderTop: '1px solid #CCC',
        color: '#777',
        display: 'flex',
        height: '3em',
        justifyContent: 'center',
        position: 'relative',
        width: '100%'
      })
      .if(this.capability('hairline'))
      .style({
        borderTopWidth: '0.5px'
      })
      .appendTo(this.element('outer'));

    this.element('buttons', 'div')
      .properties({
        className: 'scola buttons'
      })
      .style({
        display: 'flex',
        width: '100%'
      })
      .appendTo(this.element('buttons-outer'));
  }
}

module.exports = TabPanelView;

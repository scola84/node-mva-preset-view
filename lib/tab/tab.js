'use strict';

const View = require('@scola/view');

class TabView extends View.Abstract {
  constructor() {
    super();

    this.tabs = [];
    this.buttons = [];
    this.selected = [];

    this.options({
      color: '#000'
    });
  }

  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola tab'
      })
      .style({
        background: '#EEE',
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
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'relative',
        webkitOverflowScrolling: 'touch',
        width: '100%'
      })
      .appendTo(this.element('outer'));

    this.element('body')
      .appendView('slider', '@scola.widget.slider')
      .options({
        duration: 0
      })
      .element('container')
      .listen({
        slide: this.handleSlide
      }, this);

    this.element('footer', 'div')
      .properties({
        className: 'scola footer'
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
  }

  render() {
    return this.element('outer');
  }

  appendTab(id, name) {
    const view = this.view('slider').view(id, name);
    const element = view.render();

    this.tabs.push(element);
    this.view('slider').append(element);

    return view;
  }

  appendButton(id, name) {
    const view = this.view(id, name);
    const element = view.render();

    this.buttons.push(element);
    this.element('footer').append(element);

    element.listen({
      click: this.handleClick
    }, this);

    return view;
  }

  handleSlide(element, event) {
    if (this.selected.length) {
      this.selected.forEach((button) => {
        button.style({
          color: 'inherit'
        });
      });

      this.selected = [];
    }

    event.details.forEach((tab) => {
      const index = this.tabs.indexOf(tab);
      const button = this.buttons[index];

      this.selected.push(button.style({
        color: this.getOption('color')
      }));
    });
  }

  handleClick(element) {
    const index = this.buttons.indexOf(element);

    if (this.tabs[index]) {
      this.view('slider').toward(this.tabs[index]);
    }
  }
}

module.exports = TabView;

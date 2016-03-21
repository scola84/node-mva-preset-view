'use strict';

const View = require('@scola/view');

class TabView extends View.Abstract {
  constructor() {
    super();

    this.tabs = [];
    this.buttons = [];
    this.selected = [];

    this
      .option('backgroundColor', 0)
      .option('color', 0);
  }

  build() {
    throw new Error('not_implemented');
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
    this.element('buttons').append(element);

    element.listen({
      click: this.handleClick
    }, this);

    return view;
  }

  handleSlide(element, event) {
    if (this.selected.length) {
      this.selected.forEach((button) => {
        button.style({
          backgroundColor: 'inherit',
          color: 'inherit'
        });
      });

      this.selected = [];
    }

    event.details.forEach((tab) => {
      const index = this.tabs.indexOf(tab);
      const button = this.buttons[index];

      this.selected.push(button.style({
        backgroundColor: this.getOption('backgroundColor'),
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

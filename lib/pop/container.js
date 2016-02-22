'use strict';

const View = require('@scola/view');

class PopContainerView extends View.Abstract {
  constructor() {
    super();
    this.popups = new Set();
  }

  build() {
    this
      .element('container', 'div')
      .properties({
        className: 'scola pop'
      })
      .style({
        display: 'none',
        bottom: 0,
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 1000
      })
      .listen({
        click: this.handleClick
      }, this);

    this.bindListener('keyup', document, this.handleKeyUp);
  }

  destroy() {
    this.unbindListener('keyup', document, this.handleKeyUp);
    super.destroy();
  }

  handleKeyUp(event) {
    if (event.keyCode === 27 && this.popups.size) {
      [...this.popups].pop().destroy();
    }
  }

  handleClick() {
    if (this.popups.size) {
      [...this.popups].pop().destroy();
    }
  }

  render() {
    return this.element('container');
  }

  append(view) {
    this.popups.add(view);
    this.element('container').append(view.render());
    this.showContainer();

    return this;
  }

  remove(view) {
    this.popups.delete(view);
    this.hideContainer();

    return this;
  }

  showContainer() {
    if (this.popups.size !== 1) {
      return;
    }

    this.element('container')
      .style({
        display: 'block'
      });
  }

  hideContainer() {
    if (this.popups.size !== 0) {
      return;
    }

    this.element('container')
      .style({
        display: 'none'
      });
  }
}

module.exports = PopContainerView;

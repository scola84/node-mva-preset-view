'use strict';

const MVA = require('@scola/mva');

class PopupContainerView extends MVA.View.Abstract {
  constructor() {
    super();
    this.popups = new Set();
  }

  build() {
    this
      .element('container', 'div');

    this
      .element('overlay', 'div')
      .style('@scola.absmax')
      .style({
        background: '#000',
        display: 'none',
        opacity: 0,
        position: 'fixed'
      })
      .listen({
        click: this.handleClick
      }, this);

    this
      .element('container')
      .append(
        this.element('overlay')
      );

    this.bindListener('keyup', document, this.handleKeyUp);

    return this;
  }

  destroy() {
    this.unbindListener('keyup', document, this.handleKeyUp);
    super.destroy();
  }

  handleKeyUp(event) {
    if (event.keyCode === 27 && this.popups.size) {
      this.removeView([...this.popups].pop()).destroy();
    }
  }

  handleClick() {
    if (this.popups.size) {
      this.removeView([...this.popups].pop()).destroy();
    }
  }

  render() {
    return this.element('container');
  }

  view(id, name) {
    if (name) {
      this.popups.add(id);
      this.showOverlay();
    }

    return super.view(id, name);
  }

  removeView(id) {
    this.popups.delete(id);
    this.hideOverlay();

    return super.removeView(id);
  }

  showOverlay() {
    if (this.popups.size !== 1) {
      return;
    }

    this
      .element('overlay')
      .animate({
        duration: 150,
        display: 'block',
        opacity: 0.5,
        play: true
      });
  }

  hideOverlay() {
    if (this.popups.size !== 0) {
      return;
    }

    this
      .element('overlay')
      .animate({
        duration: 150,
        opacity: 0,
        play: true,
        onComplete: () => {
          this
            .element('overlay')
            .style({
              display: 'none'
            });
        }
      });
  }
}

module.exports = PopupContainerView;

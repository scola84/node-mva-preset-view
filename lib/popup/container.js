'use strict';

const View = require('@scola/view');

class PopupContainerView extends View.Abstract {
  constructor() {
    super();
    this.popups = new Set();
  }

  build() {
    this
      .element('container', 'div')
      .style({
        background: 'rgba(0, 0, 0, 0.5)',
        bottom: '100%',
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
      this.showContainer();
    }

    return super.view(id, name);
  }

  removeView(id) {
    this.popups.delete(id);
    this.hideContainer();

    return super.removeView(id);
  }

  showContainer() {
    if (this.popups.size !== 1) {
      return;
    }

    this
      .element('container')
      .style({
        bottom: 0
      })
      .animate({
        opacity: 1,
        play: true
      });
  }

  hideContainer() {
    if (this.popups.size !== 0) {
      return;
    }

    this
      .element('container')
      .animate({
        opacity: 0,
        play: true,
        onComplete: () => {
          this
            .element('container')
            .style({
              bottom: '100%'
            });
        }
      });
  }
}

module.exports = PopupContainerView;

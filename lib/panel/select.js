'use strict';

const PanelListView = require('./list');

class PanelSelectView extends PanelListView {
  build() {
    super.build();

    this.element('body')
      .listen({
        click: this.handleClick
      }, this);
  }

  handleClick(element, event) {
    const value = event.target['@scola.element']
      .getView()
      .element('outer')
      .data('value');

    this.emit('select', value);
  }
}

module.exports = PanelSelectView;

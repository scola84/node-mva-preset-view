'use strict';

const DI = require('@scola/di');
const View = require('@scola/view');

class Module extends DI.Module {
  configure() {
    this.addModule(View.Module);

    const definition = {
      'form': {
        'button-icon': this.instance(require('./lib/form/button-icon')),
        'button-text': this.instance(require('./lib/form/button-text')),
        'checkbox': this.instance(require('./lib/form/checkbox')),
        'checkbox-label': this.instance(require('./lib/form/checkbox-label')),
        'form': this.instance(require('./lib/form/form')),
        'input': this.instance(require('./lib/form/input'))
      },
      'panel': {
        'list-input': this.instance(require('./lib/panel/list-input')),
        'list-item': this.instance(require('./lib/panel/list-item')),
        'list': this.instance(require('./lib/panel/list')),
        'panel': this.instance(require('./lib/panel/panel')),
        'select-item': this.instance(require('./lib/panel/select-item')),
        'select': this.instance(require('./lib/panel/select'))
      },
      'popup': {
        'button': this.instance(require('./lib/popup/button')),
        'container': this.singleton(require('./lib/popup/container')),
        'popup': this.instance(require('./lib/popup/popup'))
      },
      'widget': {
        'card': this.instance(require('./lib/widget/card')),
        'slider': this.instance(require('./lib/widget/slider')),
        'spinner': this.instance(require('./lib/widget/spinner')),
        'tooltip': this.instance(require('./lib/widget/tooltip'))
      }
    };

    const views = {};

    Object.keys(definition).forEach((group) => {
      Object.keys(definition[group]).forEach((name) => {
        let key = '@scola.' + group;
        key += group === name ? '' : '.' + name;
        views[key] = definition[group][name];
      });
    });

    this.inject(View.Dispatcher)
      .updateArgument(0, this.object(views));
  }
}

module.exports = {
  Module,
  View
};

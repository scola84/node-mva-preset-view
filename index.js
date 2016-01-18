'use strict';

const DI = require('@scola/di');
const MVA = require('@scola/mva');

class Module extends DI.Module {
  configure() {
    this.addModule(MVA.Module);

    const definition = {
      'form': {
        'button-icon': this.instance(require('./lib/form/button-icon')),
        'button-text': this.instance(require('./lib/form/button-text')),
        'checkbox': this.instance(require('./lib/form/checkbox')),
        'checkbox-label': this.instance(require('./lib/form/checkbox-label')),
        'form': this.instance(require('./lib/form/form')),
        'input': this.instance(require('./lib/form/input'))
      },
      'popup': {
        'button': this.instance(require('./lib/popup/button')),
        'container': this.singleton(require('./lib/popup/container')),
        'popup': this.instance(require('./lib/popup/popup'))
      },
      'widget': {
        'card': this.instance(require('./lib/widget/card')),
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

    const styles = {
      '@scola.absmax': {
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
      }
    };

    this.inject(MVA.View.Dispatcher)
      .updateArgument(0, this.object(views));

    this.inject(MVA.View.Dispatcher)
      .updateArgument(2, this.object(styles));
  }
}

module.exports = {
  Module
};

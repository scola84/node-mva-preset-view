'use strict';

const DI = require('@scola/di');
const MVA = require('@scola/mva');

class Module extends DI.Module {
  configure() {
    this.addModule(MVA.Module);

    const definition = {
      'form': {
        'bubble': require('./lib/form/bubble'),
        'button-icon': require('./lib/form/button-icon'),
        'button-text': require('./lib/form/button-text'),
        'checkbox': require('./lib/form/checkbox'),
        'checkbox-label': require('./lib/form/checkbox-label'),
        'form': require('./lib/form/form'),
        'input': require('./lib/form/input')
      },
      'widget': {
        'card': require('./lib/widget/card'),
        'spinner': require('./lib/widget/spinner')
      }
    };

    const views = {};

    Object.keys(definition).forEach((group) => {
      Object.keys(definition[group]).forEach((name) => {
        views['@scola.' + group + '.' + name] =
          this.instance(definition[group][name]);
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
      .assignArgument(0, this.object(views));

    this.inject(MVA.View.Dispatcher)
      .assignArgument(2, this.object(styles));
  }
}

module.exports = {
  Module
};

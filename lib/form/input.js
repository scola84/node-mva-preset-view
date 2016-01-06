'use strict';

const MVA = require('@scola/mva');

class InputView extends MVA.View.Abstract {
  build() {
    this
      .element('wrapper', 'div')
      .style({
        background: '#FFF',
        position: 'relative'
      });

    this.element('input', 'input')
      .properties({
        type: 'text',
        // required: 'required'
      })
      .style({
        background: 'none',
        border: 0,
        height: '100%',
        margin: 0,
        padding: 0,
        position: 'absolute',
        width: '100%'
      }).appendTo(
        this.element('wrapper')
      );

    return this;
  }

  addError(text) {
    this
      .view('bubble', '@scola.form.bubble')
      .element('wrapper')
      .style({
        top: '100%'
      })
      .element('text')
      .properties({
        innerHTML: text
      });

      console.log(text, this.view('bubble'));

    this
      .element('wrapper')
      .append(
        this.view('bubble').render()
      );
  }

  removeError() {
    this
      .removeView('bubble')
      .destroy();
  }

  render() {
    return this.element('wrapper');
  }
}

module.exports = InputView;

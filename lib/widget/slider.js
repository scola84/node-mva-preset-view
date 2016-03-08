'use strict';

const View = require('@scola/view');

class SliderView extends View.Abstract {
  constructor() {
    super();

    this.all = [];
    this.current = [];
    this.pointer = 0;
    this.running = false;
    this.direction = 1;

    this.options({
      amount: 1,
      direction: true,
      duration: 300,
      orientation: 'horizontal',
      remove: false,
      rotate: true
    });
  }

  build() {
    this.element('container', 'div')
      .properties({
        className: 'scola slider'
      })
      .style({
        height: '100%',
        overflow: 'hidden',
        position: 'absolute',
        width: '100%'
      });

    if (this.i18n) {
      this.bindListener('locale', this.i18n, this.handleLocale);
    }
  }

  render() {
    return this.element('container');
  }

  handleLocale(event) {
    if (this.getOption('direction')) {
      this.direction = event.data.language.dir === 'rtl' ? -1 : 1;
    }
  }

  isRunning() {
    return this.running;
  }

  getPropertyName() {
    return this.getOption('orientation') === 'horizontal' ? 'x' : 'y';
  }

  append(element) {
    if (this.running) {
      return this;
    }

    this.all.push(element);

    this
      .setDimensions(element)
      .setPosition(element, this.all.indexOf(element));

    if (this.all.length <= this.getOption('amount')) {
      this.current.push(element);

      this.element('container')
        .append(element)
        .emit('slide', this.current);
    }

    return this;
  }

  appendView(id, name) {
    if (this.hasView(id)) {
      return this.view(id);
    }

    const view = this.view(id, name);

    this.append(view.render());
    return view;
  }

  prepend(element) {
    if (this.running) {
      return this;
    }

    this.all.unshift(element);

    this
      .setDimensions(element)
      .setPosition(element, this.all.indexOf(element));

    if (this.all.length <= this.getOption('amount')) {
      this.current.unshift(element);

      this.element('container')
        .prepend(element)
        .emit('slide', this.current);
    } else {
      this.pointer += 1;
    }

    return this;
  }

  prependView(id, name) {
    if (this.hasView(id)) {
      return this.view(id);
    }

    const view = this.view(id, name);

    this.prepend(view.render());
    return view;
  }

  forward() {
    if (this.running) {
      return this;
    }

    return this.slideForward(
      this.current,
      this.calculateForward()
    );
  }

  calculateForward() {
    const hasEnough = this.all.length >= 2 * this.getOption('amount');

    this.pointer += this.getOption('amount');

    if (this.pointer > this.all.length) {
      this.pointer -= this.all.length;
    }

    let elements = this.all.slice(
      this.pointer,
      this.pointer + this.getOption('amount')
    );

    const shortage = this.getOption('amount') - elements.length;

    if (shortage > 0) {
      if (this.getOption('rotate') && hasEnough) {
        elements = elements.concat(
          this.all.slice(0, shortage)
        );
      } else {
        this.pointer -= shortage;
      }
    }

    return elements;
  }

  slideForward(current, elements) {
    if (elements.length === 0) {
      return this;
    }

    this.running = true;
    this.current = [];

    const name = this.getPropertyName();

    let fromIndex = 0;
    let toIndex = 0;

    let cssFrom = {};
    let cssTo = {};

    current.forEach((element, index) => {
      if (elements.length - index <= 0) {
        this.current.push(element);
      }

      cssTo = {
        [name]: ((elements.length - index) * -100 * this.direction) + '%'
      };

      element
        .animate({
          css: cssTo,
          duration: this.getOption('duration'),
          position: 0,
          onComplete: () => {
            if (this.current.indexOf(element) === -1) {
              this.element('container').detach(element);
            }
          }
        }, this);
    });

    elements.forEach((element, index) => {
      this.current.push(element);

      fromIndex = index + this.getOption('amount');
      toIndex = elements.length - index - this.getOption('amount');

      cssFrom = {
        [name]: (fromIndex * 100 * this.direction) + '%'
      };

      cssTo = {
        [name]: (toIndex * -100 * this.direction) + '%'
      };

      element
        .appendTo(this.element('container'))
        .animate({
          css: cssFrom,
          duration: 0,
          position: 0
        }, this)
        .animate({
          css: cssTo,
          duration: this.getOption('duration'),
          position: 0
        }, this);
    });

    this.play(() => {
      this.element('container').emit('slide', this.current);
      this.running = false;
    });

    return this;
  }

  backward() {
    if (this.running) {
      return this;
    }

    return this.slideBackward(
      this.current,
      this.calculateBackward()
    );
  }

  calculateBackward() {
    const hasEnough = this.all.length >= 2 * this.getOption('amount');

    this.pointer -= this.getOption('amount');
    let amount = this.getOption('amount');

    if (this.pointer < 0) {
      if (this.getOption('rotate') && hasEnough) {
        this.pointer += this.all.length;
      } else {
        amount += this.pointer;
        this.pointer = 0;
      }
    }

    let elements = this.all.slice(
      this.pointer,
      this.pointer + amount
    );

    const shortage = this.getOption('amount') - elements.length;

    if (shortage > 0 && this.getOption('rotate') && hasEnough) {
      elements = elements.concat(
        this.all.slice(0, shortage)
      );
    }

    return elements;
  }

  slideBackward(current, elements) {
    if (elements.length === 0) {
      return this;
    }

    this.running = true;
    this.current = [];

    const name = this.getPropertyName();

    let cssFrom = {};
    let cssTo = {};

    elements.forEach((element, index) => {
      this.current.push(element);

      cssFrom = {
        [name]: ((elements.length - index) * -100 * this.direction) + '%'
      };

      cssTo = {
        [name]: (index * 100 * this.direction) + '%'
      };

      element
        .appendTo(this.element('container'))
        .animate({
          css: cssFrom,
          duration: 0,
          position: 0
        }, this)
        .animate({
          css: cssTo,
          duration: this.getOption('duration'),
          position: 0
        }, this);
    });

    current.forEach((element, index) => {
      if (elements.length + index < this.getOption('amount')) {
        this.current.push(element);
      }

      cssTo = {
        [name]: ((elements.length + index) * 100 * this.direction) + '%'
      };

      element
        .animate({
          css: cssTo,
          duration: this.getOption('duration'),
          position: 0,
          onComplete: () => {
            if (this.current.indexOf(element) === -1) {
              this.element('container').detach(element);

              if (this.getOption('remove')) {
                this.all.splice(this.all.indexOf(element), 1);
                element.getView().destroy();
              }
            }
          }
        }, this);
    });

    this.play(() => {
      this.element('container').emit('slide', this.current);
      this.running = false;
    });

    return this;
  }

  toward(target) {
    if (this.running) {
      return this;
    }

    const pointer = this.all.indexOf(target);

    if (pointer > this.pointer) {
      this.slideTowardForward(
        this.calculateTowardForward(pointer)
      );
    } else if (pointer < this.pointer) {
      this.slideTowardBackward(
        this.calculateTowardBackward(pointer)
      );
    }

    return this;
  }

  calculateTowardForward(pointer) {
    const elements = this.all.slice(
      this.pointer,
      pointer + this.getOption('amount')
    );

    this.pointer = Math.min(
      this.all.length - this.getOption('amount'),
      pointer
    );

    return elements;
  }

  slideTowardForward(elements) {
    if (elements.length === 0) {
      return this;
    }

    this.running = true;

    const current = this.current;
    const name = this.getPropertyName();

    let toIndex = 0;
    let cssFrom = {};
    let cssTo = {};

    this.current = this.all.slice(
      this.pointer,
      this.pointer + this.getOption('amount')
    );

    elements.forEach((element, index) => {
      toIndex = elements.length - index - this.getOption('amount');

      cssFrom = {
        [name]: (index * 100 * this.direction) + '%'
      };

      cssTo = {
        [name]: (toIndex * -100 * this.direction) + '%'
      };

      if (current.indexOf(element) === -1) {
        element
          .appendTo(this.element('container'))
          .animate({
            css: cssFrom,
            duration: 0,
            position: 0
          }, this);
      }

      element
        .animate({
          css: cssTo,
          duration: this.getOption('duration'),
          position: 0,
          onComplete: () => {
            if (this.current.indexOf(element) === -1) {
              this.element('container').detach(element);
            }
          }
        }, this);
    });

    this.play(() => {
      this.element('container').emit('slide', this.current);
      this.running = false;
    });
  }

  calculateTowardBackward(pointer) {
    const elements = this.all.slice(
      pointer,
      this.pointer + this.getOption('amount')
    );

    this.pointer = pointer;

    return elements;
  }

  slideTowardBackward(elements) {
    if (elements.length === 0) {
      return this;
    }

    this.running = true;

    const name = this.getPropertyName();
    const current = this.current;

    this.current = elements.slice(
      0,
      this.getOption('amount')
    );

    let fromIndex = 0;
    let cssFrom = {};
    let cssTo = {};

    elements.forEach((element, index) => {
      fromIndex = elements.length - index - this.getOption('amount');

      cssFrom = {
        [name]: (fromIndex * -100 * this.direction) + '%'
      };

      cssTo = {
        [name]: (index * 100 * this.direction) + '%'
      };

      if (current.indexOf(element) === -1) {
        element
          .appendTo(this.element('container'))
          .animate({
            css: cssFrom,
            duration: 0,
            position: 0
          }, this);
      }

      element
        .animate({
          css: cssTo,
          duration: this.getOption('duration'),
          position: 0,
          onComplete: () => {
            if (this.current.indexOf(element) === -1) {
              this.element('container').detach(element);
            }
          }
        }, this);
    });

    this.play(() => {
      this.element('container').emit('slide', this.current);
      this.running = false;
    });
  }

  reset() {
    return this
      .resetAll()
      .resetCurrent();
  }

  resetAll() {
    this.all.forEach((element) => {
      this.setDimensions(element);
    });

    return this;
  }

  resetCurrent(pointer) {
    pointer = pointer || 0;

    this.current.forEach((element) => {
      this.element('container').detach(element);
    });

    this.pointer = pointer;
    this.current = this.all.slice(
      this.pointer,
      this.pointer + this.getOption('amount')
    );

    this.current.forEach((element, index) => {
      this.element('container').append(element);
      this.setPosition(element, index);
    });

    return this;
  }

  setDimensions(element) {
    const dimensions = {
      height: '100%',
      width: '100%'
    };

    const name = this.getOption('orientation') === 'horizontal' ?
      'width' : 'height';

    dimensions[name] = (1 / this.getOption('amount') * 100) + '%';

    element.style(dimensions);

    return this;
  }

  setPosition(element, index) {
    const translate = [0, 0];
    const position = this.getOption('orientation') === 'horizontal' ? 0 : 1;

    translate[position] = (index * 100) + '%';

    element.style({
      transform: 'translate(' + translate.join(',') + ')'
    });

    return this;
  }

  clearSlides(current) {
    if (this.running) {
      return this;
    }

    this.all.forEach((element) => {
      if (current !== false || this.current.indexOf(element) === -1) {
        element.getView().destroy();
      }
    });

    this.all = [];
    this.current = current !== false ? [] : this.current;
    this.pointer = 0;
    this.running = false;

    return this;
  }
}

module.exports = SliderView;

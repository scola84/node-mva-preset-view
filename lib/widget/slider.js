'use strict';

const View = require('@scola/view');

class SliderView extends View.Abstract {
  constructor() {
    super();

    this.slides = new Set();
    this.pointer = 0;
    this.current = [];
    this.running = false;
    this.rtlFactor = 1;

    this.options = {
      rotate: true,
      remove: false,
      amount: 1,
      distance: 100,
      duration: 500,
      orientation: 'horizontal'
    };
  }

  build() {
    this.element('container', 'div')
      .style({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: 'hidden'
      });
  }

  render() {
    return this.element('container');
  }

  isRunning() {
    return this.running;
  }

  append(element) {
    if (this.running) {
      return this;
    }

    this.slides.add(element);

    if (this.slides.size <= this.options.amount) {
      this.element('container').append(element);
      this.current.push(element);
    }

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
    const slides = [...this.slides];
    const hasEnoughSlides = slides.length >= 2 * this.options.amount;

    this.pointer -= this.options.amount;
    let amount = this.options.amount;

    if (this.pointer < 0) {
      if (this.options.rotate && hasEnoughSlides) {
        this.pointer += slides.length;
      } else {
        amount += this.pointer;
        this.pointer = 0;
      }
    }

    let elements = slides.slice(
      this.pointer,
      this.pointer + amount
    );

    const shortage = this.options.amount - elements.length;

    if (shortage > 0 && this.options.rotate && hasEnoughSlides) {
      elements = elements.concat(
        slides.slice(0, shortage)
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
    let cssFrom = {};
    let cssTo = {};

    elements.forEach((element, index) => {
      this.current.push(element);

      if (this.options.orientation === 'horizontal') {
        cssFrom = {
          x: ((elements.length - index) * -100) + '%'
        };

        cssTo = {
          x: (index * 100) + '%'
        };
      } else {
        cssFrom = {
          y: ((elements.length - index) * -100) + '%'
        };

        cssTo = {
          y: (index * 100) + '%'
        };
      }

      element
        .appendTo(this.element('container'))
        .animate({
          css: cssFrom,
          duration: 0,
          play: true,
          position: 0
        })
        .animate({
          css: cssTo,
          duration: this.options.duration,
          play: true,
          position: 0
        });
    });

    current.forEach((element, index) => {
      if (elements.length + index < this.options.amount) {
        this.current.push(element);
      }

      if (this.options.orientation === 'horizontal') {
        cssTo = {
          x: ((elements.length + index) * 100) + '%'
        };
      } else {
        cssTo = {
          y: ((elements.length + index) * 100) + '%'
        };
      }

      element
        .animate({
          css: cssTo,
          play: true,
          duration: this.options.duration,
          position: 0,
          onComplete: () => {
            if (elements.length + index >= this.options.amount) {
              this.element('container')
                .detach(element);

              if (this.options.remove) {
                this.slides.delete(element);
                element.getView().destroy();
              }
            }

            this.running = false;
          }
        });
    });

    return this;
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
    const slides = [...this.slides];
    const hasEnoughSlides = slides.length >= 2 * this.options.amount;

    this.pointer += this.options.amount;

    if (this.pointer > slides.length) {
      this.pointer -= slides.length;
    }

    let elements = slides.slice(
      this.pointer,
      this.pointer + this.options.amount
    );

    const shortage = this.options.amount - elements.length;

    if (shortage > 0) {
      if (this.options.rotate && hasEnoughSlides) {
        elements = elements.concat(
          slides.slice(0, shortage)
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
    let cssFrom = {};
    let cssTo = {};

    current.forEach((element, index) => {
      if (elements.length - index <= 0) {
        this.current.push(element);
      }

      if (this.options.orientation === 'horizontal') {
        cssTo = {
          x: ((elements.length - index) * -100) + '%'
        };
      } else {
        cssTo = {
          y: ((elements.length - index) * -100) + '%'
        };
      }

      element
        .animate({
          css: cssTo,
          play: true,
          duration: this.options.duration,
          position: 0,
          onComplete: () => {
            if (elements.length - index > 0) {
              this.element('container')
                .detach(element);

              if (this.options.remove) {
                this.slides.delete(element);
                element.getView().destroy();
              }
            }

            this.running = false;
          }
        });
    });

    elements.forEach((element, index) => {
      this.current.push(element);

      if (this.options.orientation === 'horizontal') {
        cssFrom = {
          x: ((this.options.amount + index) * 100) + '%'
        };

        cssTo = {
          x: ((this.options.amount - elements.length + index) * 100) + '%'
        };
      } else {
        cssFrom = {
          y: ((this.options.amount + index) * 100) + '%'
        };

        cssTo = {
          y: ((this.options.amount - elements.length + index) * 100) + '%'
        };
      }

      element
        .appendTo(this.element('container'))
        .animate({
          css: cssFrom,
          duration: 0,
          play: true,
          position: 0
        })
        .animate({
          css: cssTo,
          duration: this.options.duration,
          play: true,
          position: 0
        });
    });

    return this;
  }

  toward(target) {
    if (this.running) {
      return this;
    }

    const slides = [...this.slides];
    const pointer = slides.indexOf(target);

    if (pointer > this.pointer) {
      this.slideTowardForward(
        this.calculateTowardForward(slides, pointer)
      );
    } else {
      this.slideTowardBackward(
        this.calculateTowardBackward(slides, pointer)
      );
    }

    return this;
  }

  calculateTowardForward(slides, pointer) {
    const elements = slides.slice(this.pointer, pointer + this.options.amount);
    this.pointer = Math.min(this.slides.size - this.options.amount, pointer);

    return elements;
  }

  calculateTowardBackward(slides, pointer) {
    const elements = slides.slice(pointer, this.pointer + this.options.amount);
    this.pointer = pointer;

    return elements;
  }

  slideTowardBackward(elements) {
    if (elements.length === 0) {
      return this;
    }

    this.running = true;

    elements.forEach((element, index) => {
      if (this.current.indexOf(element) === -1) {
        element
          .appendTo(this.element('container'))
          .animate({
            css: {
              x: ((elements.length - index - this.options.amount) * -100) + '%'
            },
            duration: 0,
            position: 0
          });
      }

      element
        .animate({
          css: {
            x: (index * 100) + '%'
          },
          duration: this.options.duration,
          position: 0,
          onComplete: () => {
            if (index < this.pointer) {
              this.element('container')
                .detach(element);
            }
          }
        });
    });

    elements[0].getView().play(() => {
      this.running = false;
      this.current = elements.slice(0, this.options.amount);
    });
  }

  slideTowardForward(elements) {
    if (elements.length === 0) {
      return this;
    }

    this.running = true;

    elements.forEach((element, index) => {
      if (this.current.indexOf(element) === -1) {
        element
          .appendTo(this.element('container'))
          .animate({
            css: {
              x: (index * 100) + '%'
            },
            duration: 0,
            position: 0
          });
      }

      element
        .animate({
          css: {
            x: ((elements.length - index - this.options.amount) * -100) + '%'
          },
          duration: this.options.duration,
          position: 0,
          onComplete: () => {
            if (index < this.pointer) {
              this.element('container')
                .detach(element);
            }
          }
        });
    });

    elements[0].getView().play(() => {
      this.running = false;
      this.current = elements.slice(this.pointer, this.pointer + this.options.amount);
    });
  }
}

module.exports = SliderView;

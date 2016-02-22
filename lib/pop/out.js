'use strict';

const View = require('@scola/view');

class PopOutView extends View.Abstract {
  constructor() {
    super();

    this.horizontal = null;
    this.vertical = null;
  }

  build() {
    this.element('outer', 'div')
      .properties({
        className: 'scola over'
      })
      .style({
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.5)',
        bottom: 0,
        left: 0,
        opacity: 0,
        position: 'fixed',
        right: 0,
        top: 0
      })
      .animate({
        opacity: 1
      });

    this.element('inner', 'div')
      .properties({
        className: 'scola inner'
      })
      .style({
        position: 'absolute'
      })
      .match('not all and (min-width: 23em)')
      .style({
        height: '100%',
        width: '100%'
      })
      .match('(min-width: 23em)')
      .style({
        height: '20em',
        transform: 'scale(1)',
        width: '20em'
      })
      .listen({
        click: this.handleClick
      }, this)
      .appendTo(this.element('outer'));

    this
      .element('triangle', 'div')
      .properties({
        className: 'scola triangle'
      })
      .style({
        borderColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: '0.75em',
        height: 0,
        position: 'absolute',
        width: 0,
        zIndex: 2
      })
      .appendTo(this.element('inner'));

    this.view(null, '@scola.pop.container')
      .append(this);
  }

  render() {
    return this.play().element('outer');
  }

  destroy() {
    this
      .element('outer')
      .animate({
        opacity: 0,
        play: true,
        onComplete: () => {
          this.view(null, '@scola.pop.container')
            .remove(this);

          super.destroy();
        }
      });
  }

  handleClick(element, event) {
    event.stopPropagation();
  }

  anchor(element) {
    this.anchorElement = element;
    return this;
  }

  inside(element) {
    this.insideElement = element;
    return this;
  }

  left() {
    this.horizontal = 'left';

    if (this.insideElement) {
      this.leftInside();
    } else {
      this.leftAnchor();
    }

    if (!this.vertical) {
      this.leftTriangleVertical();
    } else {
      this.leftTriangleHorizontal();
    }

    return this;
  }

  leftInside() {
    const position = this.insideElement.getPosition();

    this.element('inner')
      .style({
        left: position.x
      });

    return this;
  }

  leftAnchor() {
    const position = this.anchorElement.getPosition();
    const dimensions = this.anchorElement.getDimensions();

    this.element('inner')
      .if(Boolean(this.vertical))
      .style({
        left: position.x
      })
      .if(!Boolean(this.vertical))
      .style({
        left: position.x + dimensions.width
      });

    return this;
  }

  leftTriangleHorizontal() {
    const anchorPosition = this.anchorElement.getPosition();
    const anchorDimensions = this.anchorElement.getDimensions();
    const innerPosition = this.element('inner').getPosition();

    this.element('triangle')
      .style({
        marginLeft: '-0.75em',
        left: anchorPosition.x +
          (anchorDimensions.width / 2) -
          innerPosition.x
      });
  }

  leftTriangleVertical() {
    this.element('triangle')
      .style({
        borderRightColor: '#FAFAFA',
        borderLeftWidth: 0,
        marginLeft: '-0.75em'
      });

    this.element('inner')
      .style({
        marginLeft: '1em'
      });
  }

  right() {
    this.horizontal = 'right';

    if (this.insideElement) {
      this.rightInside();
    } else {
      this.rightAnchor();
    }

    if (!this.vertical) {
      this.rightTriangleVertical();
    } else {
      this.rightTriangleHorizontal();
    }

    return this;
  }

  rightInside() {
    const insidePosition = this.insideElement.getPosition();
    const insideDimensions = this.insideElement.getDimensions();
    const innerDimensions = this.element('inner').getDimensions();

    this.element('inner')
      .style({
        left: insidePosition.x + insideDimensions.width - innerDimensions.width
      });

    return this;
  }

  rightAnchor() {
    const anchorPosition = this.anchorElement.getPosition();
    const anchorDimensions = this.anchorElement.getDimensions();
    const innerDimensions = this.element('inner').getDimensions();

    this.element('inner')
      .if(Boolean(this.vertical))
      .style({
        left: anchorPosition.x + anchorDimensions.width - innerDimensions.width
      })
      .if(!Boolean(this.vertical))
      .style({
        left: anchorPosition.x - innerDimensions.width
      });

    return this;
  }

  rightTriangleHorizontal() {
    const anchorPosition = this.anchorElement.getPosition();
    const anchorDimensions = this.anchorElement.getDimensions();
    const innerPosition = this.element('inner').getPosition();

    this.element('triangle')
      .style({
        marginLeft: '-0.75em',
        left: anchorPosition.x +
          (anchorDimensions.width / 2) -
          innerPosition.x
      });
  }

  rightTriangleVertical() {
    this.element('triangle')
      .style({
        right: 0,
        borderLeftColor: '#FAFAFA',
        borderRightWidth: 0,
        marginRight: '-0.75em'
      });

    this.element('inner')
      .style({
        marginLeft: '-1em'
      });
  }

  center() {
    this.vertical = 'center';

    if (this.insideElement) {
      this.centerInside();
    } else {
      this.centerAnchor();
    }

    if (!this.horizontal) {
      this.centerTriangleHorizontal();
    }

    return this;
  }

  centerInside() {
    const insidePosition = this.insideElement.getPosition();
    const insideDimensions = this.insideElement.getDimensions();
    const innerDimensions = this.element('inner').getDimensions();

    this.element('inner')
      .style({
        left: insidePosition.x +
          (insideDimensions.width / 2) -
          (innerDimensions.width / 2)
      });

    return this;
  }

  centerAnchor() {
    const anchorPosition = this.anchorElement.getPosition();
    const anchorDimensions = this.anchorElement.getDimensions();
    const innerDimensions = this.element('inner').getDimensions();

    this.element('inner')
      .style({
        left: anchorPosition.x +
          (anchorDimensions.width / 2) -
          (innerDimensions.width / 2)
      });

    return this;
  }

  centerTriangleHorizontal() {
    const innerDimensions = this.element('inner').getDimensions();

    this.element('triangle')
      .style({
        marginLeft: '-0.75em',
        left: innerDimensions.width / 2
      });
  }

  top() {
    this.vertical = 'top';

    if (this.insideElement) {
      this.topInside();
    } else {
      this.topAnchor();
    }

    if (!this.horizontal) {
      this.topTriangleHorizontal();
    } else {
      this.topTriangleVertical();
    }

    return this;
  }

  topInside() {
    const position = this.insideElement.getPosition();

    this.element('inner')
      .style({
        top: position.y
      });

    return this;
  }

  topAnchor() {
    const position = this.anchorElement.getPosition();
    const dimensions = this.anchorElement.getDimensions();

    this.element('inner')
      .if(Boolean(this.horizontal))
      .style({
        top: position.y
      })
      .if(!Boolean(this.horizontal))
      .style({
        top: position.y + dimensions.height
      });

    return this;
  }

  topTriangleHorizontal() {
    this.element('triangle')
      .style({
        borderBottomColor: '#FAFAFA',
        borderTopWidth: 0,
        marginTop: '-0.75em'
      });

    this.element('inner')
      .style({
        marginTop: '0.25em'
      });
  }

  topTriangleVertical() {
    const anchorPosition = this.anchorElement.getPosition();
    const anchorDimensions = this.anchorElement.getDimensions();
    const innerPosition = this.element('inner').getPosition();

    this.element('triangle')
      .style({
        marginTop: '-0.75em',
        top: anchorPosition.y +
          (anchorDimensions.height / 2) -
          innerPosition.y
      });
  }

  bottom() {
    this.vertical = 'bottom';

    if (this.insideElement) {
      this.bottomInside();
    } else {
      this.bottomAnchor();
    }

    if (!this.horizontal) {
      this.bottomTriangleHorizontal();
    } else {
      this.bottomTriangleVertical();
    }

    return this;
  }

  bottomInside() {
    const insidePosition = this.insideElement.getPosition();
    const insideDimensions = this.insideElement.getDimensions();
    const innerDimensions = this.element('inner').getDimensions();

    this.element('inner')
      .style({
        top: insidePosition.y +
          insideDimensions.height -
          innerDimensions.height
      });

    return this;
  }

  bottomAnchor() {
    const anchorPosition = this.anchorElement.getPosition();
    const anchorDimensions = this.anchorElement.getDimensions();
    const innerDimensions = this.element('inner').getDimensions();

    this.element('inner')
      .if(Boolean(this.horizontal))
      .style({
        top: anchorPosition.y +
          anchorDimensions.height -
          innerDimensions.height
      })
      .if(!Boolean(this.horizontal))
      .style({
        top: anchorPosition.y -
          innerDimensions.height
      });

    return this;
  }

  bottomTriangleHorizontal() {
    this.element('triangle')
      .style({
        bottom: 0,
        borderTopColor: '#EEE',
        borderBottomWidth: 0,
        marginBottom: '-0.75em'
      });

    this.element('inner')
      .style({
        marginTop: '-0.25em'
      });
  }

  bottomTriangleVertical() {
    const anchorPosition = this.anchorElement.getPosition();
    const anchorDimensions = this.anchorElement.getDimensions();
    const innerPosition = this.element('inner').getPosition();

    this.element('triangle')
      .style({
        borderRightColor: '#EEE',
        marginTop: '-0.75em',
        top: anchorPosition.y +
          (anchorDimensions.height / 2) -
          innerPosition.y
      });
  }

  middle() {
    this.vertical = 'middle';

    if (this.insideElement) {
      this.middleInside();
    } else {
      this.middleAnchor();
    }

    if (this.horizontal) {
      this.middleTriangleVertical();
    }

    return this;
  }

  middleInside() {
    const insidePosition = this.insideElement.getPosition();
    const insideDimensions = this.insideElement.getDimensions();
    const innerDimensions = this.element('inner').getDimensions();

    this.element('inner')
      .style({
        top: insidePosition.y +
          (insideDimensions.height / 2) -
          (innerDimensions.height / 2)
      });

    return this;
  }

  middleAnchor() {
    const anchorPosition = this.anchorElement.getPosition();
    const anchorDimensions = this.anchorElement.getDimensions();
    const innerDimensions = this.element('inner').getDimensions();

    this.element('inner')
      .style({
        top: anchorPosition.y +
          (anchorDimensions.height / 2) -
          (innerDimensions.height / 2)
      });

    return this;
  }

  middleTriangleVertical() {
    const innerDimensions = this.element('inner').getDimensions();

    this.element('triangle')
      .style({
        borderRightColor: '#EEE',
        marginTop: '-0.75em',
        top: innerDimensions.height / 2
      });
  }
}

module.exports = PopOutView;

/**
 * Унаследовать
 * @param child
 * @param base
 */
function extend(child, base) {
  child.prototype = base.prototype;
  child.prototype.constructor = child;
}

/**
 * AppComponent
 * @param options
 * @constructor
 */
function AppComponent(options) {
  this.template = options.template;
  this.element = null;
  this.container = null;
}

AppComponent.prototype = {
  constructor: AppComponent,
  setTemplate: function (template) {
    this.template = template;
  },
  renderTo: function(container, prepend) {
    if (!container || !this.template) {
      return;
    }

    container.insertAdjacentHTML(prepend ? 'afterBegin' : 'beforeEnd', this.template);

    this.element = prepend ? container.firstElementChild : container.lastElementChild;
    this.container = container;
  },
  destroy: function() {
    this.container.removeChild(this.element);
    for (var prop in this) {
      if (this.hasOwnProperty(prop)) {
        delete this[prop];
      }
    }
  }
};

function LoginViewComponent(options) {
  AppComponent.apply(this, arguments);
}

extend(LoginViewComponent, AppComponent);








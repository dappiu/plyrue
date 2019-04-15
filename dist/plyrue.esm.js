import Plyr from 'plyr';

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

//
var script = {
  name: 'PlyrUe',
  props: {
    options: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    },
    emit: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.player = new Plyr(this.$el.firstChild, this.opts);
    this.$emit('player', this.player);
    this.emit.forEach(function (element) {
      _this.player.on(element, _this.emitPlayerEvent);
    });
  },
  beforeDestroy: function beforeDestroy() {
    try {
      this.player.destroy();
    } catch (e) {
      if (!(this.opts.hideYouTubeDOMError && e.message === 'The YouTube player is not attached to the DOM.')) {
        // eslint-disable-next-line
        console.error(e);
      }
    }
  },
  methods: {
    emitPlayerEvent: function emitPlayerEvent(event) {
      this.$emit(event.type, event);
    }
  },
  computed: {
    opts: function opts() {
      var options = this.options;

      if (!this.options.hasOwnProperty('hideYouTubeDOMError')) {
        options.hideYouTubeDOMError = true;
      }

      return options;
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* component normalizer */

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "PlyrUe.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var PlyrUe = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

PlyrUe.install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (options.plyr) {
    PlyrUe.props.options.default = function () {
      return Object.assign({}, options.plyr);
    };
  }

  if (options.emit) {
    PlyrUe.props.emit.default = function () {
      return _toConsumableArray(options.emit);
    };
  }

  Vue.component(PlyrUe.name, PlyrUe);
}; // Credit to https://github.com/irazasyed for this auto Vue.use() when
// installing from unpkg or similar.


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(PlyrUe);
}

export default PlyrUe;

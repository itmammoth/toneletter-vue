(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('toneletter')) :
  typeof define === 'function' && define.amd ? define(['exports', 'toneletter'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Toneletter = {}, global.Toneletter));
})(this, (function (exports, Toneletter) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Toneletter__default = /*#__PURE__*/_interopDefaultLegacy(Toneletter);

  function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;

    Vue.directive("toneletter", {
      bind: function bind(el, binding, vnode) {
        if (typeof binding.value === "boolean" && !binding.value) {
          return;
        }

        var options = Object.assign({}, {lang: null, // Must be given
          phoneticSymbols: null,
          toneKeys: null,
          autoObserve: true},
          binding.value);
        var instance = new Toneletter__default["default"](el, {
          lang: options.lang,
          phoneticSymbols: options.phoneticSymbols,
          toneKeys: options.toneKeys,
        });
        if (options.autoObserve) {
          instance.observe();
        }
        el.toneletter = instance;
      },
      unbind: function unbind(el, binding, vnode) {
        el.toneletter && el.toneletter.off();
      },
    });
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install,
  };

  // Install automatically when Vue is found (mainly for browser use)
  var GlobalVue = null;
  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  exports["default"] = plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

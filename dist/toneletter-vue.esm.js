import Toneletter from 'toneletter';

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
      var instance = new Toneletter(el, {
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

export { plugin as default };

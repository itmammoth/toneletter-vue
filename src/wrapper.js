import Toneletter from "toneletter";

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;

  Vue.directive("toneletter", {
    bind(el, binding, vnode) {
      console.log("bound", el, binding, vnode);
      const options = {
        lang: null, // Must be given
        autoObserve: true,
        ...binding.value,
      };
      const instance = new Toneletter(el, { lang: options.lang });
      if (options.autoObserve) {
        instance.observe();
      }
      el.toneletter = instance;
    },
    unbind(el, binding, vnode) {
      el.toneletter.off();
    },
  });
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Install automatically when Vue is found
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

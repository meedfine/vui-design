import DefaultTheme from "vitepress/theme";
import type { App, Component } from "vue";
import "./index.scss";
import "./vitepress.scss"

import Demo from './demo.vue';

interface Theme {
  app: App;
}

interface VueGlob {
  default: Component;
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }: Theme) {
    
    app.component("Demo",Demo)

    const modules = import.meta.glob("../../components/**/Demo*.vue", { eager: true });
    for (const path in modules) {
      const name = path.split("/").at(-1)?.split(".")[0];
      const mod = modules[path] as VueGlob;
      app.component(name!, mod.default);
    }
  },
};

const version = "__VERSION__";
import EditorComponent from "./Editor.vue";

export function install(app) {
  if (install.installed) return;
  install.installed = true;
  app.component("Editor", EditorComponent);
}

const plugin = {
  install,
  version,
};

export default plugin;

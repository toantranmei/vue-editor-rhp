import EditorComponent from "../Editor.vue";

export default function install(app) {
  if (install.installed) return;
  install.installed = true;
  app.component("Editor", EditorComponent);
}

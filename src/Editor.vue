<template>
  <div :id="holder" />
</template>

<script>
import EditorJS from "@editorjs/editorjs";
import { onMounted, reactive } from "vue";

export default {
  name: "vue-editor-rhp",
  props: {
    holder: {
      type: String,
      default: () => "vue-editor-rhp",
      require: true,
    },
    config: {
      type: Object,
      default: () => ({}),
      require: true,
    },
    initialized: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const state = reactive({
      editor: null,
    });

    function initEditor(props) {
      // always destroy before action
      destroyEditor();

      // create editor config
      state.editor = new EditorJS({
        holder: props.holder || "vue-editor-rhp",
        ...props.config,
      });

      console.log("init", state.editor);

      props.initialized(state.editor);
    }

    function destroyEditor() {
      if (state.editor) {
        console.log("destroy");
        state.editor.destroy();
        state.editor = null;
      }
    }

    onMounted(() => initEditor(props));

    return { props, state };
  },
};
</script>

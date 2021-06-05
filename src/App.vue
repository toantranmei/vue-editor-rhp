<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <editor ref="editor" :config="config" />
  <button @click="invokeSave">Save</button>
</template>

<script>
import { ref } from "vue";
import Editor from "./components";

export default {
  name: "App",
  components: {
    Editor,
  },
  setup() {
    const editor = ref(null);

    function invokeSave() {
      editor.value.state.editor
        .save()
        .then((data) => {
          // Do what you want with the data here
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return { editor, invokeSave };
  },
};
</script>

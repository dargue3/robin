<template>
  <div class="editor">
    <div :id="id"></div>
  </div>
</template>

<script>

import Quill from 'quill'

export default {
  name: 'Editor',
  data () {
    // generate hashed id to negate any collisions with multiple editors
    const id = Math.random().toString(36).substr(2, 10)
    return {
      id,
      editor: undefined
    }
  },

  mounted() {
    let node = document.getElementById(this.id)
    this.editor = new Quill(node, {
      placeholder: 'Call me Ishmael...',
      theme: 'snow',
      modules: {
        toolbar: [
          [{ font: []}, { header: [1, 2, false] }],
          ['color', 'background'],
          ['bold', 'italic', 'underline', 'strike'],
          ['image', 'video']
        ]
      }
    })
  },
}
</script>

<style lang="sass">

.editor
  height: 400px
  width: 750px

.ql-container.ql-snow
  border: 0

.ql-editor
  background: whitesmoke

</style>

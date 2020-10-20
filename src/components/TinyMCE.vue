<template>
  <editor
    initialValue="<p>Initial editor content</p>"
    apiKey="ej2g41nbwskiekvf7emz1kb1ask7lhw2dnke7ao9frfrn2dj"
    :init="{
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap',
        'searchreplace visualblocks code fullscreen',
        'print preview anchor insertdatetime media',
        'paste code help wordcount table',
      ],
      toolbar:
        'undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | help',
    }"
  >
  </editor>
</template>

<script>
  import Editor from '@tinymce/tinymce-vue'

  export default {
    components: {
      editor: Editor
    }
  }
</script>
<template>
  <div class="container">
    <h1>Welcome to Robin 🐦</h1>
    
    <editor />
  </div>
</template>

<script>

import Editor from './Editor'

export default {
  name: 'Conversation',
  components: { Editor },
  data () {
    return {
      
    }
  },
}
</script>

<style lang="sass">

.container
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  height: 100%

</style>

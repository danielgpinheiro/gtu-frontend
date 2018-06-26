<template>
  <button class="button is-primary is-medium"
    @click="isImageModalActive = true">
    Launch image modal
  </button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

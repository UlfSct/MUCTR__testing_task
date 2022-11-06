<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'nav-button'
}

</script>

<style scoped>

button {
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
}

</style>
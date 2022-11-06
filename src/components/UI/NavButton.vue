<template>
  <button
      class="btn"
  >
  <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'nav-button'
}
</script>

<style scoped>
.btn {
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
}
</style>
<template>
  <button
      class="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}
</script>

<style scoped>
.btn {
  background: #FFF;
  border: 2px solid #008B70;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.35);
  cursor: pointer;
}
</style>
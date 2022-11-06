<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
}

</script>

<style scoped>

button {
  background: #FFF;
  border: 2px solid #008B70;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.35);
  cursor: pointer;

  transition: .3s;
}

button:hover {
  box-shadow: 0 15px 20px rgba(0, 139, 112, .4);
  transform: translateY(-7px);
}

button:active {
  color: white;
  background: #008B70;
}

</style>
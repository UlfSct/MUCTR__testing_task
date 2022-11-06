<template>
  <div class="custom-scroll">
    {{ outputText }}
  </div>
</template>

<script>
export default {
  props: {
    outputText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
div {
  height: 200px;
  margin-top: 20px;
  padding: 15px;
  text-align: left;

  background: #FFFFFF;
  border: 5px solid #008B70;
}

</style>
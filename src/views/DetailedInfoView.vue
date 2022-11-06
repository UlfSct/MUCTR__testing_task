<template>
  <div>
    <main>
      <my-table
          :table="infoTable"
      />
    </main>
  </div>
</template>

<script>
export default {
  props: {
    infoTable: {
      type: Object
    }
  }
}
</script>

<style scoped>
main {
  justify-content: flex-start;
}
</style>
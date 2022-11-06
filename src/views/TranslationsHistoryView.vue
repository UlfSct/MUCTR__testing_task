<template>
  <div>
    <main>
      <my-table
          :table="historyTable"
      />
    </main>
  </div>
</template>

<script>

export default {
  props: {
    historyTable: {
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
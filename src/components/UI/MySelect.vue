<template>
  <select
      v-model="selectedItem"
      @change="updateSelect"
  >
    <option v-for="option in options"
            :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    options: {
      type: Array
    },
    selectedItem: {
      type: String,
    }
  },
  methods: {

    /**
     * Запускает событие обновления модели родительского класса, отвечающей за выбор языка персонажа.
     *
     * @param event - событие изменения выпадающего списка персонажей.
     */
    updateSelect(event) {
      this.$emit('update:selectedItem', event.target.value)
    }
  },
  /**
   * Отвечает за выбор первого элемента выпадающего списка персонажей по дефолту.
   */
  created() {
    this.$emit('update:selectedItem', this.options[0].value)
  }
}

</script>

<style scoped>

select {
  background: #FFFFFF;
  border: 2px solid #008B70;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.35);
}

</style>
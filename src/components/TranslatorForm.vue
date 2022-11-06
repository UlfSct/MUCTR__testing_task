<template>
  <form @submit.prevent>
    <div class="selecting">
      <label> Выберите персонажа:
      <my-select
          class="selecting__input"
          :options="selectOptions"
          v-model:selectedItem="selectedLanguage"
      >
      </my-select>
      </label>
    </div>
    <textarea
        :value="modelValue"
        @input="updateInputText"
        class="custom-scroll"
    />
    <my-button
      class="btn"
      @click="formSubmitting"
    >
      Перевести
    </my-button>
  </form>
</template>

<script>

export default {
  props: {
    modelValue: [String]
  },
  data () {
    return {
      selectOptions: [
        {value: 'shakespeare', name: 'Гамлет', selected: 'selected'},
        {value: 'valyrian', name: 'Принц Деймон'},
        {value: 'quenya', name: 'Лорд Элронд'},
        {value: 'german-accent', name: 'Бруно'},
        {value: 'vulcan', name: 'Спок'},
        {value: 'sith', name: 'Дарт Мол'},
        {value: 'thuum', name: 'Ульфрик Буревестник'},
        {value: 'post-modern', name: 'Пелевин'},
        {value: 'gungan', name: 'Джа-джа-бинкс'}
      ],
      selectedLanguage: ''
    }
  },
  methods: {
    updateInputText (event) {
      this.$emit('update:modelValue', event.target.value)
    },

    formSubmitting() {
      this.$emit('submitForm', this.selectedLanguage)
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.selecting {
  display: flex;
  justify-content: flex-end;
}

.selecting__input {
  margin-left: 15px;
}

.btn {
  align-self: flex-end;
}

textarea {
  height: 200px;
  padding: 15px;

  resize: none;

  background: #FFFFFF;
  border: 5px solid #008B70;
}

.selecting__input, .btn {
  width: 232px;
  height: 36px;
}

textarea, .btn {
  margin-top: 20px;
}
</style>
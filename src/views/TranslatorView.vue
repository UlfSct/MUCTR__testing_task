<template>
  <main>
    <translator-form
        class="form"
        v-model="englishText"
        @submitForm="updateTranslation"
    />
    <translator-output
        class="output"
        v-model:outputText="translatedText"
    />
  </main>
</template>

<script>
import TranslatorForm from "@/components/TranslatorForm";
import TranslatorOutput from "@/components/TranslatorOutput";

export default {
  components: {
    TranslatorOutput,
    TranslatorForm
  },
  props: {
    dialogText: {
      type: String
    },
    isDialogActive: {
      type: Boolean
    }
  },
  data () {
    return {
      englishText: '',
      translatedText: ''
    }
  },
  methods: {
    /**
     * Функция, отвечающая за отправку запроса на перевод текста и последующую обработку.
     *Посылает запрос по заданным параметрам языка и текста, затем выводит результат пользователю
     * @param lang - язык перевода
     */
    async updateTranslation(lang) {

      if (this.englishText.length > 2048) {
        this.$emit('update:dialogText', 'Слишком большая длина текста для перевода. Вы там "Войну и мир" переводить собрались?')
        this.$emit('update:isDialogActive', true)
        return
      }

      let path = "https://api.funtranslations.com/translate/" + lang + ".json?text=" + this.englishText;

      let response = await fetch(path)

      if (response.ok) {
        const json = await response.json()
        this.translatedText = json.contents.translated;

        let date = new Date(Date.now())
        this.$emit('updatingStorage', this.englishText, this.translatedText, lang, date.toString())
      } else if (response.status === 429) {
        this.$emit('update:dialogText', 'Слишком много запросов, передохните пару часов')
        this.$emit('update:isDialogActive', true)
      } else {
        this.$emit('update:dialogText', 'Неудачный запрос, проверьте правильность введённого текста')
        this.$emit('update:isDialogActive', true)
      }
    }
  }
}

</script>

<style scoped>


</style>
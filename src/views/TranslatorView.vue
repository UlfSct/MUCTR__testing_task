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
  data () {
    return {
      englishText: '',
      translatedText: ''
    }
  },
  methods: {
    async updateTranslation(lang) {
      let path = "https://api.funtranslations.com/translate/" + lang + ".json?text=" + this.englishText;
      try {
        const response = await fetch(path)
            .then(response => response.json());

        console.log(response.status)

        this.translatedText = response.contents.translated;

        let date = new Date(Date.now())
        this.$emit('updatingStorage', this.englishText, this.translatedText, lang, date.toString())
      }
      catch (e) {
        console.log('запрос гавно')
        // TODO создать диалоговое окно, которое будет говорить попробуй перевести попозже, апи недовольна
      }


    }
  }
}

</script>

<style scoped>


</style>
<template>
  <div class="app">
    <my-header class="nav"/>
    <router-view
        @updatingStorage="updateLocalStorageItem"
        :historyTable="historyTable"
        :infoTable="infoTable"
        v-model:isDialogActive="isDialogActive"
        v-model:dialogText="dialogText"
        class="container"
    />
    <my-footer class="footer"/>
    <my-dialog
        v-model:show="isDialogActive"
        v-model:text="dialogText"
    />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";

export default {
  components: {
    MyFooter,
    MyHeader
  },

  data() {
    return {
      currentLocalStorageItem: [],
      historyTable: [],
      infoTable: [],
      isDialogActive: false,
      dialogText: ''
    }
  },

  methods: {
    /**
     * Обновляет данные в модели массива переводов и загружает их в локальное хранилище.
     */
    updateLocalStorageItem(text, translation, lang, date) {
      const idNumber = Date.now().toString(36) + Math.random().toString(36)

      this.currentLocalStorageItem.push({
        id: idNumber,
        date: date,
        text: text,
        language: lang,
        translatedText: translation
      });

      localStorage.setItem('translations', JSON.stringify(this.currentLocalStorageItem))

      this.updateTables();
    },

    /**
     * Обновляет данные в моделях таблиц.
     */
    updateTables() {
      this.clearTables()

      this.currentLocalStorageItem.forEach(translation => {
        this.historyTable.rows.push({
          id: translation.id,
          date: translation.date,
          language: translation.language,
          text: translation.text,
        })

        this.infoTable.rows.push({
          id: translation.id,
          date: translation.date,
          text: translation.text,
          language: translation.language,
          translatedText: translation.translatedText
        })
      })
    },

    /**
     * Очищает модели таблиц и приводит их к первоначальному виду.
     */
    clearTables() {
      this.historyTable = {
        headers: [
          'id',
          'Время перевода',
          'Язык',
          'Исходный текст'
        ],
        rows: []
      }

      this.infoTable = {
        headers: [
          'id',
          'Время перевода',
          'Язык',
          'Исходный текст',
          'Переведённый текст'
        ],
        rows: []
      }
    }
  },
  /**
   * Загружает данные из локального хранилища в модель массива переводов по созданию корневого компонента.
   */
  created() {
    const translations = localStorage.getItem('translations');

    if (translations) {
      this.currentLocalStorageItem = JSON.parse(translations)
      this.updateTables()
    }
  }

}

</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 20px;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 180px);
  width: 800px;
}

.custom-scroll {
  overflow-y: auto;
}

.custom-scroll::-webkit-scrollbar-track {
  background: white;
  border-left: 3px solid #008B70;
  background-clip: content-box;
}

.custom-scroll::-webkit-scrollbar {
  width: 11px;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: #D95600;
  border-left: 3px solid #008B70;
}

.nav, .footer {
  width: 80%;
}

.container {
  padding: 20px;
}

</style>

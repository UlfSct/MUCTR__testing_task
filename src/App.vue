<template>
  <div class="app">
    <my-header class="nav"/>
    <router-view
        @updatingStorage="updateLocalStorageItem"
        :historyTable="historyTable"
        :infoTable="infoTable"
    />
    <my-footer class="footer"/>
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
      infoTable: []
    }
  },
  methods: {
    updateLocalStorageItem(text, translation, lang, date) {
      const idNumber = Date.now().toString(36) + Math.random().toString(36)
      console.log(this.currentLocalStorageItem)
      this.currentLocalStorageItem.push({
        id: idNumber,
        date: date,
        text: text,
        language: lang,
        translatedText: translation
      });

      localStorage.setItem('translations', JSON.stringify(this.currentLocalStorageItem))

      this.updateTables();
      console.log(this.currentLocalStorageItem)
      console.log(this.historyTable)
      console.log(this.infoTable)
    },

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
  padding: 20px;
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

</style>

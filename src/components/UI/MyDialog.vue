<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      {{ text }}
      <my-button
        class="btn"
        @click="hideDialog"
      >
        ОК
      </my-button>
    </div>

  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  name: 'my-dialog',
  components: {MyButton},
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: String
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
}

.dialog__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  background: white;

  border-radius: 15px;
  min-height: 50px;
  width: 300px;
  padding: 20px;
}

.btn {
  margin-top: 20px;
  width: 60px;
}
</style>
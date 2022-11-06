<template>
  <header>
    <img
        src="@/assets/web_logo.png"
        alt="лого"
        @click="$router.push('/')"
    />
    <nav class="nav__btns">
      <nav-button
          class="btn"
          @click="$router.push('/')"
      >
        Переводчик
      </nav-button>
      <nav-button
          class="btn"
          @click="$router.push('/history')"
      >
        История переводов
      </nav-button>
      <nav-button
          class="btn"
          @click="$router.push('/info')"
      >
        Детальная информация
      </nav-button>
    </nav>
  </header>
</template>

<script>

</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  padding: 0 50px;

  border-bottom: 2px solid rgb(0, 214, 174);
}

img {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.btn {
  margin-left: 40px;
}
</style>
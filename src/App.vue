<template>
  <div id="app">
    <label for="locale">locale</label>
    <select v-model="locale">
      <option>en</option>
      <option>cn</option>
    </select>
    <p>message: {{ $t('hello') }}</p>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () { return { locale: 'cn' } },
  watch: {
    locale (val) {
      this.$i18n.locale = val;
      this.$i18n._root.locale = val;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<i18n>
{
  "en": {
  },
  "cn": {
    "hello": "你好,我的世界！"
  }
}
</i18n>

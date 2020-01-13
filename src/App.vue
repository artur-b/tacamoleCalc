<template>
  <section id="app">
    <div class="container">
      <figure class="image container is-128x128">
        <img class="is-rounded" src="@/assets/top-logo.png"/>
      </figure>
      <Calc />
    </div>
  </section>
</template>

<script>
import Calc from './components/Calc.vue'

export default {
  name: 'app',
  components: {
    Calc
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>

<template>
  <div class="container">

    <div class="level">
      <div class="level-item level-left">
        <b-icon pack="fas" icon="fire"></b-icon>
        <h1 class="subtitle">Kalorie</h1>
      </div>
    </div>
    <div class="level">
      <div class="level-item notification is-info">
        <div class="subtitle">{{ caloriesSummary }} kcal</div>
      </div>
    </div>
    <div class="level">
      <div class="level-item level-left">
        <b-icon pack="fas" icon="tasks"></b-icon>
        <h1 class="subtitle">Wybrano</h1>
      </div>
    </div>
    <div class="level">
      <div class="level-item notification has-text-left">
        <ul>
          <li v-for="picked in pickedList" v-bind:key="picked">
            {{picked}}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    caloriesSummary: Number,
    pickedList: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1.subtitle {
  margin-left: 10px;
  margin-right: 20px;
}
ul {
  list-style-type: square;
}
</style>

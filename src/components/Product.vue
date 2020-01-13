<template>
  <div class="tile is-2 button" v-bind:class="getState()" @click="markMe()">
    <div class="columns is-multiline">
      <div class="column is-12 is-marginless">
        <figure class="image container is-96x96">
          <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png"/>
        </figure>
      </div>
      <div class="column is-12 is-paddingless">
        <p class="heading">{{product.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
    type: String
  },
  data: function() {
    return {
      isMarked: false
    }
  },
  methods: {
    markMe: function() {
      if(this.type == 'base') {
        this.$parent.activeBase = this.product.id;
        this.$parent.activeProtein = 0;
        // reset lower levels, disable other base products?
        this.$parent.caloriesSummary = this.product.calories;
      } else {
        this.$parent.activeProtein = this.product.id;
        // add only to base calories ;)
        this.$parent.caloriesSummary += this.product.calories;
      }
    },
    getState: function() {
      if(this.type == 'base') {
        return {
          'is-outlined': (this.$parent.activeBase == this.product.id) ? false : true,
          'is-info': (this.$parent.activeBase == this.product.id) ? true :false,
          'is-light': (this.$parent.activeBase == this.product.id) ? true :false
        }
      }
      if(this.type == 'protein') {
        return {
          'is-outlined': (this.$parent.activeProtein == this.product.id) ? false : true,
          'is-success': (this.$parent.activeProtein == this.product.id) ? true :false,
          'is-light': (this.$parent.activeProtein == this.product.id) ? true :false
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tile {
  padding-bottom: 10px;
}
</style>

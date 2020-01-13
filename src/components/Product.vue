<template>
  <div class="tile is-2 button" @click="addMe()" v-show="isVisible()">
    <div class="columns is-multiline">
      <div class="column is-12 is-marginless">
          <b-icon
            class="is-overlay is-checked"
            v-show="amiActive"
            size="is-small" type="is-success" pack="fas" icon="check-circle">
          </b-icon>
        <figure class="image container is-96x96">
          <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png"/>
        </figure>
      </div>
      <div class="column is-12 is-paddingless">
        <p class="heading" v-bind:class="{'has-text-info': amiActive}">{{product.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
    type: String,
    pick: String,
    amiActive: Boolean
  },
  data: function() {
    return {
      isMarked: false
    }
  },
  methods: {
    addMe: function() {
      if(this.type == 'base') {
        this.$parent.addBase(this.product);
      } else {
        this.$parent.toggleProduct(this.product, this.type, (this.pick == "one") ? true : false);
      }
      if (this.pick == "many") {
        this.isMarked = !this.isMarked;
      } else {
        this.isMarked = true;
      }
      this.$emit('changedId');
    },
    isVisible: function() {
      if (this.type == "base" && this.$parent.activeBase > 0) {
        return this.amiActive;
      }
      return true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tile {
  padding-bottom: 10px;
  min-height: 132px;
}
.is-checked {
  padding-top: 10px;
  padding-left: 20px;
}
</style>

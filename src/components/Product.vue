<template>
  <div class="tile is-2 button" @click="markMe(product.type)">
    <div class="columns is-multiline">
      <div class="column is-12 is-marginless">        
          <b-icon 
            class="is-overlay" 
            v-show="amiActive"
            size="is-small" type="is-success" pack="fas" icon="check-circle">
          </b-icon>
        <figure class="image container is-96x96">
          <img class="is-rounded" src="https://bulma.io/images/placeholders/96x96.png"/>
        </figure>
      </div>
      <div class="column is-12 is-paddingless">
        <p class="heading" :class="isPicked()">{{product.name}}</p>
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
    markMe: function() {
      if(this.type == 'base') {
        this.$parent.addBase(this.product);
      } else {        
        this.$parent.addProduct(this.product, this.type, (this.pick == "one") ? true : false);
      }
      this.isMarked = !this.isMarked;
    },
    isPicked: function() {
      if (this.amiActive) {
        return 'has-text-info';
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
.product-check {
  margin: 10px;
}
</style>

<template>

    <div class="columns">
    <div class="column is-10">

    <section class="section" id="level0">
      <div class="container">
        <div class="level">
          <div class="level-item level-left">
            <b-icon pack="fas" icon="tasks"></b-icon>
            <h1 class="subtitle">Wybierz danie</h1>
            <b-button class="is-small" v-bind:class="setHidden()" @click="resetList()">Reset</b-button>
          </div>
        </div>
        <div class="tile is-ancestor">
          <Product
            v-for="productItem in baseList.items"
            :key="productItem.id"
            :product="productItem"
            :type="baseList.level"
            :ref="'product' + productItem.id"
            />
        </div>
      </div>
    </section><!-- level0 //-->

    <section class="section" v-bind:class="setHidden()" id="level1">
      <div class="container">
        <div class="tile is-ancestor">
          <Product
            v-for="productItem in proteinList.items"
            v-bind:key="productItem.id"
            :product="productItem"
            :type="proteinList.level"
            />
        </div>
      </div>
    </section> <!-- level1 //-->

    <section class="section" v-bind:class="setHidden()" id="level1">
      <div class="container">
        <div class="tile is-ancestor">
          <Product
            v-for="productItem in fillingList.items"
            v-bind:key="productItem.id"
            :product="productItem"
            :type="proteinList.level"
            />
        </div>
      </div>
    </section> <!-- level2 //-->

    <!-- level3 //-->

    </div>
    <div class="column is-2">
      <div class="container">
        <div class="level">
          <div class="level-item level-left">
            <b-icon pack="fas" icon="fire"></b-icon>
            <h1 class="subtitle">Kalorie</h1>
          </div>
        </div>
        <div class="level">
          <b-message type="is-info">
            <div class="subtitle">{{caloriesSummary}} kcal</div>
          </b-message>
        </div>
      </div>
    </div>
    </div>

</template>

<script>
import Product from './Product'
import baseJson from '@/assets/base.json'
import proteinJson from '@/assets/protein.json'
import fillingJson from '@/assets/filling.json'

export default {
  name: 'Calc',
  data: function() {
    return {
      caloriesSummary: 0,
      baseList: baseJson,
      proteinList: proteinJson,
      fillingList: fillingJson,
      activeBase: 0,
      activeProtein: 0,
      activeFilling: []
    }
  },
  components: {
    Product
  },
  methods: {
    setHidden: function() {
      return {
        'is-hidden': (this.activeBase == 0)
      }
    },
    resetList: function() {
      this.activeBase = 0;
      this.activeProtein = 0;
      this.activeFilling = [];
      this.caloriesSummary = 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-size: 18px;
}
h1.subtitle {
  margin-left: 10px;
  margin-right: 20px;
}
.tile {
  margin: 5px;
}
.section {
  padding: 10px 5px;
}
</style>

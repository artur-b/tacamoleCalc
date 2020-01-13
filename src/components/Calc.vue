<template>
  <div class="box">
    <div class="columns">
      <div class="column is-9">

      <div class="container">
        <div class="level">
          <div class="level-item level-left">
            <b-icon pack="far" icon="hand-point-right"></b-icon>
            <h1 class="subtitle">Wybierz danie</h1>
            <b-button class="is-small is-info is-outlined" icon-left="" v-bind:class="setHidden()" @click="resetList()">
              <b-icon pack="fas" size="is-small" icon="redo"></b-icon>
              <span>Reset</span>
            </b-button>
<!--
            <b-button class="is-small" @click="debugMe()">Debug</b-button>
            //-->
          </div>
        </div>

        <div class="tile is-ancestor">
          <Product
            v-for="productItem in baseList.items"
            :key="productItem.id"
            :product="productItem"
            :type="baseList.level"
            :pick="baseList.pick"
            :amiActive="(productItem.id == activeBase) ? true : false"
            :ref="'product' + productItem.id"
            @changedId="updateActive(baseList.level)"
            />
        </div>
      </div><!-- level0 //-->

      <div class="container" v-bind:class="setHidden()">
        <div class="tile is-ancestor">
          <Product
            v-for="productItem in proteinList.items"
            v-bind:key="productItem.id"
            :product="productItem"
            :type="proteinList.level"
            :pick="proteinList.pick"
            :amiActive="(productItem.id == activeProtein) ? true : false"
            @changedId="updateActive(proteinList.level)"
            />
        </div>
      </div> <!-- level1 //-->

      <div class="container" v-bind:class="setHidden()">
        <div class="tile is-ancestor">
          <Product
            v-for="productItem in fillingList.items"
            v-bind:key="productItem.id"
            :product="productItem"
            :type="fillingList.level"
            :pick="fillingList.pick"
            :amiActive="activeFilling.includes(productItem.id)"
            @changedId="updateActive(fillingList.level)"
            />
        </div>
      </div> <!-- level2 //-->

      <div class="container" v-bind:class="setHidden()">
        <div class="tile is-ancestor">
          <Product
            v-for="productItem in addonsList.items"
            v-bind:key="productItem.id"
            :product="productItem"
            :type="addonsList.level"
            :pick="addonsList.pick"
            :amiActive="activeAddons.includes(productItem.id)"
            @changedId="updateActive(addonsList.level)"
            />
        </div>
      </div> <!-- level3 //-->

    </div> <!-- column is-10 //-->
    <div class="column is-3">
      <Summary :caloriesSummary="caloriesSummary" :pickedList="getReadableList()"/>
    </div>
    </div>
  </div>
</template>

<script>
import Product from './Product'
import Summary from './Summary'
import pickedMixin from '@/mixins/pickedMixin'
import baseJson from '@/assets/base.json'
import proteinJson from '@/assets/protein.json'
import fillingJson from '@/assets/filling.json'
import addonsJson from '@/assets/addons.json'

export default {
  name: 'Calc',
  data: function() {
    return {
      activeBase: 0,
      activeProtein: 0,
      activeFilling: [],
      activeAddons: [],
      levelShown: 0,
      baseList: baseJson,
      proteinList: proteinJson,
      fillingList: fillingJson,
      addonsList: addonsJson
    }
  },
  components: {
    Product,
    Summary
  },
  mixins: [pickedMixin],
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
      this.activeAddons = [];
      this.levelShown = 0;
      this.clearBase();
    },
    debugMe: function() {
      console.log("DEBUG:");
      console.log(this.pickedList);
    },
    updateActive: function(type) {
      if (type == "base") {
        if(this.pickedList["base"] && this.pickedList["base"].length > 0) {
          this.activeBase = this.pickedList["base"][0].id;
        }
      } else if (type == "protein") {
        if(this.pickedList["protein"] && this.pickedList["protein"].length > 0) {
          this.activeProtein = this.pickedList["protein"][0].id;
        }
      } else if (type == "filling") {
        this.activeFilling = [];
        for (var pf in this.pickedList["filling"]) {
          this.activeFilling.push(this.pickedList["filling"][pf].id);
        }
      } else if (type == "addons") {
        this.activeAddons = [];
        for (var pa in this.pickedList["addons"]) {
          this.activeAddons.push(this.pickedList["addons"][pa].id);
        }
      }
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
.box {
  margin-top: -20px;
}
.is-ancestor {
  padding-bottom: 10px;
}
</style>

// src/mixins/pickedMixin.js
export default {
  data: function() {
    return {
      pickedList: [],
      caloriesSummary: 0
    }
  },
  methods: {
    addBase: function(product) {
      this.pickedList = [];
      this.pickedList["base"] = [product];
      this.caloriesSummary = this.getCaloriesSummary();
    },
    clearBase: function() {
      // clear all
      this.pickedList = [];
      this.caloriesSummary = 0;
    },
    toggleProduct: function(product, type, exclusive) {
      if (exclusive) {
        this.pickedList[type] = [product];
      } else {
        if (this.pickedList[type] == undefined) {
            this.pickedList[type] = [product];
        } else {
          if (this.pickedList[type].includes(product)) {
            //delete product
            var idx = this.pickedList[type].indexOf(product);
            if (idx >= 0) {
              this.$delete(this.pickedList[type], idx);
            }
          } else {
            this.pickedList[type].push(product);
          }
        }
      }
      this.caloriesSummary = this.getCaloriesSummary();
    },
    getReadableList: function() {
      var readable = [];
      for (var key in this.pickedList) {
        var itemList = this.pickedList[key];
        var el = "";
        if (key == "base") {
          var firstItem = itemList[0];
          el = firstItem.name;
          if (firstItem.includes != "") {
            el += " (" + firstItem.includes + ")";
          }
          el += ": " + firstItem.calories + "kcal";
          readable.push(el);
        } else {
          for (var i in itemList) {
            el = itemList[i].name;
            el += ": " + itemList[i].calories + "kcal";
            readable.push(el);
          }
        }
      }
      return readable;
    },
    getCaloriesSummary: function() {
      var nutrition = 0;
      for (var key in this.pickedList) {
        var itemList = this.pickedList[key];
        for (var i in itemList) {
          var cal = itemList[i].calories;
          nutrition += cal;
        }
      }
      return nutrition;
    }
  },
}
//view raw

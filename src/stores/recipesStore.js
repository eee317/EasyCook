import axios from 'axios'
import { defineStore } from 'pinia'
export default defineStore('recipesStore', {
  state: () => ({
    recipes: [],
    isLoading: true,
    recipe: []
  }),
  actions: {
    getRecipes () {
      axios.get(`${process.env.VUE_APP_API}recipe`)
        .then(res => {
          this.recipes = res.data
          console.log(this.recipes)
          console.log(this.recipes.length)
          setTimeout(this.isLoading = false, 2000)
        })
    },
    getTheRecipeData (id) {
      console.log('finsh' + id)
      console.log('store' + this.recipe)
      this.recipe = []
      axios.get(`${process.env.VUE_APP_API}recipe/?id=${id}`)
        .then(res => {
          this.recipe = res.data[0]
          console.log(this.recipe)
          console.log(this.recipe.title)
          setTimeout(this.isLoading = false, 2000)
        })
    }
  }
})

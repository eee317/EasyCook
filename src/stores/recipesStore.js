import axios from 'axios'
import { defineStore } from 'pinia'

export default defineStore('recipesStore', {
  state: () => ({
    recipes: [],
    isLoading: true
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
    }
  }
})

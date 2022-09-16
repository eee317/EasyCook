<template>
  <searchform></searchform>
  <div class="container mt-10">
    <div class="row">
      <h2 class="text-dark-green text-start mb-6">共 {{recipes.length}} 道食譜</h2>
      <div class="col-md-6 mb-5" v-for="recipe in recipes" :key="recipe.id">
          <div class="card border-0 h-100 bg-bright-green p-4 py-lg-6 py-lg-7" style="">
            <div class="row g-0 flex-nowrap align-items-center align-items-lg-start">
              <div class="col-md-4 col-3 line-lg-before">
                  <router-link to="recipesContent" class="text-reset text-decoration-none">
                  <img
                      class="w-100
                        w-sm-75 w-lg-75
                        img-fluid
                        border border-2 border-card-green-100
                        rounded-2
                      "
                      :src="`${recipe.image}`"
                      :alt="`${recipe.title}`.jpg"
                    />
                    <button class="text-card-green-300 d-lg-none btn d-inline-block text-center">查看食譜</button>
                    </router-link>
                  <button class="text-center mt-3 py-2 px-4 btn btn-primary text-own-white rounded-pill align-middle d-lg-inline-block d-none">
                          <i class="fa-solid fa-utensils fs-6 me-3"></i>加入餐點
                    </button>
              </div>
              <div class="col-md-8 col-9">
                <div class="card-body ms-lg-10 text-start d-flex align-items-center justify-content-between p-0">
                    <router-link to="recipesContent" class="text-reset text-decoration-none">
                      <div class="card-body p-md-0 text-start text-dark-green ">
                        <h6 class="card-title fs-lg-5">{{recipe.title}}</h6>
                        <p class="card-text m-0 text-own-orange">{{recipe.time}} 分鐘</p>
                        <p class="card-text m-0">{{recipe.meatAndVegetable}}</p>
                        <p class="card-text m-0">食材：
                          <span class="card-text m-0"  v-for="ingredients in recipe.ingredients" :key="ingredients+'recipe'">{{ingredients.ingredientsName}} <span v-if="ingredients.length>=2">、</span> </span>
                        </p>
                      </div>
                    </router-link>
                  <button class="btn text-primary d-lg-none  w-lg-15">
                        <i class="fa-solid fa-utensils px-2 px-sm-5 px-md-2 fs-5"></i>
                  </button>
                </div>
              </div>
            </div>
            <router-link to="recipesContent" class="btn-search-more btn text-card-green-300 fw-bold d-none d-lg-inline-block position-absolute">查看食譜</router-link>
          </div>
      </div>
    </div>
  </div>
  <loadingPage :isLoading='isLoading'></loadingPage>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import recipesStore from '@/stores/recipesStore'
import searchform from '@/components/SearchForm.vue'
export default {
  data () {
    return {
      // recipes: []
    }
  },
  computed: {
    ...mapState(recipesStore, ['recipes', 'isLoading'])
  },
  components: {
    searchform
  },
  methods: {
    ...mapActions(recipesStore, ['getRecipes'])
    // getRecipes () {
    //   this.$http.get(`${process.env.VUE_APP_API}recipe`)
    //     .then(res => {
    //       this.recipes = res.data
    //       console.log(this.recipes)
    //       console.log(this.recipes.length)
    //     })
    // }
  },
  mounted () {
    this.getRecipes()
  }
}
</script>

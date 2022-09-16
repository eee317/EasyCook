<template>
  <searchform></searchform>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="border-2 border-card-img-green-200 border-top border-bottom py-6 d-lg-flex justify-content-lg-between align-items-lg-center">
          <h1 class="text-center text-dark-green m-0">{{recipe.title}}</h1>
          <button class="d-inline-block text-center mt-3 mt-lg-0 py-2 px-6 btn btn-primary text-own-white rounded-pill align-middle fs-6">
            <i class="fa-solid fa-utensils fs-6 me-3"></i>加入餐點
          </button>
        </div>
        <div class="mt-5 mb-4 d-flex">
          <span class="badge rounded-pill bg-own-bright-blue text-start px-4 py-3 me-3 fs-6"><i class="fa-solid fa-clock me-2"></i>可放置</span>
          <span class="badge rounded-pill bg-own-orange text-start px-4 py-3 fs-6"><i class="fa-solid fa-carrot me-2"></i>素</span>
        </div>
        <div>
          <div class="recipesContent-img d-none d-lg-block" :style="{'background-image': 'url(' + this.recipe.image + ')'}"></div>
          <img class="img-fluid rounded-2 border border-2 border-card-img-green-200 float-lg-start d-lg-none"
          :src="recipe.image"
                        :alt="recipe.title+'jpg'">
        </div>
        <div class="text-start mt-lg-20 mt-10">
          <ul class="text-dark-green recipecContent-after">
            <li class="d-flex align-items-center mb-4 mb-lg-10">
              <h2 class="m-0 pe-4 pe-lg-10">時間</h2>
              <p class="flex-grow-1 fs-6 fs-lg-5 border-bottom border-2 border-card-img-green-200 m-0 me-3 py-3">{{recipe.time}} 分鐘</p>
            </li>
            <li class="d-flex align-items-center mb-4 mb-lg-10">
              <h2 class="m-0 pe-4 pe-lg-10">人數</h2>
              <p class="flex-grow-1 fs-6 fs-lg-5 border-bottom border-2 border-card-img-green-200 m-0 me-3 py-3">1 / 人</p>
            </li>
            <li class="d-flex align-items-center mb-4 mb-lg-10">
              <h2 class="m-0 pe-4 pe-lg-10">食材</h2>
              <div class="d-flex flex-grow-1 border-bottom border-2 border-card-img-green-200">
                <p v-for="ingredient in recipe.ingredients" :key="ingredient+recipe.id+'食材'"
                class=" fs-6 fs-lg-5 m-0 me-6 py-3">{{ingredient.ingredientsName}} {{ingredient.unit}} {{ingredient.ingredientsNuit}}</p>
              </div>
            </li>
            <li class="d-flex align-items-center mb-4 mb-lg-10">
              <h2 class="m-0 pe-4 pe-lg-10">醬料</h2>
              <div class="d-flex flex-grow-1 border-bottom border-2 border-card-img-green-200">
                <p v-for="sauce in recipe.sauce" :key="sauce+recipe.id+'醬料'"
                class="fs-6 fs-lg-5 m-0 me-6 py-3">{{sauce}}</p>
              </div>
            </li>
            <li class="d-flex align-items-center">
              <h2 class="m-0 pe-4 pe-lg-10">設備</h2>
              <div class="d-flex flex-grow-1 border-bottom border-2 border-card-img-green-200">
                <p v-for="equipment in recipe.equipment" :key="equipment+recipe.id+'用具'"
                class="fs-6 fs-lg-5 m-0 me-6 py-3">{{equipment}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-15">
          <ul class="text-dark-green">
            <li v-for="step in recipe.step" :key="step+recipe.id+'step'"
            class="d-flex align-items-start mb-7">
              <span class="d-block py-3 py-lg-5 px-7 px-lg-10 bg-card-green-100 m-0 fs-2 recipecContent-step me-4">{{recipe.step.indexOf(step)+1}}</span><p class="m-0 py-5 py-lg-8 px-7 bg-bright-green flex-grow-1 text-start fs-6 recipecContent-text">{{step}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="recipesContent-bg mb-20">
    <div class="container">
      <div class="row justify-content-center mt-20">
      <div class="col-lg-11">
        <div class="p-7 text-own-white position-relative">
          <h2 class="d-block d-md-inline-block py-md-5 pe-md-3 drop-shadow">{{recipe.title}}</h2>
          <h5 class="d-inline-block drop-shadow">的小筆記</h5>
          <div class="drop-shadow mb-10 mt-5 mt-md-0">
            <p v-for="other in recipe.other" :key="other+recipe.id"
            class="fw-bold">{{other}}</p>
          </div>
          <button class="position-absolute bottom-0 start-50 translate-middle-x
          d-inline-block text-center mt-3 mt-lg-0 py-2 px-6 btn btn-primary text-own-white rounded-pill align-middle fs-6">
            <i class="fa-solid fa-utensils fs-6 me-3"></i>加入餐點
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="container my-10 pt-lg-10 pt-md-5 pb-10">
    <div class="row justify-content-center">
      <div class="col-lg-8">
      <h2 class="text-dark-green text-start">你也許會喜歡</h2>
        <recipesswiper></recipesswiper>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import recipesStore from '@/stores/recipesStore'
import searchform from '@/components/SearchForm.vue'
import recipesswiper from '@/components/recipesSwiper.vue'
export default {
  data () {
    return {
      text: 0
    }
  },
  components: {
    searchform,
    recipesswiper
  },
  computed: {
    ...mapState(recipesStore, ['recipes', 'isLoading', 'recipe'])
  },
  methods: {
    ...mapActions(recipesStore, ['getRecipes', 'getTheRecipeData']),
    getTheRecipe () {
      console.log('123---' + this.$route.params.id)
      this.getTheRecipeData(this.$route.params.id)
      console.log('page--' + this.recipes)
      console.log('none')
    }
  },
  mounted () {
    this.getTheRecipe()
  }
}
</script>

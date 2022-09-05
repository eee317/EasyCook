<template>
  <searchform></searchform>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="border-2 border-card-img-green-200 border-top border-bottom py-6">
          <h1 class="text-center text-dark-green m-0">炒玉米筍</h1>
          <button class="d-inline-block text-center mt-3 py-2 px-6 btn btn-primary text-own-white rounded-pill align-middle fs-6">
            <i class="fa-solid fa-utensils fs-6 me-3"></i>加入餐點
          </button>
        </div>
        <div class="mt-4 mb-2 d-inline-block float-start">
          <span class="badge rounded-pill bg-own-bright-blue text-start px-4 py-3 me-3 fs-6"><i class="fa-solid fa-clock me-2"></i>可放置</span>
          <span class="badge rounded-pill bg-own-orange text-start px-4 py-3 fs-6"><i class="fa-solid fa-carrot me-2"></i>素</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import searchform from '@/components/SearchForm.vue'
export default {
  components: {
    searchform
  }
}
</script>

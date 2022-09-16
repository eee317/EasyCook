<template>
  <div class="container">
    <h1 class="text-dark-green mt-10">食材與廚房用品</h1>
    <p class="text-dark-green fs-sm-5">在這裡為您介紹常見的食材與廚房用品</p>
  </div>
  <div class="container mt-5">
    <div class="row mb-5">
      <div class="food-nav">
        <ul class="nav nav-pills mb-3 fs-md-5" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click="runFilter('全部')" class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">全部</button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click="runFilter('食材')" class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">食材</button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click="runFilter('醬料')" class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">醬料</button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click="runFilter('廚房用品')" class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">廚房用品</button>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="FASfilter.length>0" class="row" v-masonry transition-duration="0.3s" item-selector=".item">
      <div class="col-md-4 item mb-5" v-masonry-tile v-for="card in FASfilter" :key="card.id+`${card.stuffName}`">
            <div class="card border-card-green-300    bg-bright-green-opacity text-dark-green">
              <div class="card-body text-start">
                <div class="d-flex justify-content-between align-items-center">
                  <h4 class="card-title flex-grow-1 py-2">{{card.stuffName}}</h4>
                  <span v-if="card.tag==='食材'" class="badge bg-primary px-3 py-2 mb-2 text-end rounded-pill d-block">{{card.tag}}</span>
                  <span v-else-if="card.tag==='醬料'" class="badge bg-own-brown px-3 py-2 mb-2 text-end rounded-pill d-block">{{card.tag}}</span>
                  <span v-else class="badge bg-own-orange px-3 py-2 mb-2 text-end rounded-pill d-block">{{card.tag}}</span>
                </div>
                <p class="card-text color-dark-green-lighten lh-lg">{{card.directions}}</p>
              </div>
            </div>
          </div>
    </div>
    <div v-else class="row"  v-masonry transition-duration="0.3s" item-selector=".item">
          <div class="col-md-4 item mb-5" v-masonry-tile v-for="card in FASdata" :key="card.id+`${card.stuffName}`">
            <div class="card border-card-green-300    bg-bright-green-opacity text-dark-green">
              <div class="card-body text-start">
                <div class="d-flex justify-content-between align-items-center">
                  <h4 class="card-title flex-grow-1 py-2">{{card.stuffName}}</h4>
                  <span v-if="card.tag==='食材'" class="badge bg-primary px-3 py-2 mb-2 text-end rounded-pill d-block">{{card.tag}}</span>
                  <span v-else-if="card.tag==='醬料'" class="badge bg-own-brown px-3 py-2 mb-2 text-end rounded-pill d-block">{{card.tag}}</span>
                  <span v-else class="badge bg-own-orange px-3 py-2 mb-2 text-end rounded-pill d-block">{{card.tag}}</span>
                </div>
                <p class="card-text color-dark-green-lighten lh-lg">{{card.directions}}</p>
              </div>
            </div>
          </div>
        </div>
  </div>
  <loadingPage :isLoading='isLoading'></loadingPage>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import foodAndSupplies from '@/stores/FoodAndSuppliesStore'
export default {
  computed: {
    ...mapState(foodAndSupplies, ['FASdata', 'FASfilter', 'isLoading'])
  },
  methods: {
    ...mapActions(foodAndSupplies, ['getFAS', 'runFilter'])
  },
  mounted () {
    this.getFAS()
  }
}
</script>

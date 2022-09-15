<template>
  <div class="container">
    <h1 class="text-dark-green mt-10">食材與廚房用品</h1>
    <p class="text-dark-green fs-sm-5">在這裡為您介紹常見的食材與廚房用品</p>
  </div>
  <div class="container mt-5">
        <div class="row"  v-masonry transition-duration="0.3s" item-selector=".item">
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
</template>
<script>
import { mapState, mapActions } from 'pinia'
import foodAndSupplies from '@/stores/FoodAndSuppliesStore'
export default {
  computed: {
    ...mapState(foodAndSupplies, ['FASdata'])
  },
  methods: {
    ...mapActions(foodAndSupplies, ['getFAS'])
  },
  mounted () {
    this.getFAS()
  }
}
</script>

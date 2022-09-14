<template>
  <div class="read-bg my-5 my-md-10">
    <img class="img-fluid w-50 w-md-40 w-lg-30" src="../../../src/libs/img/illustrations/undraw_books_re_8gea.svg" alt="">
  </div>
<div class="read-bg-big">
  <h1 class="text-dark-green">閱讀說明</h1>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-10 mx-auto">
        <div class="row"  v-masonry transition-duration="0.3s" item-selector=".item">
          <div class="col-md-6 item mb-3" v-masonry-tile>
            <div class="card border-card-green-300    bg-bright-green-opacity text-dark-green">
              <div class="card-body text-start">
              <h4 class="card-title py-2">我的餐點</h4>
              <p class="card-text color-dark-green-lighten">可以將今日要下廚的食譜加入餐車，將為您計算今日餐點所需準備的食材、花費的時間。設定人數，方便決定食材的購買數量。當人數為 1 人時，食材單位會有小數點，請自行斟酌拿捏食材的數量。</p>
            </div>
            </div>
          </div>
          <div class="col-md-6 item mb-3" v-masonry-tile>
            <div class="card border-card-green-300 bg-bright-green-opacity text-dark-green">
            <div class="card-body text-start">
              <h4 class="card-title py-2">食譜搜尋</h4>
              <p class="card-text color-dark-green-lighten">可以透過關鍵字、食材搜尋食材，想體驗不同電器也可以進階搜尋。</p>
            </div>
          </div>
          </div>
          <div class="col-md-6 item mb-3" v-masonry-tile>
            <div class="card border-card-green-300 bg-bright-green-opacity text-dark-green">
            <div class="card-body text-start">
              <h4 class="card-title py-2">組合推薦</h4>
              <p class="card-text color-dark-green-lighten">懶得想今天要煮什麼晚餐，這裡為您推薦不錯的組合，可以一次加入餐車哦！</p>
            </div>
          </div>
          </div>
          <div class="col-md-6 item mb-3" v-masonry-tile>
            <div class="card border-card-green-300 bg-bright-green-opacity text-dark-green">
            <div class="card-body text-start">
              <h4 class="card-title py-2">冰箱</h4>
              <p class="card-text color-dark-green-lighten">可以在冰箱輸入你目前有的食材，計算今日餐點所需準備的食材會扣除冰箱的食材，方便您採購食材。</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

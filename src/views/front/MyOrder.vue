<template>
  <div class="container">
    <h1 class="text-dark-green mt-15">我的餐車</h1>
  </div>
  <div class="container mt-lg-15">
    <div class="row justify-content-md-between flex-md-row-reverse">
      <div class="col-lg-9 col-md-8">
        <div class="d-flex d-lg-inline my-5 float-md-end">
          <button type="button" class="flex-fill flex-lg-grow-0 flex-lg-shrink-0 btn btn-outline-primary tl-bl-radius radius-md-all  py-3 px-5 px-md-7 me-md-4 fs-md-5"><i class="me-2 align-middle h3
                fa-solid fa-circle-xmark"></i>清除所有餐點</button>
          <button type="button" class="flex-fill flex-lg-grow-0 flex-lg-shrink-0 btn btn-primary tr-br-radius radius-md-all text-own-white py-3 px-5 fs-md-5"><i class="me-2 align-middle h3 fa-solid fa-book-open"></i>逛逛食譜</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4">
        <select class="form-select py-3 mb-6 mb-md-0 my-md-5 px-5 px-md-7 rounded-pill shadow  border-0
                fs-md-5" aria-label="Default select example">
          <option selected class="">1 / 人</option>
          <option value="2">2 / 人</option>
          <option value="3">3 / 人</option>
          <option value="4">4 / 人</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="myOrder-order">
        <table class="w-100 my-5 table table-striped ">
          <thead class="fs-md-5 text-card-green-300">
            <tr>
              <th scope="col"></th>
              <th scope="col" class="d-none d-lg-table-cell" width="180"></th>
              <th scope="col">餐點</th>
              <th scope="col">食材</th>
              <th scope="col">放置時間</th>
              <th scope="col" width="120">花費時間</th>
            </tr>
          </thead>
          <tbody class="text-dark-green bg-bright-green">
            <tr v-for="order in orders" :key="order.id+'order'">
              <th scope="row" class="py-4  border-0 rounded-start align-middle">
                <i class="text-card-green-300 h3
                fa-solid fa-circle-xmark m-0"></i>
              </th>
              <td class="py-4 d-none d-lg-table-cell "><img width="180" class="img-fluid rounded-2 border border-card-green-300 border-2 rounded-2"
              :src="`${order.image}`" alt="" ></td>
              <td class="py-4 border-0 align-middle fs-lg-6">{{order.title}}</td>
              <td class="py-4 border-0 align-middle fs-lg-6">
                <p v-for="ingredient in order.ingredients"   :key="ingredient" class="text-start text-primary m-0 lh-lg">
                  {{ingredient.ingredientsName}}
                  <span class="text-dark-green">
                    / {{ingredient.unit}} {{ingredient.ingredientsNuit}}
                  </span>
                </p></td>
              <td class="py-4 border-0 align-middle fs-lg-6">
                {{order.overlappingTime}}
              </td>
              <td class="py-4 border-0 align-middle rounded-end fs-lg-6">{{order.time}} 分</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="text-dark-green">
              <td class="border-0 pt-6"></td>
              <td class="border-0 d-none d-lg-table-cell pt-8"></td>
              <td class="border-0 pt-6"></td>
              <td class="border-0 pt-6"></td>
              <td class="border-0 pt-6 fs-lg-6">烹飪時間 / 分</td>
              <td class="border-0 pt-6 fs-lg-6">{{timeTotal}} 分</td>
            </tr>
            <tr class="text-dark-green">
              <td class="border-0"></td>
              <td class="border-0 d-none d-lg-table-cell"></td>
              <td class="border-0"></td>
              <td class="border-0"></td>
              <td class="border-bottom border-3 border-card-img-green-200 fs-lg-6">放置時間 / 分</td>
              <td class="border-bottom border-3 border-card-img-green-200 fs-lg-6">{{overlappingTimeTotal}} 分</td>
            </tr>
            <tr class="text-dark-green fw-bold">
              <td class="border-0"></td>
              <td class="border-0 d-none d-lg-table-cell"></td>
              <td class="border-0"></td>
              <td class="border-0"></td>
              <th class="py-4 border-0 fs-lg-6">總烹飪時間 / 分</th>
              <td class="py-4 border-0 fs-lg-6">{{cookTimeTotal}} 分</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
  <div class="myOrder-equipment-bg py-10 mt-7 mt-md-15">
    <div class="container">
      <div class="row">
        <h2 class=" text-dark-green text-lg-start">所需的廚房用品</h2>
        <div class="">
          <table class="w-100 my-5 table ">
            <thead class="fs-md-5 text-card-green-300 border-2">
              <tr class="border-bottom border-card-green-300">
                <th scope="col"></th>
                <th scope="col" class="d-none d-lg-table-cell" width="180"></th>
                <th scope="col">餐點</th>
                <th scope="col">廚具用品</th>
                <th scope="col">醬料</th>
              </tr>
            </thead>
            <tbody class="text-dark-green">
              <tr class="border-bottom border-card-green-300 border-1"
              v-for="order in orders" :key="order.id+'order'">
                <th scope="row" class="py-4  rounded-start align-middle">
                  <i class="text-card-green-300 h3
                  fa-solid fa-circle-xmark m-0"></i>
                </th>
                <td class="py-4 d-none d-lg-table-cell  border-card-green-300"><img width="100" class="img-fluid rounded-2 border border-card-green-300 border-2 rounded-2"
                :src="`${order.image}`" :alt="`${order.title}.jpg`" ></td>
                <td class="py-4 border-card-green-300 align-middle fs-lg-6">{{order.title}}</td>
                <td class="py-4 border-top border-card-green-300 align-middle fs-lg-6">
                  <p class="m-0" v-if="order.equipment.length===0"> - </p>
                  <p v-for="equipment in order.equipment"   :key="equipment" class="m-0 lh-base">
                    {{equipment}}
                  </p></td>
                <td class="py-4 border-card-green-300 align-middle fs-lg-6">
                  <p class="m-0" v-if="order.sauce.length===0"> - </p>
                  <p v-for="sauce in order.sauce"   :key="sauce" class="m-0 lh-base">
                    {{sauce}}
                  </p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-8 text-start mb-lg-4">
        <h2 class="text-md-center text-dark-green mt-15 mt-lg-20 mb-5">我的冰箱還有食材</h2>
        <p class="text-dark-green m-0 pb-5 fs-lg-6">發現前幾天煮完飯還有剩餘的食材，請先設定冰箱有哪些食材，幫您計算還需要購買多少食材。</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4 col-lg-5 mb-5">
        <div class="card border-0 bg-bright-green pb-2 h-100">
          <div class="card-body p-0">
            <div class="border-bottom border-1 d-flex justify-content-between align-items-center py-3 py-lg-5 px-5">
              <h5 class="card-title text-own-brown text-start m-0 fs-lg-5">我的冰箱</h5>
              <button type="button" class="btn btn-primary text-own-white rounded-pill border-0"><i class="me-3 fa-solid fa-circle-plus align-middle"></i>新增</button>
            </div>
            <div class="d-flex justify-content-between align-items-center py-3 px-5 text-own-brown">
              <h6 class="color-own-brown-lighten ms-4 fs-lg-6">食材名稱</h6>
              <h6 class="color-own-brown-lighten me-4 fs-lg-6">數量</h6>
            </div>
            <div class="text-own-brown px-5 d-flex mb-3">
              <input class="px-4 py-3 form-control tl-bl-radius border-0 border-top border-bottom border-start border-own-brown text-own-brown fs-lg-6" type="text" placeholder="請輸入文字" aria-label="default input example" value="百香果">
              <input class="pe-5 py-3 form-control tr-br-radius tl-bl-radius text-end border-0 border-top border-end border-bottom border-start border-own-brown text-own-brown fs-lg-6" type="number" placeholder="請輸入數字" aria-label="default input example" value="1">
            </div>
          </div>
        </div>
      </div>
      <div class="mb-10 mt-5 col-md-4 ">
        <h2 class="h1 fs-md-3 fw-bold text-own-orange">冰箱設定完成</h2>
        <div class="myOrder-finishBg py-4">
          <img class="img-fluid w-40"
          src="../../../src/libs/img/illustrations/undraw_join_re_w1lh.svg" alt="前往下一步.svg">
        </div>
        <router-link to="/comparison" class="btn btn-own-orange text-own-white py-3 py-md-2 px-7 px-md-7 fs-6 rounded-pill"><i class="fa-brands fa-golang align-middle me-3 fs-3"></i>前往比對</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import myOrderStore from '@/stores/myOrderStore'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(myOrderStore, ['orders', 'timeTotal', 'overlappingTimeTotal', 'cookTimeTotal'])
  },
  methods: {
    ...mapActions(myOrderStore, ['getMyOrder'])
  },
  mounted () {
    this.getMyOrder()
  }
}
</script>

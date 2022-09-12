<template>
  <div class="container">
    <h1 class="text-dark-green mt-15">我的餐車</h1>
  </div>
  <div class="container mt-15">
    <div class="row justify-content-md-between flex-md-row-reverse">
      <div class="col-lg-9 col-md-8">
        <div class="d-flex d-lg-inline my-5 float-md-end">
          <button type="button" class="flex-fill flex-lg-grow-0 flex-lg-shrink-0 btn btn-outline-primary tl-bl-radius radius-md-all  py-3 py-md-5 px-5 px-md-7 me-md-4 fs-5"><i class="me-2 align-middle h3
                fa-solid fa-circle-xmark"></i>清除所有餐點</button>
          <button type="button" class="flex-fill flex-lg-grow-0 flex-lg-shrink-0 btn btn-primary tr-br-radius radius-md-all text-own-white py-3 py-md-5 px-5 fs-5"><i class="me-2 align-middle h3 fa-solid fa-book-open"></i>逛逛食譜</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-4">
        <select class="form-select py-3 py-md-5 mb-6 mb-md-0 my-md-5 px-5 px-md-7 rounded-pill shadow  border-0
                fs-5" aria-label="Default select example">
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
              <th scope="col">花費時間</th>
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
                <p v-for="ingredient in order.ingredients"   :key="ingredient" class="m-0 lh-base">
                  {{ingredient.ingredientsName}}
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
              <td class="border-0 pt-6 fs-lg-6">20 分</td>
            </tr>
            <tr class="text-dark-green">
              <td class="border-0"></td>
              <td class="border-0 d-none d-lg-table-cell"></td>
              <td class="border-0"></td>
              <td class="border-0"></td>
              <td class="border-bottom border-3 border-card-img-green-200 fs-lg-6">放置時間 / 分</td>
              <td class="border-bottom border-3 border-card-img-green-200 fs-lg-6">0 分</td>
            </tr>
            <tr class="text-dark-green fw-bold">
              <td class="border-0"></td>
              <td class="border-0 d-none d-lg-table-cell"></td>
              <td class="border-0"></td>
              <td class="border-0"></td>
              <th class="py-4 border-0 fs-lg-6">放置時間 / 分</th>
              <td class="py-4 border-0 fs-lg-6">20 分</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <h2 class="h1 text-dark-green mt-15 text-lg-start">所需的廚房用品</h2>
      <div class="myOrder-equipment">
        <table class="w-100 my-5 table ">
          <thead class="fs-md-5 text-card-green-300">
            <tr>
              <th scope="col"></th>
              <th scope="col" class="d-none d-lg-table-cell" width="180"></th>
              <th scope="col">餐點</th>
              <th scope="col">廚具用品</th>
              <th scope="col">醬料</th>
            </tr>
          </thead>
          <tbody class="text-dark-green">
            <tr v-for="order in orders" :key="order.id+'order'">
              <th scope="row" class="py-4  rounded-start align-middle">
                <i class="text-card-green-300 h3
                fa-solid fa-circle-xmark m-0"></i>
              </th>
              <td class="py-4 d-none d-lg-table-cell "><img width="180" class="img-fluid rounded-2 border border-card-green-300 border-2 rounded-2"
              :src="`${order.image}`" alt="" ></td>
              <td class="py-4 align-middle fs-lg-6">{{order.title}}</td>
              <td class="py-4 align-middle fs-lg-6">
                <p v-for="equipment in order.equipment"   :key="equipment" class="m-0 lh-base">
                  {{equipment}}
                </p></td>
              <td class="py-4 align-middle fs-lg-6">
                <p v-for="sauce in order.sauce"   :key="sauce" class="m-0 lh-base">
                  {{sauce}}
                </p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import myOrderStore from '@/stores/myOrderStore'
export default {
  computed: {
    ...mapState(myOrderStore, ['orders'])
  },
  methods: {
    ...mapActions(myOrderStore, ['getMyOrder'])
  },
  mounted () {
    this.getMyOrder()
  }
}
</script>

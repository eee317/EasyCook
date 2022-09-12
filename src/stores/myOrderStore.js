import axios from 'axios'
import { defineStore } from 'pinia'
export default defineStore('myOrderStore', {
  state: () => ({
    orders: []
  }),
  actions: {
    getMyOrder () {
      axios.get(`${process.env.VUE_APP_API}cart`)
        .then(res => {
          this.orders = res.data
          console.log(this.orders)
          console.log(this.orders.length)
        })
    }
  }
})

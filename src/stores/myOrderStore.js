import axios from 'axios'
import { defineStore } from 'pinia'
export default defineStore('myOrderStore', {
  state: () => ({
    orders: [],
    timeTotal: 0,
    overlappingTimeTotal: 0,
    cookTimeTotal: 0
  }),
  actions: {
    getMyOrder () {
      axios.get(`${process.env.VUE_APP_API}cart`)
        .then(res => {
          this.orders = res.data
          console.log(this.orders)
          console.log(this.orders.length)
          this.runTimeTotal()
          this.runOverlappingTimeTotal()
          this.runCookTimeTotal()
        })
    },
    runTimeTotal () {
      this.timeTotal = 0
      this.overlappingTimeTotal = 0
      this.cookTimeTotal = 0
      for (let i = 0; i < this.orders.length; i++) {
        this.timeTotal += this.orders[i].time
      }
    },
    runOverlappingTimeTotal () {
      for (let i = 0; i < this.orders.length; i++) {
        this.overlappingTimeTotal += this.orders[i].overlappingTime
      }
    },
    runCookTimeTotal () {
      this.cookTimeTotal = this.timeTotal - this.overlappingTimeTotal
    }
  }
})

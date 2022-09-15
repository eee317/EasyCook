import axios from 'axios'
import { defineStore } from 'pinia'
export default defineStore('foodAndSuppliesStore', {
  state: () => ({
    FASdata: [],
    FASfilter: []
  }),
  actions: {
    getFAS () {
      axios.get(`${process.env.VUE_APP_API}commonStuff`)
        .then(res => {
          this.FASdata = res.data
          console.log(this.FASdata)
        })
    },
    runFilter (tag) {
      this.FASfilter = this.FASdata.filter(item => item.tag === tag)
    }
  }
})

import Vue from 'vue'

let methods = {
  formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ', ')
  },
  unformatNumber(number) {
    return number.replace(/,/g, '') * 1
  },
  padNumber(num, size) {
    var s = num + ''
    while (s.length < size) s = '0' + s
    return s
  }
}
Vue.mixin({
  methods: methods,
  filters: {
    displayNumber(number){
      return Number(parseFloat(number).toFixed(2)).toLocaleString('en', {
        minimumFractionDigits: 2
      })
    }
  }
})
export default methods

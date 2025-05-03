import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    count: 0,
    title: 'This is counter title'
  }),
  actions: {
    increaseCount(amount){
      this.count += amount
    },
    decreaseCount(amount){
      this.count -= amount
    }
  },
  getters:{
    oddOrEven: (state) => {
      if(state.count % 2 == 0) return 'even'
      return 'odd'
    }
  }
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  // actions: {
  //   increment() {
  //     this.counter++
  //   }
  // }
})

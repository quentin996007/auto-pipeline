import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number,
  url: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    url: ''
  },
  mutations: {
    increment(state) {
      state.count++
    },
    updateURL(state, url) {
      state.url = url
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}
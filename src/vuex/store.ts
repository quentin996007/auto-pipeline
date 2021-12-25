// import { InjectionKey } from 'vue'
// import { createStore, useStore as baseUseStore, Store } from 'vuex'
// import { DataSource } from '../components/datasource/model/DataSource'

// export interface State {
//   dataSource: DataSource | null
// }

// export const key: InjectionKey<Store<State>> = Symbol()

// export const store = createStore<State>({
//   state: {
//     dataSource: null
//   },
//   mutations: {
//     setDataSource(state, dataSource: DataSource) {
//       state.dataSource = dataSource
//     }
//   }
// })

// // 定义自己的 `useStore` 组合式函数
// export function useStore() {
//   return baseUseStore(key)
// }
import { defineStore } from 'pinia'
import { DataSource } from '../components/datasource/model/DataSource'

export interface State {
  dataSource: DataSource | null
}

const dataSourceState: State = {
  dataSource: null
}

export const useDataSourceStore = defineStore('dataSource', {
  // a function that returns a fresh state
  state: () => (dataSourceState),

  // optional actions
  actions: {
    setDataSource(dataSource: DataSource | null) {
      this.dataSource = dataSource
    }
  },
})
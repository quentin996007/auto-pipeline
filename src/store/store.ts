import { defineStore } from 'pinia'
import { DataSource } from '../components/datasource/model/DataSource'
import { EditorItem } from '../components/editor/model/EditorItem'

interface State {
  dataSource: DataSource | null,
  editorList: Array<EditorItem>,
}

const stateObj: State = {
  dataSource: null,
  editorList: []
}

export const useDefaultStore = defineStore('dataSource', {
  // a function that returns a fresh state
  state: () => (stateObj),

  // optional actions
  actions: {
    setDataSource(dataSource: DataSource | null) {
      this.dataSource = dataSource
    },
    pushEditorItem(editorItem: EditorItem) {
      this.editorList.push(editorItem)
    },
    removeEditorItem(index: number) {
      this.editorList.splice(index, 1)
    },
    updateEditorItem(index: number, editorItem: EditorItem) {
      this.editorList.splice(index, 1, editorItem)
    },
    changeEditorItemIndex(index: number, newIndex: number) {
      const item = this.editorList[index]
      this.editorList.splice(index, 1)
      this.editorList.splice(newIndex, 0, item)
    }
  },
})
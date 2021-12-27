export enum EditorItemType {
  CodeEditorType = 'CodeEditorType',
  DataAnalysisType = 'DataAnalysisType',
}

export namespace EditorItemType {
  export function description(type: EditorItemType) {
    switch (type) {
      case EditorItemType.CodeEditorType:
        return '编码'
      case EditorItemType.DataAnalysisType:
        return '数据分析'
    }
  }
}
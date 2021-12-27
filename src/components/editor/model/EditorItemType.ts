export enum EditorItemType {
  CodeEditorType = 'CodeEditorType',
  DataAnalysisType = 'DataAnalysisType',
  DataPreprocessingType = 'DataPreprocessingType',
}

export namespace EditorItemType {
  export function description(type: EditorItemType) {
    switch (type) {
      case EditorItemType.CodeEditorType:
        return '编码'
      case EditorItemType.DataAnalysisType:
        return '数据分析'
      case EditorItemType.DataPreprocessingType:
        return '数据预处理'
    }
  }
}
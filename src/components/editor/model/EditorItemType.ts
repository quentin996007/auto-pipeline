export enum EditorItemType {
  CodeEditorType = 'CodeEditorType',
}

export namespace EditorItemType {
  export function description(type: EditorItemType) {
    switch (type) {
      case EditorItemType.CodeEditorType:
        return '编码处理单元'
    }
  }
}
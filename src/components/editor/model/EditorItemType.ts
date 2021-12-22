export enum EditorItemType {
  FileDataSource = 'FileDataSource',
  URLDataSource = 'URLDataSource',
}

export namespace EditorItemType {
  export function description(type: EditorItemType) {
    switch (type) {
      case EditorItemType.FileDataSource:
        return '数据源 - 文件'
      case EditorItemType.URLDataSource:
        return '数据源 - URL'
    }
  }
}
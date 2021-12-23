export enum DataSourceType {
  FILE = 'FILE',
  URL = 'URL',
}

export namespace DataSourceType {
  export function description(type?: DataSourceType) {
    switch (type) {
      case DataSourceType.FILE:
        return '文件'
      case DataSourceType.URL:
        return 'URL'
    }
  }
}

export interface DataSource {
  url: string
  type: DataSourceType
}

export enum DataSourceType {
  FILE,
  URL
}
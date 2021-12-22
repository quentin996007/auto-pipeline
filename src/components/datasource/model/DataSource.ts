import { DataSourceType } from "./DataSourceType";

export interface DataSource {
  url: string
  type: DataSourceType
}
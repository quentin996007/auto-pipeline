import { EditorItemType } from "./EditorItemType";

export interface EditorItem {
  type: EditorItemType,
  code?: string,
  codeType?: string,
  sort?: number,
}
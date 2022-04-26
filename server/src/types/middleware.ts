export type IObjValidate = {
  body?: string[]
  params?: string[]
  query?: string[]
};

export type IListObjValidate = { [key: string]: IObjValidate };

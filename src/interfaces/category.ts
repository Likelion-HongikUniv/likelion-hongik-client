export interface ICommunityParam {
  categoryName: string;
}

export interface ITag {
  [key: string]: string;
  text: string;
}

export interface ICategory {
  [key: string]: any;
  tags: ITag[];
  text: string;
}

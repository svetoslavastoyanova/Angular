import { IBase } from './base';
import { IUser } from './user';

export interface ITheme<T = string> extends IBase {
  subscribers: string[];
  posts: T[]; // pokazwa che nqma da e prosto string a list ot stringowe
  themeName: string;
  userId: IUser;
}
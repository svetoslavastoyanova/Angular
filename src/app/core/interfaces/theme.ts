import { IBase } from './base';
import { IUser } from './user';

export interface ITheme<T = string> extends IBase { // po podrazbirane postowete ni shte sa string, no ako nqkoi izbroi neshto drygo
  // shte budat tochno towa neshto drygo. w lsychaq obekti
  subscribers: string[];
  posts: T[];
  themeName: string;
  userId: IUser;
}

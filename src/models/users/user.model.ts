export interface IUser {
  name: string;
  lastname: string;
  Id: number;
}

export const UserEmptyState: IUser = {
  name: '',
  lastname: '',
  Id: 0,
};

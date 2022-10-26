import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices';
import { IUser } from '@/models';

export interface IStore {
  user: IUser;
}

export default configureStore<IStore>({
  reducer: {
    user: userSlice,
  },
});

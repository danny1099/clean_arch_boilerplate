import { createSlice } from '@reduxjs/toolkit';
import { UserEmptyState } from '@/models';

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action) => action.payload,
    updateUser: (state, action) => action.payload,
    resetUser: (state, action) => action.payload,
  },
});

/*NOTE: Se debe exportar las acciones del reducer*/
export const { createUser, updateUser, resetUser } = userSlice.actions;

/* NOTE: Se debe exportar como default el reducer del slice */
export default userSlice.reducer;

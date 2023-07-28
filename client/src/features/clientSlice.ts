import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface ClientState {
  id: Number;
}

const initialState: ClientState = {
  id: 2,
};
export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setClientId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

export const { setClientId } = clientSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectClient = (state: RootState) => state.client.id;

export default clientSlice.reducer;

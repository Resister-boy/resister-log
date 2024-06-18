import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/state/store';

export interface IMessageState {
  autoClose: {
    duration: number;
  } | null;
  message: {
    title: {
      text: string;
      type: 'text' | 'link' | 'button';
      link?: string;
      onClick?: () => void;
    };
    subTitle: string;
  } | null;
}

const initialState: IMessageState = {
  autoClose: null,
  message: null,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    CREATE_MESSAGE: (state, action) => {
      const { autoClose, message } = action.payload;

      state.autoClose = autoClose;
      state.message = message;
    },
    CLOSE_MESSAGE: (state) => {
      state.autoClose = null;
      state.message = null;
    },
  },
});

export const { CREATE_MESSAGE, CLOSE_MESSAGE } = messageSlice.actions;
export const getMessage = (state: RootState) => state.message;

export default messageSlice.reducer;

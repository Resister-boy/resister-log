import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/state/store';

export interface IToastState {
  toastId: number;
  autoClose: {
    duration: number;
  };
  toast: {
    direction: 'top' | 'right' | 'bottom';
    text: string;
  };
}

const initialState: IToastState[] = [];

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    CREATE_TOAST: (state, action) => {
      const { autoClose, toast } = action.payload;

      const newState: IToastState = {
        toastId: state.length,
        autoClose: autoClose,
        toast: toast,
      };
      state.push(newState);
    },
    CLOSE_TOAST: (state, action) => {
      const { toastId } = action.payload;

      const _state = state.filter((item: IToastState) => {
        return item.toastId !== toastId;
      });

      state = [..._state];
    },
  },
});

export const { CREATE_TOAST, CLOSE_TOAST } = toastSlice.actions;
export const getToast = (state: RootState) => state.toast;

export default toastSlice.reducer;

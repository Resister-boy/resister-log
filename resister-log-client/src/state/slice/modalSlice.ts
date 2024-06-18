import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/state/store';
import { ModalType } from '@/interface/ui/modal';

export interface IModalState {
  name: ModalType | undefined;
  data?: string;
}

const initialState: IModalState = {
  name: undefined,
  data: undefined,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    OPEN_MODAL: (state, action) => {
      const { name } = action.payload;

      state.name = name;

      if (action.payload.data) {
        state.data = action.payload.data;
      }
    },
    CLOSE_MODAL: (state) => {
      state.name = undefined;
      state.data = undefined;
    },
    CHANGE_MODAL: (state, action) => {
      const { modal } = action.payload;
      state.name = modal;
    },
  },
});

export const { OPEN_MODAL, CLOSE_MODAL, CHANGE_MODAL } = modalSlice.actions;

export const getModal = (state: RootState) => state.modal.name;
export const getModalState = (state: RootState) => state.modal;

export default modalSlice.reducer;

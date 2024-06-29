import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/state/store';

export interface INavSlice {
  status: 'grow' | 'shrink';
}

const initialState: INavSlice = {
  status: 'grow',
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    OPEN_NAV_BAR: (state) => {
      state.status = 'grow';
    },
    CLOSE_NAV_BAR: (state) => {
      state.status = 'shrink';
    },
    REVERSE_NAV_BAR: (state) => {
      const current = state.status;

      current === 'grow' ? (state.status = 'shrink') : (state.status = 'grow');
    },
  },
});

export const { OPEN_NAV_BAR, CLOSE_NAV_BAR, REVERSE_NAV_BAR } =
  navSlice.actions;
export const getNavState = (state: RootState) => state.nav;

export default navSlice.reducer;

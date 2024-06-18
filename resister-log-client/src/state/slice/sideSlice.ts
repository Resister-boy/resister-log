import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/state/store';
import { SidebarType } from '@/interface/ui/sideBar';

export interface ISideSlice {
  name: SidebarType | null;
  visibility: boolean;
}

const initialState: ISideSlice = {
  name: null,
  visibility: false,
};

const sideSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {
    OPEN_SIDE_BAR: (state, action) => {
      const { name } = action.payload;

      state.name = name;
      state.visibility = true;
    },
    CLOSE_SIDE_BAR: (state) => {
      state.name = null;
      state.visibility = false;
    },
  },
});

export const { OPEN_SIDE_BAR, CLOSE_SIDE_BAR } = sideSlice.actions;
export const getSideState = (state: RootState) => state.side;

export default sideSlice.reducer;

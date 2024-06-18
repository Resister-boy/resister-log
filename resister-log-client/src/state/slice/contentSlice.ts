import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/state/store';

export interface IContentSlice {
  log: {
    bookId: string;
    bookTitle: string;
    logTitle: string;
    logContent: string;
    images: string[];
    tag: string[];
    languageId: string;
    languageTitle: string;
    isPublic: string;
    categoryId: string;
    categoryTitle: string;
  } | null;
}

const initialState: IContentSlice = {
  log: null,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    CREATE_LOG: (state, action) => {},
  },
});

export const { CREATE_LOG } = contentSlice.actions;

export const getLog = (state: RootState) => state.content.log;

export default contentSlice.reducer;

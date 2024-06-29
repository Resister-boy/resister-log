import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/state/store';
import { CategoryType, EditorType, SeriesType } from '@/interface/data/post';

export interface ICreatePostSlice {
  type: EditorType | undefined;
  isEdit: boolean;
  tags: string[];
  category: CategoryType | null;
  series: SeriesType | null;
  title: string;
  subTitle: string;
  content: string | null;
  isPublic: boolean;
}

const initialState: ICreatePostSlice = {
  type: undefined,
  isEdit: false,
  tags: [],
  category: null,
  series: null,
  title: '',
  subTitle: '',
  content: null,
  isPublic: true,
};

const createPostSlice = createSlice({
  name: 'createPost',
  initialState,
  reducers: {
    SET_TYPE: (state, action) => {
      const { type } = action.payload;
      state.type = type;
    },
    SET_REVERSE_TYPE: (state) => {
      if (state.type === 'Editor') {
        state.type = 'Markdown';
      } else if (state.type === 'Markdown') {
        state.type = 'Editor';
      }
    },
    SET_IS_EDIT: (state, action) => {
      const { isEdit } = action.payload;
      state.isEdit = isEdit;
    },
    SET_REVERSE_EDIT: (state) => {
      if (state.isEdit === true) {
        state.isEdit = false;
      } else {
        state.isEdit = true;
      }
    },
    SET_TAGS: (state, action) => {
      const { tags } = action.payload;
      state.tags = [...tags];
    },
    SET_CATEGORY: (state, action) => {
      const { category } = action.payload;
      state.category = { ...category };
    },
    SET_SERIES: (state, action) => {
      const { series } = action.payload;
      state.series = { ...series };
    },
    SET_TITLE: (state, action) => {
      const { title } = action.payload;
      state.title = title;
    },
    SET_SUBTITLE: (state, action) => {
      const { subTitle } = action.payload;
      state.subTitle = subTitle;
    },
    SET_IS_PUBLIC: (state, action) => {
      const { isPublic } = action.payload;
      state.isPublic = isPublic;
    },
    SET_REVERSE_PUBLIC: (state, action) => {
      if (state.isPublic === true) {
        state.isPublic = false;
      } else {
        state.isPublic = true;
      }
    },
    SET_CONTENT: (state, action) => {
      const { content } = action.payload;
      state.content = content;
    },
  },
});

export const {
  SET_TYPE,
  SET_REVERSE_TYPE,
  SET_IS_EDIT,
  SET_REVERSE_EDIT,
  SET_TAGS,
  SET_CATEGORY,
  SET_SERIES,
  SET_TITLE,
  SET_SUBTITLE,
  SET_IS_PUBLIC,
  SET_REVERSE_PUBLIC,
  SET_CONTENT,
} = createPostSlice.actions;

export const getPost = (state: RootState) => state.createPost;
export const getEditorType = (state: RootState) => state.createPost.type;
export const getIsEdit = (state: RootState) => state.createPost.isEdit;
export const getTags = (state: RootState) => state.createPost.tags;
export const getCategory = (state: RootState) => state.createPost.category;
export const getSeries = (state: RootState) => state.createPost.series;
export const getTitle = (state: RootState) => state.createPost.title;
export const getSubTitle = (state: RootState) => state.createPost.subTitle;
export const getIsPublic = (state: RootState) => state.createPost.isPublic;
export const getContent = (state: RootState) => state.createPost.content;

export default createPostSlice.reducer;

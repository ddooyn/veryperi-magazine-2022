import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from 'shared/firebase';
import { getDocs, addDoc, collection } from 'firebase/firestore';

export const getPosts = createAsyncThunk('post/getPosts', async () => {
  const posts = await getDocs(collection(db, 'posts'));
  let postList = [];
  posts.forEach((doc) => {
    postList.push({ id: doc.id, ...doc.data() });
  });
  return postList;
});

export const createPost = createAsyncThunk(
  'post/createPost',
  async (newPost) => {
    const docRef = await addDoc(collection(db, 'posts'), newPost);
    const postData = { id: docRef.id, ...newPost };
    return postData;
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => payload,
    [createPost.fulfilled]: (state, { payload }) => [...state, payload],
  },
});

export default postSlice.reducer;

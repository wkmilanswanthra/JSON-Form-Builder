import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {},
  config: [] as any,
};

const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    setForm(state, action) {
      state.form = action.payload;
    },
    setConfig(state, action) {
      state.config = action.payload;
    },
    addQuestion(state, action) {
      state.config[action.payload.page].elements.push(action.payload.question);
    },
    removeQuestion(state, action) {
      state.config[action.payload.page].splice(action.payload.index, 1);
    },
    swapQuestions(state, action) {
      const { source, destination } = action.payload;
      const sourceQuestion = state.config[source.page][source.index];
      state.config[source.page].splice(source.index, 1);
      state.config[destination.page].splice(
        destination.index,
        0,
        sourceQuestion
      );

      state.config = [...state.config];
    },
  },
});

export const {
  setForm,
  setConfig,
  addQuestion,
  removeQuestion,
  swapQuestions,
} = builderSlice.actions;
export default builderSlice.reducer;

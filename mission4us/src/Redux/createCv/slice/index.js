import { createSlice } from "@reduxjs/toolkit";

const CreateCvSlice = createSlice({
  name: "createcv",
  initialState: {
    Experience: [],
    Fomations: [],
    Competences: [],
    Loisirs: [],
    Rsociaux: [],
  },
  reducers: {
    createExperiences: (state, action) => {
      state.Experience = action.payload;
    },
    createFomations: (state, action) => {
      state.Fomations = action.payload;
    },
    createCompetences: (state, action) => {
      state.Competences = action.payload;
    },
    createLoisirs: (state, action) => {
      state.Loisirs = action.payload;
    },
    createRsociaux: (state, action) => {
      state.Rsociaux = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder;
  },
});

export const {
  createExperiences,
  createFomations,
  createCompetences,
  createLoisirs,
  createRsociaux,
} = CreateCvSlice.actions;
export default CreateCvSlice.reducer;

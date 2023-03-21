import { createSlice } from "@reduxjs/toolkit";

const CreateCvSlice = createSlice({
  name: "createcv",
  initialState: {
    experience: [],
    fomations: [],
    competences: [],
    loisirs: [],
    Rsociaux: [],
    openExp: false,
    openForm: false,
    openComp: false,
    openLois: false,
    openResx: false,
    TypeM: null,
  },
  reducers: {
    createExperiences: (state, action) => {
      state.experience = action.payload;
      state.openExp = false;
    },
    createFomations: (state, action) => {
      state.fomations = action.payload;
      state.openForm = false;
    },
    createCompetences: (state, action) => {
      state.competences = action.payload;
      state.openComp = false;
    },
    createLoisirs: (state, action) => {
      state.loisirs = action.payload;
      state.openLois = false;
    },
    createRsociaux: (state, action) => {
      state.Rsociaux = action.payload;
      state.openResx = false;
    },
    handleModelopenExp: (state, action) => {
      state.openExp = action.payload;
    },
    handleModelopenForm: (state, action) => {
      state.openForm = action.payload;
    },
    handleModelopenComp: (state, action) => {
      state.openComp = action.payload;
    },
    handleModelopenLois: (state, action) => {
      state.openLois = action.payload;
    },
    handleModeopenResx: (state, action) => {
      state.openResx = action.payload;
    },
    TypeModel: (state, action) => {
      state.TypeM = action.payload;
    },
    CloseModal: (state, action) => {
      state.openExp = action.payload;
      state.openForm = action.payload;
      state.openComp = action.payload;
      state.openResx = action.payload;
      state.openLois = action.payload;
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
  handleModelopenExp,
  handleModelopenForm,
  handleModelopenComp,
  handleModelopenLois,
  handleModeopenResx,
  CloseModal,
  TypeModel,
} = CreateCvSlice.actions;
export default CreateCvSlice.reducer;

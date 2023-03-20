import { createSlice } from "@reduxjs/toolkit";

const CreateCvSlice = createSlice({
  name: "createcv",
  initialState: {
    Experience: [],
    Fomations: [],
    Competences: [],
    Loisirs: [],
    Rsociaux: [],
    openExp:false,
    openForm:false,
    openComp:false,
    openLois:false,
    openResx:false,
    TypeM:null
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
  TypeModel
} = CreateCvSlice.actions;
export default CreateCvSlice.reducer;

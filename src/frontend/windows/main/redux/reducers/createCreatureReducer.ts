import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICreatureData } from '../../types/creatureTypes';
import { createCreatureDefaultValues } from '../../contants/hookFormConstants';

const initialState = {
  formValues: createCreatureDefaultValues,
};

export const createCreatureSlice = createSlice({
  name: 'createCreature',
  initialState,
  reducers: {
    changeFormValues: (
      state,
      action: PayloadAction<Partial<ICreatureData>>,
    ) => {
      state.formValues = action.payload;
    },
  },
});

export const { changeFormValues } = createCreatureSlice.actions;

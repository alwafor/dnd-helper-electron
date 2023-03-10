import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICreatureData } from '../../types/creatureTypes';
import { LocalStorage } from '../../utils/localStorage';
import { creatureExampleDragon } from '../../utils/creaturesExamples';

if (!localStorage.getItem('visited')) {
  localStorage.setItem('visited', 'true');
  LocalStorage.addCreature(creatureExampleDragon);
}

const initialState = {
  creatures: LocalStorage.getCreatures(),
};

export const creaturesSlice = createSlice({
  name: 'creatures',
  initialState,
  reducers: {
    addCreature(state, action: PayloadAction<ICreatureData>) {
      state.creatures.push(action.payload);
      LocalStorage.addCreature(action.payload);
    },
    modifyCreature(
      state,
      {
        payload: { creatureData, oldName },
      }: PayloadAction<{ creatureData: ICreatureData; oldName: string }>,
    ) {
      const creatureToModify = state.creatures.find(
        (creature) => creature.name === oldName,
      );
      if (!creatureToModify)
        throw new Error(`The creature to modify doesn't exists!`);

      state.creatures = state.creatures.map((creature) => {
        if (creature === creatureToModify) return creatureData;
        return creature;
      });
    },
    removeCreature(state, action: PayloadAction<ICreatureData>) {
      state.creatures = state.creatures.filter(
        (creature) => creature.name !== action.payload.name,
      );
      LocalStorage.removeCreature(action.payload.name);
    },
    loadCreatures(state, action: PayloadAction<ICreatureData[]>) {
      state.creatures = action.payload;
      LocalStorage.loadCreatures(action.payload);
    },
  },
});

export const { addCreature, modifyCreature, removeCreature, loadCreatures } =
  creaturesSlice.actions;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from '@/types/filter';

const initialState: FilterState = {
  currentFilter: 'All',
};

const filterSlice = createSlice({
  name: 'currentFilter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload
    }
  }
})

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;

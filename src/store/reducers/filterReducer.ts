import { FilterState, FilterAction, FilterActionTypes } from '@/types/filter';

const initialState: FilterState = {
  currentFilter: 'All',
};

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case FilterActionTypes.SET_FILTER:
      return { ...state, currentFilter: action.payload };
    default:
      return state;
  }
};

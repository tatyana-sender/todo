import { FilterAction, FilterActionTypes } from '@/types/filter';

export const setFilter = (currentFilter: string):FilterAction => ({
  type: FilterActionTypes.SET_FILTER,
  payload: currentFilter,
});

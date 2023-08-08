import { FilterActionTypes } from '@/types/filter';

export const setFilter = (currentFilter: string) => ({
  type: FilterActionTypes.SET_FILTER,
  payload: currentFilter,
});

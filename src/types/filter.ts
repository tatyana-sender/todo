export interface  FilterState {
  currentFilter: string
}

export enum FilterActionTypes {
  SET_FILTER = "SET_FILTER"
}

export interface FilterAction {
  type: FilterActionTypes.SET_FILTER;
  payload: any;
}

import { ProjectState, ProjectAction, ProjectActionTypes } from '@/types/project';

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null
}

export const projectReducer = (state = initialState, action: ProjectAction): ProjectState => {
  switch (action.type) {
    case ProjectActionTypes.START_PROJECTS:
      return { ...state, loading: true }
    case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload, loading: false }
    case ProjectActionTypes.FETCH_PROJECTS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case ProjectActionTypes.ADD_PROJECT_SUCCESS:
      return { ...state, projects: [...state.projects, action.payload], loading: false }
    case ProjectActionTypes.ADD_PROJECT_ERROR:
      return { ...state, loading: false, error: action.payload }
    case ProjectActionTypes.DELETE_PROJECT_SUCCESS:
      return { ...state, projects: state.projects.filter((project) => project.id !== action.payload), loading: false }
    case ProjectActionTypes.DELETE_PROJECT_ERROR:
      return { ...state, loading: false, error: action.payload }
    case ProjectActionTypes.EDIT_PROJECT_SUCCESS:
      return { ...state, projects: [...state.projects, action.payload], loading: false }
    case ProjectActionTypes.EDIT_PROJECT_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}

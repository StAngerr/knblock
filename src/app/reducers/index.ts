import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState } from '../state/app.state';
import { skillsReducer } from './skills.reducer';
import { SkillsActions } from '../actions/skillsActionsEnum';

export const reducers: ActionReducerMap<AppState, SkillsActions> = {
  skills: skillsReducer,
};

export const metaReducers: MetaReducer<AppState, SkillsActions>[] =
  !environment.production ? [] : [];

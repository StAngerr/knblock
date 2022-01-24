import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState } from '../state/app.state';
import { skillsReducer } from './skills.reducer';
import { SkillsActions } from '../actions/skillsActions';
import { sessionReducer } from './session.reducer';
import { SessionActions } from '../actions/sessionActions';

export const reducers: ActionReducerMap<
  AppState,
  SkillsActions & SessionActions
> = {
  skills: skillsReducer,
  session: sessionReducer,
};

export const metaReducers: MetaReducer<AppState, SkillsActions>[] =
  !environment.production ? [] : [];

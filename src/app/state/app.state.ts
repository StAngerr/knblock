import { initialSkillsState, SkillsState } from './skills.state';
import { initialSessionState, SessionState } from './session.state';

export interface AppState {
  skills: SkillsState;
  session: SessionState;
}

export const initialAppState: AppState = {
  skills: initialSkillsState,
  session: initialSessionState,
};

export const getInitialState = () => initialAppState;

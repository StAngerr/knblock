import {initialSkillsState, SkillsState} from "./skills.state";

export interface AppState {
  skills: SkillsState;
}

export const initialAppState: AppState = {
  skills: initialSkillsState
}

export const getInitialState = () => initialAppState

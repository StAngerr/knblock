import { AppState } from '../state/app.state';
import { Skill } from '../types/skill';

export const selectUsers = (state: AppState): Skill[] => state.skills.skills;

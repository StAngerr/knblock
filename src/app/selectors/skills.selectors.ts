import { AppState } from '../state/app.state';
import { Skill } from '../types/skill';

export const selectSkills = (state: AppState): Skill[] => state.skills.skills;

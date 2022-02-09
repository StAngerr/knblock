import { Skill } from '../types/skill';

export interface SkillsState {
  skills: Skill[];
  isLoading: boolean;
  categories: string[];
}

export const initialSkillsState: SkillsState = {
  skills: [],
  categories: [],
  isLoading: false,
};

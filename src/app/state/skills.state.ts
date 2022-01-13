import {Skill} from "../types/skill";

export interface SkillsState {
  skills: Skill[];
  isLoading: boolean;
}


export const initialSkillsState: SkillsState = {
  skills: [],
  isLoading: false
}

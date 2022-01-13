import { initialSkillsState } from '../state/skills.state';
import { SkillsActions, SkillsActionsEnum } from '../actions/skillsActionsEnum';

export const skillsReducer = (
  state = initialSkillsState,
  action: SkillsActions
) => {
  switch (action.type) {
    case SkillsActionsEnum.GetAll: {
      return { ...state, isLoading: true };
    }
    case SkillsActionsEnum.GetAllSuccess: {
      return {
        ...state,
        isLoading: false,
        skills: action.payload,
      };
    }
    default:
      return state;
  }
};

import { initialSkillsState } from '../state/skills.state';
import { SkillsActions, SkillsActionsEnum } from '../actions/skillsActions';

export const skillsReducer = (
  state = initialSkillsState,
  action: SkillsActions
) => {
  switch (action.type) {
    case SkillsActionsEnum.GetAll: {
      return { ...state, isLoading: true };
    }
    case SkillsActionsEnum.SetAllSkills: {
      return {
        ...state,
        isLoading: false,
        skills: action.payload,
      };
    }
    case SkillsActionsEnum.SetSkillCategories: {
      return {
        ...state,
        categories: action.payload as string[],
      };
    }
    case SkillsActionsEnum.SetUpdatedSkill: {
      return {
        ...state,
        skills: state.skills.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    }

    case SkillsActionsEnum.SetSelectedSkill: {
      return {
        ...state,
        selectedSkill: action.payload,
      };
    }
    default:
      return state;
  }
};

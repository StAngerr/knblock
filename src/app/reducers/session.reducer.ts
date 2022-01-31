import { initialSessionState, SessionState } from '../state/session.state';
import { SessionActions, SessionActionsEnum } from '../actions/sessionActions';

export const sessionReducer = (
  state: SessionState = initialSessionState,
  action: SessionActions
) => {
  switch (action.type) {
    case SessionActionsEnum.successLogin: {
      return {
        isAuthenticated: true,
        errors: [],
      };
    }
    case SessionActionsEnum.logout: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    case SessionActionsEnum.failedLogin: {
      return {
        ...state,
        errors: [action.payload],
      };
    }
    case SessionActionsEnum.logout: {
      return initialSessionState;
    }
    case SessionActionsEnum.setAuthStatus: {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

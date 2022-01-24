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
      };
    }
    default: {
      return state;
    }
  }
};

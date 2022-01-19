import { initialSessionState, SessionState } from '../state/session.state';
import { LoginActions, LoginActionsEnum } from '../actions/loginActions';

export const sessionReducer = (
  state: SessionState = initialSessionState,
  action: LoginActions
) => {
  switch (action.type) {
    case LoginActionsEnum.successLogin: {
      return {
        isAuthenticated: true,
      };
    }
    default: {
      return state;
    }
  }
};

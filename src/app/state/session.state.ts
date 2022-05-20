import { User } from '../types/user';

export interface SessionState {
  isAuthenticated: boolean;
  currentUser: User | null;
  errors: string[];
}

export const initialSessionState: SessionState = {
  isAuthenticated: false,
  currentUser: null,
  errors: [],
};

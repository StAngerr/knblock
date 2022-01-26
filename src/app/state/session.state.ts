export interface SessionState {
  isAuthenticated: boolean | null;
  errors: string[];
}

export const initialSessionState = {
  isAuthenticated: null,
  errors: [],
};

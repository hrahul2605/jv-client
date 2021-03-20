export interface GlobalInitialState {
  loading: boolean;
  authenticated: boolean;
}

export interface User {
  id: number;
  googleID: string;
  name: string;
  picture: string;
  email: string;
}

export interface UserInitialState {
  user?: User;
}

export interface DefaultRootState {
  global: GlobalInitialState;
  user: UserInitialState;
}

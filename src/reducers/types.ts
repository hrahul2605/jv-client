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

export interface Rival {
  title: string;
  key?: string;
  id?: string;
  votes?: number;
}

interface Poll {
  id?: string;
  title: string;
  description: string;
  rivals: Rival[];
}

export interface PollsInitialState {
  newPoll?: Poll;
}

export interface DefaultRootState {
  global: GlobalInitialState;
  user: UserInitialState;
  polls: PollsInitialState;
}

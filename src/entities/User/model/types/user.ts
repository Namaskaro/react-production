export interface User {
  id: string;
  usermane: string;
}

export interface UserSchema {
  authData?: User;
}

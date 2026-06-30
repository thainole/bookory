export interface RegisterUser {
  full_name: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface User {
  user_id: number;
  full_name: string;
  email: string;
  created_at?: string;
}

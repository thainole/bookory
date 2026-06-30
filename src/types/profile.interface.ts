export interface Profile {
  user_id: number;
  full_name: string;
  email: string;

  age?: number;
  phone?: string;
  country?: string;
  gender?: "male" | "female";
  bio?: string;

  created_at: string;
}

export interface ProfileUpdate {
  user_id: number;
  full_name: string;
  age?: number;
  phone?: string;
  country?: string;
  gender?: "male" | "female" | "other" | "prefer_not_say";
  bio?: string;
}

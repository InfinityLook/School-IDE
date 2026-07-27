export type UserPlan =
  | "free"
  | "student"
  | "studentPlus"
  | "pro"
  | "ultimate"
  | "school";


export interface UserProfile {
  id: string;

  email: string;

  displayName: string;

  avatar?: string;

  plan: UserPlan;

  credits: number;

  createdAt: Date;

  updatedAt: Date;
}

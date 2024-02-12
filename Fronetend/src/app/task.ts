import { User } from "./user";

export class Task {
    id!: number;
    name!: string;
    description!: string;
    status!: string;
    user!: User;

  }
  
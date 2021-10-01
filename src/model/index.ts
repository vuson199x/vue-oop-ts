export interface TaskList {
  id: string;
  name: string;
  description: string;
  priority: number;
}

export interface TaskCreate {
  name: string;
  description: string;
  priority: number;
}

export interface TaskUpdate {
  id: string;
  name: string;
  description: string;
  priority: number;
}

export interface TaskDelete {
  id: string;
  name: string;
  description: string;
  priority: number;
}

export interface TaskInterface {
  isVisible: string;
  id: string;
  name: string;
  description: string;
  priority: number;
  randomId(): string;
}

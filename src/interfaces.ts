
export interface ITasksObject {
  start: string;
  duration: number;
  title: string;
}

export interface IInitialState {
  user: string;
  start: string;
  duration: number;
  title: string;
  tasks: ITasksObject[];
  error: boolean;
}

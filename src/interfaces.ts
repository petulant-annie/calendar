
export interface ITasksObject {
  start: string;
  duration: number;
  title: string;
}

export interface IInitialState {
  start: string;
  duration: number;
  title: string;
  tasks: ITasksObject[];
}

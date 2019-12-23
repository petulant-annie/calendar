import { IAddTask } from '../interfaces';

export const addTask = (time: number, task: string): IAddTask => ({
  time,
  task,
  type: 'ADD_TASK',
});

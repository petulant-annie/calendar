import { IAddTask } from '../interfaces';

export const addTask = (
  start: number,
  duration: number,
  title: string): IAddTask => ({
    start,
    duration,
    title,
    type: 'ADD_TASK',
  });

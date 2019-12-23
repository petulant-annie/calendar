import { Action } from 'redux';

export interface IAddTask extends Action {
  time: number; task: string;
}

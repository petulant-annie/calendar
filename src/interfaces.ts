import { Action } from 'redux';

export interface IInitialState {
  start: number;
  duration: number;
  title: string;
}

export interface IAddTask extends Action {
  start: number;
  duration: number;
  title: string;
}

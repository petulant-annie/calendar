import { Action } from 'redux';

export interface IInitialState {
  start: string;
  duration: number;
  title: string;
}

export interface IAddTask extends Action {
  payload: {
    start: string;
    duration: number;
    title: string;
  };
}

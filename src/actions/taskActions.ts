import { Dispatch } from 'redux';

export const addTask = (
  user: string,
  start: string,
  duration: number,
  title: string,
) => (dispatch: Dispatch) => {
  dispatch({
    type: 'ADD_TASK',
    payload: {
      user,
      start,
      duration,
      title,
    },
  });
};

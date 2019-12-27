import { Dispatch } from 'redux';
import { sendTask, getUserTasks } from '../services/apiRequests';

export const setUser = (user: string) => (dispatch: Dispatch) => {
  return dispatch({
    type: 'SET_USER',
    payload: user,
  });
};

export const addTask = (data: {
  duration: number,
  user: string,
  start: string,
  title: string,
}) => async (dispatch: Dispatch) => {
  try {
    const sendData = await sendTask(data);
    if (sendData.error) {
      return sendData.error.message;
    }

    return dispatch({
      type: 'ADD_TASK',
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTasks = (user: string) => async (dispatch: Dispatch) => {
  try {
    const getAllTasks = await getUserTasks(user);
    if (getAllTasks.error) {
      return getAllTasks.error.message;
    }
    if (getAllTasks.tasks.length > 0) {
      return dispatch({
        type: 'GET_USER_TASKS',
        payload: { tasks: getAllTasks.tasks },
      });
    }

    return dispatch({
      type: 'GET_USER_TASKS',
      payload: { tasks: [{}] },
    });

  } catch (error) {
    console.log(error);
  }
};

export const logout = () => (dispatch: Dispatch) => {
  dispatch({
    type: 'LOGOUT',
  });
};

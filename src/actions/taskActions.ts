import { Dispatch } from 'redux';
import { sendTask } from '../services/apiRequests';

export const addTask = (data: {
  duration: number,
  user: string,
  start: string,
  title: string,
}) => async (dispatch: Dispatch) => {
  try {
    const sendData = await sendTask(data);
    if (sendData.task.error) {
      return sendData.task.error.message;
    }

    return dispatch({
      type: 'ADD_TASK',
      payload: data,
    });

  } catch (error) {
    console.log(error);
  }
};

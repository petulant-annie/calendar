import { INITIAL_STATE } from '../constants';
import { IAddTask } from '../interfaces';

const calendarState = (
  state = INITIAL_STATE,
  action: any,
) => {
  switch (action.type) {
    case 'ADD_TASK':
      const {
        start,
        duration,
        title } = action as IAddTask;

      return {
        ...state, start,
        duration,
        title,
      };

    default:
      return state;
  }
};

export default calendarState;

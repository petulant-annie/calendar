import { INITIAL_STATE } from '../constants';

const calendarState = (
  state = INITIAL_STATE,
  action: any,
) => {
  switch (action.type) {
    case 'ADD_TASK':
      const { time, task } = action;

      return { ...state, time, task };

    default:
      return state;
  }
};

export default calendarState;

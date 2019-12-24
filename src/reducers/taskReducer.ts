import { INITIAL_STATE } from '../constants';

const calendarState = (
  state = INITIAL_STATE,
  action: any,
) => {
  switch (action.type) {
    case 'ADD_TASK':
      const {
        start,
        duration,
        title } = action.payload;

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

import { INITIAL_STATE } from '../constants';

const calendarState = (
  state = INITIAL_STATE,
  action: any,
) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        start: action.payload.start,
        duration: action.payload.duration,
        title: action.payload.title,
      };

    case 'GET_USER_TASKS':
      return { ...state, tasks: action.payload.tasks };
    default:
      return state;
  }
};

export default calendarState;

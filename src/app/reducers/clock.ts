export const HOUR = 'HOUR';
export const SECOND = 'SECOND';

export const clock = (state = new Date(), action) => {
  //return state;
  const date = new Date(state.getTime());
    switch(action.type) {

      case SECOND:
              date.setSeconds(date.getSeconds() + action.payload);
              return date;


      case HOUR:
            date.setHours(date.getHours() + action.payload);
            return date;
    }

    return state;

}

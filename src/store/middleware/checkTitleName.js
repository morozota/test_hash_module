import * as types from "../../AC/type";

export default ({getState}) => next => action => {
  const {
    hashReducer: { items }
  } = getState();

  if (action.type === types.ADDHASH || action.type === types.SAVEHASH ) {
    const res = items.find(item => item.title === action.payload.title);
    if (!res) {
      return next({
        ...action
      });
    } else {
      return next({
        type: types.ALLREADYHASH,
        payload: action.payload.title
      });
    }
  }
  return next({
    ...action
  });
};

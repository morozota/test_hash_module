import * as types from "./type";

//hash
export const addHash = payload => ({
  type: types.ADDHASH,
  payload
});

export const deleteHash = payload => ({
  type: types.DELETEHASH,
  payload
});

export const editHash = payload => ({
  type: types.EDITHASH,
  payload
});

export const saveHash = payload => ({
  type: types.SAVEHASH,
  payload
});

export const editCancel = () => ({
  type: types.CANCELEDIT
});

export const checkHashCancel = () => ({
  type: types.ALLREADYHASHCANCEL
})

//combo hash
export const addComboHash = payload => ({
  type: types.COMBO + types.ADDHASH,
  payload
});

export const editComboHash = payload => ({
  type: types.COMBO + types.EDITHASH,
  payload
});

export const saveCombo = payload => ({
  type: types.COMBO + types.SAVEHASH,
  payload
});

export const cancelCombo = payload => ({
  type: types.COMBO + types.CANCELEDIT,
  payload
});

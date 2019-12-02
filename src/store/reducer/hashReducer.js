import * as types from '../../ac/type'

const defaultState = {
  items: [],
  allreadyhash: false,
  allreadyhashTitle: '',
}

export const hashReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.ADDHASH:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: payload.id,
            title: payload.title,
          },
        ],
      }
    case types.DELETEHASH:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
      }
    case types.EDITHASH:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === payload) return { ...item, edit: true }
          return item
        }),
      }
    case types.SAVEHASH:
      return {
        ...state,
        items: state.items.map(i => {
          if (i.id === payload.id) return { ...i, title: payload.title, edit: false }
          return i
        }),
      }
    case types.CANCELEDIT:
      return {
        ...state,
        items: state.items.map(i => ({ ...i, edit: false })),
      }
    case types.ALLREADYHASH:
      return { ...state, allreadyhash: true, allreadyhashTitle: payload }
    case types.ALLREADYHASHCANCEL:
      return { ...state, allreadyhash: false }
    default:
      return state
  }
}

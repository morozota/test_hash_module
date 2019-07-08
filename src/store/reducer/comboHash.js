import * as types from '../../AC/type'

const defaultState = {
  combo: [],
}

export const comboHash = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.COMBO + types.ADDHASH:
      const { selectedItems, id } = payload
      return {
        ...state,
        combo: [
          ...state.combo,
          {
            nameCombo: 'Default Name',
            id,
            hash: selectedItems.map(i => ({
              tag: i,
            })),
          },
        ],
      }
    case types.COMBO + types.EDITHASH:
      return {
        ...state,
        combo: state.combo.map(item => {
          if (item.id === payload) return { ...item, edit: true }
          //console.log(item.id, payload)
          return item
        }),
      }
    case types.COMBO + types.SAVEHASH:
      return {
        ...state,
        combo: state.combo.map(item => {
          if (item.id === payload.id) return { ...item, nameCombo: payload.inputEdit, edit: false }
          return item
        }),
      }
    case types.COMBO + types.CANCELEDIT:
      return {
        ...state,
        combo: state.combo.map(item => ({ ...item, edit: false })),
      }
    default:
      return state
  }
}

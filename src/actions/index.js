export const actionTypes = {
  CHANGE_TAB: 'CHANGE_TAB',
  SELECT_BANK: 'SELECT_BANK'
}

export const changeTab = tab => ({
  type: actionTypes.CHANGE_TAB,
  tab
})

export const selectBank = bank => ({
  type: actionTypes.SELECT_BANK,
  bank
})
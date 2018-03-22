import { actionTypes } from '../actions'

const initialInfo = {
  activeTab: 'internet',
  paymentCode: '12345678',
  totalAmount: 0
}

export default function (state = initialInfo, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TAB:
      return {...state, activeTab: action.tab}
    default:
      return state
  }
}
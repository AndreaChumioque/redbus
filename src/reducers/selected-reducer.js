import { actionTypes } from '../actions'

const initialSelected = {
  name: 'bcp',
  text: '',
  image: 'assets/logo-bcp.svg',
  instructions: ['Selecciona la opción Pago de servicios > EMPRESAS > PAGOEFECTIVO > SOLES.', 'Ingresa tu código CIP: 9125682 y sigue los pasos.'],
  disclaimer: []
}

export default function (state = initialSelected, action) {
  switch (action.type) {
    case actionTypes.SELECT_BANK:
      return action.bank
    default:
      return state
  }
}
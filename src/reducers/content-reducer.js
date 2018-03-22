export default function () {
  return {
    internet: {
      banks: [
        {name: 'bcp', text: '', image: 'assets/logo-bcp.svg', instructions: ['Selecciona la opción Pago de servicios > EMPRESAS > PAGOEFECTIVO > SOLES.', 'Ingresa tu código CIP: 9125682 y sigue los pasos.']},
        {name: 'bbva', text: '', image: 'assets/logo-bbva.svg', instructions: ['Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre> PAGOEFECTIVO > PAGOEFECTIVOSOLES.', 'Ingresa tu código CIP: 9125682 y sigue los pasos.']},
        {name: 'interbank', text: '', image: 'assets/logo-interbank.svg', instructions: ['Selecciona la opción Pago a Instituciones o Empresa > Empresa: PAGOEFECTIVO > Servicio: PAGOEFECTIVO', 'Ingresa tu código CIP: 9125682 y sigue los pasos.']},
        {name: 'scotiabank', text: '', image: 'assets/logo-scotia.svg', instructions: ['Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES', 'Ingresa tu código CIP: 9125682 y sigue los pasos.']},
        {name: 'banbif', text: '', image: 'assets/logo-banbif.svg', instructions: ['Selecciona la opción Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO > Selecciona la empresa PAGOEFECTIVO', 'Ingresa tu código CIP: 9125682 y sigue los pasos.']}
      ],
      link: '#internet',
      buttonText: 'Ir a banca por internet'
    },
    cash: {
      banks: [
        {name: 'bcp', text: 'Agentes y Bodegas Agencias', image: 'assets/logo-bcp.svg'},
        {name: 'bbva', text: 'Agentes y Bodegas Agencias', image: 'assets/logo-bbva.svg'},
        {name: 'interbank', text: 'Agentes y Bodegas Agencias', image: 'assets/logo-interbank.svg'},
        {name: 'banbif', text: 'Agencias', image: 'assets/logo-banbif.svg'},
        {name: 'fullcarga', text:'Agentes y Bodegas Agencias', image: 'assets/logo-fullcarga.svg'},
        {name: 'scotiabank', text: 'Agencias', image: 'assets/logo-scotia.svg'},
        {name: 'western', text: 'Agentes y Bodegas Agencias', image: 'assets/logo-wu.svg'},
        {name: 'kasnet', text:'Agentes', image: 'assets/logo-kasnet.svg'}
      ],
      link: 'https://ubicanos.pagoefectivo.pe/#/?tienda=[idServicio]&moneda=1&monto=100.00&ubicame=true',
      buttonText: 'Encuentra tu punto de pago'
    }
  }
}
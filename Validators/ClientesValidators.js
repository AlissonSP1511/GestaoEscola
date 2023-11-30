import * as Yup from 'yup';

const ClientesValidators = Yup.object().shape({
    clientes: Yup.string()
        .min(2, 'Valor muito curto')
        .max(200, 'Valor muito grande')
        .required('Campo obrigatório'),
        numero: Yup.number()
    
    


})
export default ClientesValidators;     
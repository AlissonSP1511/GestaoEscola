import * as Yup from 'yup';

const FuncionariosValidators = Yup.object().shape({
    Nome: Yup.string()
        .min(5, 'Valor muito curto')
        .max(30, 'Valor muito grande')
        .required('Campo obrigatório')


})
export default FuncionariosValidators;     
import * as Yup from 'yup';

const FornecedoresValidators = Yup.object().shape({
    alunos: Yup.string()
        .min(2, 'Valor muito curto')
        .max(30, 'Valor muito grande')
        .required('Campo obrigatório'),
        medico: Yup.string()
        .min(2, 'Valor muito curto')
        .max(30, 'Valor muito grande')
        .required('Campo obrigatório')
       
})
export default FornecedoresValidators;     
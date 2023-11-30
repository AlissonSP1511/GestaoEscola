import * as Yup from 'yup';

const EmpresasParceirasValidators = Yup.object().shape({
    alunos: Yup.string()
        .min(5, 'Valor muito curto')
        .max(28, 'Valor muito grande')
        .required('Campo obrigatório'),
    medico: Yup.string()
        .min(5, 'Valor muito curto')
        .max(28, 'Valor muito grande')
        .required('Campo obrigatório'),
    resultado: Yup.string()
        .min(5, 'Valor muito curto')
        .max(300, 'Valor muito grande')
        .required('Campo obrigatório'),

})
export default EmpresasParceirasValidators;     
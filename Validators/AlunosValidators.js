import * as Yup from 'yup';

const AlunosValidators = Yup.object().shape({
    nome: Yup.string()
        .min(2, 'Valor muito curto')
        .max(30, 'Valor muito grande')
        .required('Campo obrigatório')
    
    


})
export default AlunosValidators;     
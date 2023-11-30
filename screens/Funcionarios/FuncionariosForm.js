// c:/Users/aliss/Desktop/#posto_de_saude1/screens/Funcionarios/FuncionariosForm.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { mask } from 'remask';
import FuncionariosValidators from '../../Validators/FuncionariosValidators';
import * as Yup from 'yup';

const FuncionariosForm = ({ navigation, route }) => {

    let funcionarios = {
        Nome: '',
        CPF: '',
        matricula: '',
        salario: '',
        telefone: '',
        CEP: '',
        logradouro: '',
        email: '',
        Complemento: '',
        numero: '',
        bairro: ''
    }
    const [selectedLanguage, setSelectedLanguage] = useState();
    const id = route.params?.id

    if (id >= 0) {
        funcionarios = route.params?.funcionarios
    }

    function salvar(dados) {

        AsyncStorage.getItem('funcionarios').then(resultado => {
            const funcionarios = JSON.parse(resultado) || []

            if (id >= 0) {
                funcionarios.splice(id, 1, dados)

            } else {
                funcionarios.push(dados)
            }

            AsyncStorage.setItem('funcionarios', JSON.stringify(funcionarios))
            navigation.goBack()
        })
    }
    return (
        <ScrollView style={{ margin: 15 }}>
            <Text>Formulário de Funcionarios</Text>

            <Formik
                initialValues={funcionarios}
                validationSchema={FuncionariosValidators}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                    <View>

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Nome'
                            value={values.Nome}
                            onChangeText={handleChange('Nome')}
                        />
                        {(errors.Nome && touched.Nome) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.Nome}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='CPF'
                            keyboardType='decimal-pad'
                            value={values.CPF}
                            onChangeText={(value) => { setFieldValue('CPF', mask(value, '999.999.999-99')) }}
                        />
                        {(errors.CPF && touched.CPF) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.CPF}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Matrícula'
                            keyboardType='decimal-pad'
                            value={values.matricula}
                            onChangeText={handleChange('matricula')}
                        />
                        {(errors.matricula && touched.matricula) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.matricula}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Salário'
                            keyboardType='decimal-pad'
                            value={values.salario}
                            onChangeText={handleChange('salario')}
                        />
                        {(errors.salario && touched.salario) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.salario}
                            </Text>
                        }
                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Telefone'
                            keyboardType='decimal-pad'
                            value={values.telefone}
                            onChangeText={(value) => { setFieldValue('telefone', mask(value, '(99)999999999')) }}
                        />
                        {(errors.telefone && touched.telefone) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.telefone}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='CEP'
                            keyboardType='decimal-pad'
                            value={values.CEP}
                            onChangeText={handleChange('CEP')}
                        />
                        {(errors.CEP && touched.CEP) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.CEP}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Logradouro'
                            value={values.logradouro}
                            onChangeText={handleChange('logradouro')}
                        />
                        {(errors.logradouro && touched.logradouro) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.logradouro}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='E-mail'
                            value={values.email}
                            onChangeText={handleChange('email')}
                        />
                        {(errors.email && touched.email) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.email}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Complemento'
                            value={values.Complemento}
                            onChangeText={handleChange('Complemento')}
                        />
                        {(errors.Complemento && touched.Complemento) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.Complemento}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Número'
                            keyboardType='decimal-pad'
                            value={values.numero}
                            onChangeText={handleChange('numero')}
                        />
                        {(errors.numero && touched.numero) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.numero}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Bairro'
                            value={values.bairro}
                            onChangeText={handleChange('bairro')}
                        />
                        {(errors.bairro && touched.bairro) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.bairro}
                            </Text>
                        }

                        <Button style={styles.botao} onPress={handleSubmit}>Salvar</Button>
                    </View>
                )}

            </Formik>
        </ScrollView >

    )
};
const styles = StyleSheet.create({
    botao: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,}
})

export default FuncionariosForm;
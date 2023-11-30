// c:/Users/aliss/Desktop/#posto_de_saude1/screens/Alunos/AlunosForm.js

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'
import AlunosValidators from '../../Validators/AlunosValidators'

const AlunosForm = ({ navigation, route }) => {

    let alunos = {
        nome: '',
        cpf: '',
        email: '',
        telefone: '',
        cep: '',
        logradouro: '',
        complemento: '',
        numero: '',
        bairro: '',
    }
    const [selectedLanguage, setSelectedLanguage] = useState();
    const id = route.params?.id

    if (id >= 0) {
        alunos = route.params?.alunos
    }

    function salvar(dados) {

        AsyncStorage.getItem('alunos').then(resultado => {
            const alunos = JSON.parse(resultado) || []

            if (id >= 0) {
                alunos.splice(id, 1, dados)

            } else {
                alunos.push(dados)
            }

            AsyncStorage.setItem('alunos', JSON.stringify(alunos))
            navigation.goBack()
        })
    }
    return (
        <ScrollView style={{ margin: 15 }}>
            <Text>Formulário do alunos</Text>

            <Formik
                initialValues={alunos}
                validationSchema={AlunosValidators}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                    <View>

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Nome'
                            value={values.nome}
                            onChangeText={handleChange('nome')}
                        />
                        {(errors.nome && touched.nome) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.nome}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='CPF'
                            keyboardType='decimal-pad'
                            value={values.cpf}
                            onChangeText={(value) => { setFieldValue('cpf', mask(value, '999.999.999-99')) }}
                        />
                        {(errors.cpf && touched.cpf) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.cpf}
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
                            value={values.cep}
                            onChangeText={handleChange('cep')}
                        />
                        {(errors.cep && touched.cep) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.cep}
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
                            label='Complemento'
                            value={values.complemento}
                            onChangeText={handleChange('complemento')}
                        />
                        {(errors.complemento && touched.complemento) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.complemento}
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
}
const styles = StyleSheet.create({
    botao: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,}
    
})
export default AlunosForm

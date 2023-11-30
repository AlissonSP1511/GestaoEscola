// c:/Users/aliss/Desktop/#posto_de_saude1/screens/EmpresasParceiras/EmpresasParceirasForm.js

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'
import EmpresasParceirasValidators from '../../Validators/EmpresasParceirasValidators'

const EmpresasParceirasForm = ({ navigation, route }) => {

    let empresasparceiras = {
        alunos: '',
        medico: '',
        resultado: ''
    }
    const [selectedLanguage, setSelectedLanguage] = useState();
    const id = route.params?.id

    if (id >= 0) {
        empresasparceiras = route.params?.empresasparceiras
    }

    function salvar(dados) {

        AsyncStorage.getItem('empresasparceiras').then(resultado => {
            const empresasparceiras = JSON.parse(resultado) || []

            if (id >= 0) {
                empresasparceiras.splice(id, 1, dados)

            } else {
                empresasparceiras.push(dados)
            }

            AsyncStorage.setItem('empresasparceiras', JSON.stringify(empresasparceiras))
            navigation.goBack()
        })
    }
    return (
        <ScrollView style={{ margin: 15 }}>
            <Text>Formulário do EmpresasParceiras</Text>

            <Formik
                initialValues={empresasparceiras}
                validationSchema={EmpresasParceirasValidators}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                    <View>

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Empresa'
                            value={values.alunos}
                            onChangeText={handleChange('alunos')}
                        />
                        {(errors.alunos && touched.alunos) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.alunos}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Nome do Representante'
                            value={values.medico}
                            onChangeText={handleChange('medico')}
                        />
                        {(errors.medico && touched.medico) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.medico}
                            </Text>
                        }

                        {/* <Picker
                            selectedValue={values.modalidade}
                            onValueChange={handleChange('modalidade')}>
                            <Picker.Item label="Modalidade" value="" />
                            <Picker.Item label="Entrega Normal" value="Normal" />
                            <Picker.Item label="Entrega Urgência" value="Emergência" />
                            <Picker.Item label="Entrega Lenta" value="Retorno" />

                        </Picker> */}
                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Serviço oferecido'
                            value={values.resultado}
                            onChangeText={handleChange('resultado')}
                        />
                        {(errors.resultado && touched.resultado) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.resultado}
                            </Text>
                        }


                        <Button style={style.botao} onPress={handleSubmit}>Salvar</Button>
                    </View>
                )}

            </Formik>
        </ScrollView >

    )
}

const style = StyleSheet.create({
    botao: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,}
})

export default EmpresasParceirasForm
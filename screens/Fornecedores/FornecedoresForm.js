// c:/Users/aliss/Desktop/#posto_de_saude1/screens/Fornecedores/FornecedoresForm.js

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'
import FornecedoresValidators from '../../Validators/FornecedoresValidators'

const FornecedoresForm = ({ navigation, route }) => {

    let fornecedores = {
        alunos: '',
        medico:'',
        duração: '',
        modalidade: ''
    }
    const [selectedLanguage, setSelectedLanguage] = useState();
    const id = route.params?.id

    if (id >= 0) {
        fornecedores = route.params?.fornecedores
    }

    function salvar(dados) {

        AsyncStorage.getItem('fornecedores').then(resultado => {
            const fornecedores = JSON.parse(resultado) || []

            if (id >= 0) {
                fornecedores.splice(id, 1, dados)

            } else {
                fornecedores.push(dados)
            }

            AsyncStorage.setItem('fornecedores', JSON.stringify(fornecedores))
            navigation.goBack()
        })
    }
    return (
        <ScrollView style={{ margin: 15 }}>
            <Text>Formulário da fornecedores</Text>

            <Formik
                initialValues={fornecedores}
                validationSchema={FornecedoresValidators}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                    <View>

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Nome da fornecedor'
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
                            label='Referência'
                            value={values.medico}
                            onChangeText={handleChange('medico')}
                        />
                        {(errors.medico && touched.medico) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.medico}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Tipo do produto/serviço'
                            value={values.empresasparceiras}
                            onChangeText={handleChange('empresasparceiras')}
                        />
                        {(errors.empresasparceiras && touched.empresasparceiras) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.empresasparceiras}
                            </Text>
                        }

                        {/* <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Modalidade'
                            value={values.modalidade}
                            onChangeText={handleChange('modalidade')}
                        />
                        {(errors.modalidade && touched.modalidade) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.modalidade}
                            </Text>
                        } */}

                        <Picker
                            selectedValue={values.modalidade}
                            onValueChange={handleChange('modalidade')}>
                            <Picker.Item label="Produtos" value="" />
                            <Picker.Item label="Material de Escritório" value="Material de Escritório" />
                            <Picker.Item label="Material de limpeza" value="Material de limpeza" />
                            <Picker.Item label="Maquinário" value="Maquinário" />

                        </Picker>

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
export default FornecedoresForm
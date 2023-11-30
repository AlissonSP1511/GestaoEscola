// c:/Users/aliss/Desktop/#posto_de_saude1/screens/Clientes/ClientesForm.js

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'
import ClientesValidators from '../../Validators/ClientesValidators'

const ClientesForm = ({ navigation, route }) => {

    let clientes = {
        clientes: '',
        numero:''
       
    }
    const [selectedLanguage, setSelectedLanguage] = useState();
    const id = route.params?.id

    if (id >= 0) {
        clientes = route.params?.clientes
    }

    function salvar(dados) {

        AsyncStorage.getItem('clientes').then(resultado => {
            const clientes = JSON.parse(resultado) || []

            if (id >= 0) {
                clientes.splice(id, 1, dados)

            } else {
                clientes.push(dados)
            }

            AsyncStorage.setItem('clientes', JSON.stringify(clientes))
            navigation.goBack()
        })
    }
    return (
        <ScrollView style={{ margin: 15 }}>
            <Text>Formulário da clientes</Text>

            <Formik
                initialValues={clientes}
                validationSchema={ClientesValidators}
                onSubmit={values => salvar(values)}
            >
                {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                    <View>

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Nome'
                            value={values.clientes}
                            onChangeText={handleChange('clientes')}
                        />
                        {(errors.clientes && touched.clientes) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.clientes}
                            </Text>
                        }

                        <TextInput style={{ marginTop: 10 }}
                            mode='outlined'
                            label='Número da Ordem de Serviço'
                            keyboardType='numeric'
                            value={values.numero}
                            onChangeText={handleChange('numero')}
                        />
                        {(errors.numero && touched.numero) &&
                            <Text style={{ color: 'red', marginTop: 5 }}>
                                {errors.numero}
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

export default ClientesForm
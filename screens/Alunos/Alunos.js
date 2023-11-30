//  c:/Users/aliss/Desktop/#posto_de_saude1/screens/Alunos/Alunos.js

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Alunos = ({ navigation }) => {

    const [alunos, setAlunos] = useState([])
    const [idExcluir, setIdExcluir] = useState(0)


    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    useFocusEffect(
        React.useCallback(() => {
            carregarDados()

        }, [])
    );

    function carregarDados() {
        AsyncStorage.getItem('alunos').then(resultado => {
            resultado = JSON.parse(resultado) || []
            console.log(resultado)
            setAlunos(resultado)
        })
    }

    function confirmarExclusao(id) {
        setIdExcluir(id)
        setVisible(true)
    }

    function excluir() {
        alunos.splice(idExcluir, 1)
        AsyncStorage.setItem('alunos', JSON.stringify(alunos))
        carregarDados()
        setVisible(false)
    }
    return (
        <>

            <ScrollView style={{ padding: 15 }} >


                {alunos.map((item, i) => (

                    <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
                        <Card.Content>
                            <Text variant="bodyMedium">Nome:{item.nome}</Text>
                            <Text variant="bodyMedium">CPF: {item.cpf} </Text>
                            <Text variant="bodyMedium">email: {item.email} </Text>
                            <Text variant="bodyMedium">Telefone: {item.telefone} </Text>
                            <Text variant="bodyMedium">CEP: {item.cep} </Text>
                            <Text variant="bodyMedium">logradouro: {item.logradouro} </Text>
                            <Text variant="bodyMedium">Complemento: {item.complemento} </Text>
                            <Text variant="bodyMedium">Número: {item.numero} </Text>
                            <Text variant="bodyMedium">Bairro: {item.bairro} </Text>
                        </Card.Content>
                        <Card.Actions>
                            <IconButton
                                icon='pencil-outline'
                                onPress={() => navigation.push('alunos-form', { id: i, alunos: item })}
                            />
                            <IconButton
                                icon='trash-can-outline'
                                onPress={() => confirmarExclusao(i)}
                            />
                        </Card.Actions>
                    </Card>
                ))}

                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Content>
                            <Text variant="bodyMedium">Deseja realmente excluir? </Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={excluir}>Sim</Button>
                            <Button onPress={hideDialog}>Não</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </ScrollView>

            <FAB
                icon="plus"
                size="medium"
                color="black"
                style={{ position: 'absolute', right: 10, bottom: 5, }}
                onPress={() => navigation.push('alunos-form')}

            />
        </>
    )
}
export default Alunos
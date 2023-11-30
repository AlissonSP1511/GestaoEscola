// c:/Users/aliss/Desktop/#posto_de_saude1/screens/EmpresasParceiras/EmpresasParceiras.js

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const EmpresasParceiras = ({ navigation }) => {

    const [empresasparceiras, setEmpresasParceiras] = useState([])
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
        AsyncStorage.getItem('empresasparceiras').then(resultado => {
            resultado = JSON.parse(resultado) || []
            console.log(resultado)
            setEmpresasParceiras(resultado)
        })
    }

    function confirmarExclusao(id) {
        setIdExcluir(id)
        setVisible(true)
    }

    function excluir() {
        empresasparceiras.splice(idExcluir, 1)
        AsyncStorage.setItem('empresasparceiras', JSON.stringify(empresasparceiras))
        carregarDados()
        setVisible(false)

    }

    return (
        <>

            <ScrollView style={{ padding: 15 }} >


                {empresasparceiras.map((item, i) => (

                    <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
                        <Card.Content>
                            <Text variant="titleLarge">Empresa: {item.alunos}</Text>
                            <Text variant="bodyMedium">Nome do Representante: {item.medico}</Text>
                            <Text variant="bodyMedium">Serviço oferecido: {item.resultado}</Text>

                        </Card.Content>
                        <Card.Actions>
                            <IconButton
                                icon='pencil-outline'
                                onPress={() => navigation.push('empresasparceiras-form', {id: i, empresasparceiras: item})}
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
                onPress={() => navigation.push('empresasparceiras-form')}

            />
        </>
    )
}
export default EmpresasParceiras
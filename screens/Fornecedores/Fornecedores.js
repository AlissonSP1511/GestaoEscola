// c:/Users/aliss/Desktop/#posto_de_saude1/screens/Fornecedores/Fornecedores.js

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect , } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Fornecedores = ({ navigation }) => {

    const [fornecedores, setFornecedores] = useState([])
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
        AsyncStorage.getItem('fornecedores').then(resultado => {
            resultado = JSON.parse(resultado) || []
            console.log(resultado)
            setFornecedores(resultado)
        })
    }

    function confirmarExclusao(id) {
        setIdExcluir(id)
        setVisible(true)
    }

    function excluir() {
        fornecedores.splice(idExcluir, 1)
        AsyncStorage.setItem('fornecedores', JSON.stringify(fornecedores))
        carregarDados()
        setVisible(false)

    }



    return (
        <>

            <ScrollView style={{ padding: 15 }} >


                {fornecedores.map((item, i) => (

                    <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
                        <Card.Content>
                            <Text variant="titleLarge">Fornecedor: {item.alunos}</Text>
                            <Text variant="bodyMedium">Referência: {item.medico}</Text>
                            <Text variant="bodyMedium">Produto/serviço: {item.empresasparceiras} </Text>
                            <Text variant="bodyMedium">Produto: {item.modalidade}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <IconButton
                                icon='pencil-outline'
                                onPress={() => navigation.push('fornecedores-form', {id: i, fornecedores: item})}
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
                onPress={() => navigation.push('fornecedores-form')}

            />
        </>
    )
}
export default Fornecedores
// c:/Users/aliss/Desktop/#posto_de_saude1/screens/Clientes/ClientesStack.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Clientes from './Clientes';
import ClientesForm from './ClientesForm';
import HeaderRight from '../HeaderRight';

const Stack = createNativeStackNavigator();
const ClientesStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen 
                name="clientes" 
                component={Clientes} 
                options={{ title: 'Clientes',
                headerRight: ({ navigation }) => (
                  <HeaderRight
                    navigation={navigation}
                    onSelectImage={(imageUri) => {
                      // Handle image selection
                    }}
                  />
                ),
              }} 
            />
                <Stack.Screen name="clientes-form" component={ ClientesForm} options={{ title: 'Clientes' }} />
            </Stack.Navigator>
        </>
    )
}

export default ClientesStack
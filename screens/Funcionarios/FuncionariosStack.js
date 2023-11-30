// c:/Users/aliss/Desktop/#posto_de_saude1/screens/Funcionarios/FuncionariosStack.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Funcionarios from './Funcionarios';
import FuncionariosForm from './FuncionariosForm';
import HeaderRight from '../HeaderRight';

const Stack = createNativeStackNavigator();

const FuncionariosStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen 
                name="funcionarios"
                component={Funcionarios} 
                options={{ title: 'Funcionários',
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
                <Stack.Screen name="funcionarios-form" component={FuncionariosForm} options={{ title: 'Funcionários' }} />
            </Stack.Navigator>
        </>
    )
}

export default FuncionariosStack
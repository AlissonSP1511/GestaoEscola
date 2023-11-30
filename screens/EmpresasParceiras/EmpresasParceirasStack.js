// c:/Users/aliss/Desktop/#posto_de_saude1/screens/EmpresasParceiras/EmpresasParceirasStack.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import EmpresasParceiras from './EmpresasParceiras';
import EmpresasParceirasForm from './EmpresasParceirasForm';
import HeaderRight from '../HeaderRight';


const Stack = createNativeStackNavigator();

const EmpresasParceirasStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen 
                name="empresasparceiras" 
                component={EmpresasParceiras} 
                options={{ title: 'Empresas Parceiras',
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
                <Stack.Screen name="empresasparceiras-form" component={EmpresasParceirasForm} options={{ title: 'Empresas Parceiras' }} />
            </Stack.Navigator>
        </>
    )
}

export default EmpresasParceirasStack
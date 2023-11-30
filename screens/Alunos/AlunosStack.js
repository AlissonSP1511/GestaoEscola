//  c:/Users/aliss/Desktop/#posto_de_saude1/screens/Alunos/AlunosStack.js

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Alunos from './Alunos';
import AlunosForm from './AlunosForm';
import HeaderRight from '../HeaderRight';


const Stack = createNativeStackNavigator();
const AlunosStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen 
                name="alunos" 
                component={Alunos} 
                options={{ 
                  title: 'Alunos',
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
                <Stack.Screen name="alunos-form" component={AlunosForm} options={{ title: 'alunos' }} />
            </Stack.Navigator>
        </>
    )
}

export default AlunosStack
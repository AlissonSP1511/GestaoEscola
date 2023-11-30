// c:/Users/aliss/Desktop/#posto_de_saude1/screens/Fornecedores/FornecedoresStack.js


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Fornecedores from './Fornecedores';
import FornecedoresForm from './FornecedoresForm';
import HeaderRight from '../HeaderRight';

const Stack = createNativeStackNavigator();

const FornecedoresStack = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen 
          name="fornecedores" 
          component={Fornecedores} 
          options={{ 
            title: 'Fornecedores',
            headerRight: ({ navigation }) => (
              <HeaderRight
                navigation={navigation}
                onSelectImage={(imageUri) => {
                  setSelectedImage(imageUri); // Update the selected image state
                }}
              />
            ),
          }} 
        />
        <Stack.Screen name="fornecedores-form" component={FornecedoresForm} options={{ title: 'Fornecedores' }} />
      </Stack.Navigator>
    </>
  );
}

export default FornecedoresStack;

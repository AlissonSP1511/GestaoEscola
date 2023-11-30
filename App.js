// // c:/Users/aliss/Desktop/#posto_de_saude1/App.js

// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { PaperProvider } from 'react-native-paper';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FornecedoresStack from './screens/Fornecedores/FornecedoresStack';
// import EmpresasParceirasStack from './screens/Alunos/EmpresasParceirasStack';
// import FuncionariosStack from './screens/Funcionarios/FuncionariosStack';
// import AlunosStack from './screens/Alunos/AlunosStack';
// import ClientesStack from './screens/Clientes/ClientesStack';



// const Tab = createMaterialBottomTabNavigator();
// export default function App() {
//   return (
//     <>
//       <PaperProvider>
//         <NavigationContainer>
//           <Tab.Navigator>
//             <Tab.Screen
//               name="Fornecedores"
//               component={FornecedoresStack}
//               options={{
//                 tabBarIcon: () => (
//                   <MaterialCommunityIcons name="alpha-t-box" size={26} />
//                 ),
//               }}
//             />

//             <Tab.Screen
//               name="Alunos"
//               component={EmpresasParceirasStack}
//               options={{
//                 tabBarIcon: () => (
//                   <MaterialCommunityIcons name="alpha-c" size={26} />
//                 ),
//               }}
//             />
//             <Tab.Screen
//               name="Funcionários"
//               component={FuncionariosStack}
//               options={{
//                 tabBarIcon: () => (
//                   <MaterialCommunityIcons name="alpha-f-box" size={26} />
//                 ),
//               }}
//             />

//             <Tab.Screen
//               name="Alunos"
//               component={AlunosStack}
//               options={{
//                 tabBarIcon: () => (
//                   <MaterialCommunityIcons name="alpha-p" size={26} />
//                 ),
//               }}
//             />

//             <Tab.Screen
//               name="Clientes"
//               component={ClientesStack}
//               options={{
//                 tabBarIcon: () => (
//                   <MaterialCommunityIcons name="alpha-m-box" size={26} />
//                 ),
//               }}
//             />

//           </Tab.Navigator>
//         </NavigationContainer>
//       </PaperProvider>
//     </>

//   );
// }


import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ClientesStack from './screens/Clientes/ClientesStack';
import AlunosStack from './screens/Alunos/AlunosStack';
import FuncionariosStack from './screens/Funcionarios/FuncionariosStack';
import FornecedoresStack from './screens/Fornecedores/FornecedoresStack';
import EmpresasParceirasStack from './screens/EmpresasParceiras/EmpresasParceirasStack';

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Clientes"
              component={ClientesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="alpha-c-box" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Alunos"
              component={AlunosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="alpha-a-box" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Funcionários"
              component={FuncionariosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="alpha-f-box" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Fornecedores"
              component={FornecedoresStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="alpha-f-box" size={26} />
                ),
              }}
            />

            <Tab.Screen
              name="Empresas Parceiras"
              component={EmpresasParceirasStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="alpha-e-box" size={26} />
                ),
              }}
            />

          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
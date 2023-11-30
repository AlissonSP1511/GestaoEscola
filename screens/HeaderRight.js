// c:/Users/aliss/Desktop/#posto_de_saude1/screens/HeaderRight.js

import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderRight = ({ onSelectImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Load previously selected image from AsyncStorage
    const loadPersistedImage = async () => {
      try {
        const storedImage = await AsyncStorage.getItem('selectedImage');
        if (storedImage) {
          setSelectedImage(storedImage);
        }
      } catch (error) {
        console.error('Error loading persisted image:', error);
      }
    };

    loadPersistedImage();
  }, []);

  const saveImageToStorage = async (imageUri) => {
    try {
      await AsyncStorage.setItem('selectedImage', imageUri);
    } catch (error) {
      console.error('Error saving image to AsyncStorage:', error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setSelectedImage(imageUri);
      onSelectImage(imageUri); // Pass the selected image to the parent component
      saveImageToStorage(imageUri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={{ marginRight: 10 }}>
      {selectedImage ? (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      ) : (
        <Image
          source={require('../assets/icon.png')}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
      )}
    </TouchableOpacity>
  );
};

export default HeaderRight;
